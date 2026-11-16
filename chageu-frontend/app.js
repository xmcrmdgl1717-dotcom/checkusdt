// 你的 Render 后端真实地址
const API_BASE_URL = 'https://chageu-energy-backend.onrender.com';

// 1. 获取实时汇率 (TRX/USDT)
async function fetchRates() {
    try {
        const res = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=TRXUSDT');
        const data = await res.json();
        if (data.price) {
            const trxPriceEl = document.getElementById('trxPrice');
            if (trxPriceEl) {
                trxPriceEl.innerText = parseFloat(data.price).toFixed(4) + ' USDT';
            }
        }
    } catch (err) {
        console.error('汇率获取失败', err);
        const trxPriceEl = document.getElementById('trxPrice');
        if (trxPriceEl) trxPriceEl.innerText = '获取失败';
    }
}

// 页面加载时自动获取汇率
document.addEventListener('DOMContentLoaded', () => {
    fetchRates();
});

// 2. 首页搜索功能 (自动识别地址或TxID并跳转 TronScan)
function handleSearch(event) {
    event.preventDefault(); // 阻止表单默认提交
    const query = document.getElementById('searchInput').value.trim();
    
    if (!query) return;

    // 判断输入的是 34位地址 还是 64位交易哈希
    if (query.length === 34 && query.startsWith('T')) {
        window.open(`https://tronscan.org/#/address/${query}`, '_blank');
    } else if (query.length === 64) {
        window.open(`https://tronscan.org/#/transaction/${query}`, '_blank');
    } else {
        alert('格式不正确！请输入 34 位的 TRON 地址或 64 位的 TxID 交易哈希。');
    }
}

// 3. 复制能量闪租收款地址
function copyAddress() {
    const addressEl = document.getElementById('rentalAddress');
    if (!addressEl) return;
    
    const address = addressEl.innerText.trim();
    navigator.clipboard.writeText(address).then(() => {
        alert('✅ 收款地址已复制，请向该地址转入 TRX。');
    }).catch(err => {
        alert('复制失败，请手动长按选择复制。');
    });
}

// 4. 查询后端订单状态
async function queryOrder() {
    const txIdInput = document.getElementById('orderTxId');
    const resultDiv = document.getElementById('orderResult');
    
    if (!txIdInput || !resultDiv) return;

    const txId = txIdInput.value.trim();

    // 基础校验
    if (txId.length !== 64) {
        resultDiv.innerHTML = '<span style="color: #dc2626;">❌ 请输入 64 位的交易哈希 (TxID)</span>';
        return;
    }

    resultDiv.innerHTML = '<span style="color: #64748b;">⏳ 正在连接链上节点查询（若首次查询，免费实例可能需要唤醒 50 秒，请耐心等待）...</span>';

    try {
        // 调用你部署在 Render 的 Node.js 后端接口
        const response = await fetch(`${API_BASE_URL}/api/orders/${txId}`);
        
        // 如果订单不存在 (404)
        if (response.status === 404) {
            resultDiv.innerHTML = '<span style="color: #dc2626;">❌ 未找到该订单。<br>请确认：1. 是否已转账到正确的收款地址； 2. 转账是否已确认上链； 3. 转账金额是否为 2 的倍数。</span>';
            return;
        }

        // 其他错误状态码
        if (!response.ok) {
            throw new Error(`服务器返回错误: ${response.status}`);
        }

        const data = await response.json();

        // 根据后端返回的状态渲染结果
        if (data.status === 'success') {
            resultDiv.innerHTML = `
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; border: 1px solid #bbf7d0;">
                    <span style="color: #16a34a; font-weight: bold; font-size: 16px;">✅ 能量已成功到账！</span><br>
                    <span style="color: #334155; font-weight: normal; font-size: 14px; display: block; margin-top: 8px;">
                        接收地址：${data.from_address}<br>
                        委托能量：${data.energy_amount} Energy<br>
                        委托哈希：${data.delegate_tx_id || '处理中'}
                    </span>
                </div>`;
        } else if (data.status === 'failed') {
            resultDiv.innerHTML = `
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border: 1px solid #fecaca;">
                    <span style="color: #dc2626; font-weight: bold; font-size: 16px;">❌ 委托失败</span><br>
                    <span style="color: #334155; font-weight: normal; font-size: 14px;">原因：${data.error_message || '系统异常'}<br>请联系 TG 客服处理。</span>
                </div>`;
        } else if (data.status === 'delegating' || data.status === 'pending') {
            resultDiv.innerHTML = `
                <div style="background: #fffbeb; padding: 15px; border-radius: 8px; border: 1px solid #fde68a;">
                    <span style="color: #d97706; font-weight: bold; font-size: 16px;">⏳ 正在处理中...</span><br>
                    <span style="color: #334155; font-weight: normal; font-size: 14px;">系统已识别到账，正在发送能量，请 10 秒后重新查询。</span>
                </div>`;
        } else {
            resultDiv.innerHTML = `<span style="color: #64748b;">未知状态：${data.status}</span>`;
        }

    } catch (error) {
        console.error('查询报错:', error);
        resultDiv.innerHTML = '<span style="color: #dc2626;">❌ 网络请求失败！<br>1. 请检查后端服务是否处于 Live 状态。<br>2. Render 免费实例休眠唤醒需要 50 秒，请稍后重试。</span>';
    }
}
