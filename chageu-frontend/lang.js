// lang.js - 公共中英双语字典与逻辑
const globalI18n = {
    zh: {
        nav_home: "首页", nav_usdt: "USDT转账查询", nav_energy: "能量闪租", nav_guide: "使用教程", nav_about: "关于我们", nav_contact: "联系我们", nav_search_btn: "立即查询",
        footer_title: "USDT转账查询", footer_desc: "查个U提供USDT转账查询、USDT交易查询、USDT地址查询和交易哈希查询等公开链上信息查询服务。", footer_warning: "本站不提供数字货币交易、钱包托管、充值提现、资金找回、投资建议或担保服务。",
        footer_core: "核心功能", footer_info: "网站信息", footer_pages: "说明页面", privacy: "隐私政策", terms: "服务条款", disclaimer: "免责声明", copyright: "© 2026 查个U. 所有查询结果仅供参考。",
        
        search_placeholder: "请输入USDT地址或交易哈希", hot_links: "常用：", search_btn: "立即查询", search_note: "本站仅查询公开链上信息，请勿输入私钥、助记词、钱包密码、交易所密码或验证码。",
        alert_important: "重要提醒：", alert_desc: "本站只提供USDT转账公开链上信息查询，不提供交易、充值、提现、资金找回或投资建议。",
        rate_usdt: "USDT参考汇率", rate_trx: "TRX参考汇率", rate_usdt_cny: "USDT/CNY", rate_trx_cny: "TRX/CNY",
        card_energy: "能量供应商", card_energy_desc: "一笔也是批发价", card_usdt: "免TRX转账USDT", card_usdt_desc: "多元化的能量类型",
        query_func: "查询功能", query_entry: "USDT转账记录查询入口", query_desc: "本站聚焦USDT转账查询，只做USDT公开链上转账记录相关功能。",
        tool_usdt: "USDT转账查询", tool_usdt_desc: "查询USDT地址、转账记录、交易哈希和到账状态。", tool_guide: "使用教程", tool_guide_desc: "了解如何通过USDT地址或哈希值查询USDT转账记录。",
        instruction: "使用说明", instruction_title: "如何查询USDT转账记录？", instruction_desc: "复制USDT钱包地址或交易哈希，粘贴到查询框中，即可查看该笔USDT转账相关的公开链上信息。如果是交易所提现记录，可以在提现详情页复制TxID或哈希值进行查询。",
        check_1: "查看USDT转账是否已经上链。", check_2: "核对转入地址、转出地址和金额。", check_3: "查看交易哈希、时间和状态。", check_4: "确认USDT是否已经到账。",
        sec_alert: "安全提醒", sec_alert_desc: "本站只用于查询公开链上信息，不提供交易、充值、提现、钱包托管或资产找回服务。不要输入私钥、助记词、钱包密码、交易所密码或验证码。", view_disclaimer: "查看免责声明",
        faq: "常见问题", faq_title: "USDT转账查询常见问题", faq_desc: "下面内容为静态正文，适合搜索引擎抓取。",
        faq_q1: "USDT转账查询是什么？", faq_a1: "USDT转账查询是通过USDT地址或交易哈希查看公开链上转账记录的方法，可用于核对转账状态和交易信息。",
        faq_q2: "哈希值查询有什么用？", faq_a2: "哈希值也叫TxID，可以定位一笔USDT转账，查看交易是否成功、是否确认、金额和地址是否正确。",
        faq_q3: "本站能找回转错的U吗？", faq_a3: "不能。本站只提供公开链上数据查询，不能撤回交易、冻结地址、找回资金或处理钱包权限问题。",
        faq_q4: "为什么查询不到？", faq_a4: "可能是输入内容格式不对、交易尚未上链，或者对应接口尚未返回完整数据。请核对地址或交易哈希。",
        
        usdt_kicker: "USDT查询工具", usdt_title: "USDT转账查询", usdt_desc: "查个U提供USDT转账查询工具，支持USDT地址查询、USDT交易记录查询、USDT交易哈希查询和公开链上转账状态查看。",
        usdt_sec_title: "USDT转账查询说明", usdt_sec_p1: "USDT转账查询主要用于查看USDT转账记录、钱包地址活动、交易哈希状态和公开链上信息。用户可以输入USDT地址或交易哈希进行查询。", usdt_sec_p2: "本站不提供交易、充值、提现、钱包托管或资产找回服务，也不会要求用户输入私钥、助记词或钱包密码。",
        
        energy_title: "能量租赁", energy_desc: "TRON 闪租能量，复制地址后按规则转账。",
        energy_rule_1: "有U的地址来兑换能量：1.5 TRX", energy_rule_2: "没U地址来兑换需要：3 TRX",
        energy_notice_1: "向无U地址转账，需要双倍能量。", energy_notice_2: "请在1小时内转账，否则过期回收",
        energy_addr_title: "闪租能量收款地址:", energy_copy_btn: "复制钱包地址", energy_copied: "已复制", energy_copy_success: "复制成功",
        energy_tips_title: "温馨提示", energy_tips_desc: "请确认钱包地址和转账金额正确后再操作。转账完成后请耐心等待系统自动委托能量到账。",

        guide_kicker: "USDT查询工具", guide_title: "USDT转账查询教程", guide_desc: "查个U，介绍如何查询USDT转账记录、USDT地址、交易哈希和U到账状态。",
        guide_sec_title: "如何查询USDT转账记录", guide_sec_p1: "查询USDT转账时，先复制USDT地址或交易哈希，然后粘贴到查询框中。查询结果应与钱包、交易所或付款记录进行核对。", guide_sec_p2: "请注意，区块链转账一旦完成，通常无法撤回。",

        about_kicker: "关于我们", about_title: "关于本站", about_desc: "关于本站USDT转账查询、USDT交易查询和公开链上信息查询服务的说明。",
        about_sec_title: "关于本站", about_sec_p1: "本站是一个公开链上信息查询工具，主要提供USDT转账查询、USDT交易查询、USDT地址查询和交易哈希查询功能。", about_sec_p2: "我们不提供数字货币交易、钱包托管、充值提现、资金找回、投资建议或担保服务。",

        contact_kicker: "联系我们", contact_title: "联系我们", contact_desc: "如需反馈USDT转账查询、USDT交易查询或网站合作问题，可通过本页面联系我们。",
        contact_sec_title: "联系我们", contact_sec_p1: "如果您在使用USDT转账查询、USDT地址查询或交易哈希查询时遇到问题，可以通过本页面联系网站管理员。",

        privacy_kicker: "隐私政策", privacy_title: "隐私政策", privacy_desc: "我们重视并保护您的隐私信息。", privacy_alert: "安全提醒：", privacy_alert_desc: "本站绝对不会向您索要私钥、助记词或钱包密码。",
        privacy_sec_title: "隐私政策说明", privacy_p1: "1. 数据收集：本站在提供USDT转账查询服务时，仅接收用户主动输入的公开地址或交易哈希（TxID）。我们不会收集您的私钥、助记词、密码或其他敏感身份信息。", privacy_p2: "2. 查询记录：您输入的查询关键字仅用于对接波场官方公开接口获取链上数据，本站不长期存储您的查询记录。", privacy_p3: "3. 能量租赁：在能量闪租环节，我们仅公开收款地址。系统自动识别链上到账记录并委托能量，不涉及对用户钱包控制权的获取。", privacy_p4: "4. 日志与统计：本站可能使用基础的访问统计工具（如IP、浏览器类型）以优化网站性能。这些数据不涉及您的资产安全。",

        terms_kicker: "服务条款", terms_title: "服务条款", terms_desc: "使用本站即表示您同意以下条款。", terms_alert: "重要提醒：", terms_alert_desc: "本站仅提供公开数据查询与能量辅助，不碰触用户资产。",
        terms_sec_title: "服务条款说明", terms_p1: "1. 服务性质：查个U（本站）提供波场链上的公开信息查询入口及TRX能量租赁辅助服务。本站不是交易所，不提供任何金融衍生品服务。", terms_p2: "2. 用户责任：用户需确保输入的查询地址或交易哈希来源合法。用户通过本站指引进行的任何转账、租赁行为，均属于用户个人链上操作，风险自担。", terms_p3: "3. 能量租赁：本站采用自助转账模式，用户按页面提示向指定地址转入TRX，系统自动委托能量。请务必核对金额和地址，因转错金额或转错地址导致的损失，本站不承担退款责任。", terms_p4: "4. 服务变更：本站有权根据业务需要或法律法规要求，随时修改服务条款或暂停相关功能，恕不另行通知。",

        disclaimer_kicker: "免责声明", disclaimer_title: "免责声明", disclaimer_desc: "本站不提供交易、充值、提现、资金找回或投资建议。", disclaimer_alert: "重要提醒：", disclaimer_alert_desc: "请仔细阅读本免责声明的所有条款。",
        disclaimer_sec_title: "免责声明", disclaimer_p1: "1. 本站（查个U）仅提供基于波场（TRON）公开链上数据的查询与能量租赁辅助服务，不提供任何形式的数字货币交易、法币兑换、资金存管或投资理财服务。", disclaimer_p2: "2. 用户在使用本站服务时，因个人操作失误（包括但不限于填错收款地址、输错转账金额、泄露私钥或助记词）导致的资产损失，本站概不负责，且无法协助找回。", disclaimer_p3: "3. 区块链网络具有不可逆性，交易一旦广播确认，无法撤回。请在进行任何转账操作前，务必仔细核对信息。", disclaimer_p4: "4. 本站展示的汇率数据仅供参考，不作为任何投资建议。因网络延迟或第三方接口故障导致的数据展示错误，本站不承担法律责任。"
    },
    en: {
        nav_home: "Home", nav_usdt: "USDT Transfer Query", nav_energy: "Energy Rental", nav_guide: "Guide", nav_about: "About Us", nav_contact: "Contact Us", nav_search_btn: "Search Now",
        footer_title: "USDT Transfer Query", footer_desc: "ChaGeU provides public on-chain information query services such as USDT transfer query, USDT transaction query, USDT address query, and transaction hash query.", footer_warning: "This site does not provide digital currency trading, wallet custody, deposit/withdrawal, fund recovery, investment advice, or guarantee services.",
        footer_core: "Core Features", footer_info: "Site Info", footer_pages: "Pages", privacy: "Privacy Policy", terms: "Terms of Service", disclaimer: "Disclaimer", copyright: "© 2026 ChaGeU. All query results are for reference only.",
        
        search_placeholder: "Enter USDT address or transaction hash", hot_links: "Frequently used:", search_btn: "Search Now", search_note: "This site only queries public on-chain information. Please do not enter private keys, mnemonics, wallet passwords, exchange passwords, or verification codes.",
        alert_important: "Important Notice: ", alert_desc: "This site only provides USDT transfer public on-chain information query, and does not provide trading, deposit, withdrawal, fund recovery, or investment advice.",
        rate_usdt: "USDT Rate", rate_trx: "TRX Rate", rate_usdt_cny: "USDT/CNY", rate_trx_cny: "TRX/CNY",
        card_energy: "Energy Provider", card_energy_desc: "Wholesale price per transaction", card_usdt: "USDT without TRX", card_usdt_desc: "Diverse energy types",
        query_func: "Query Features", query_entry: "USDT Transfer Record Query", query_desc: "This site focuses on USDT transfer queries and only provides functions related to public on-chain USDT transfer records.",
        tool_usdt: "USDT Transfer Query", tool_usdt_desc: "Query USDT address, transfer records, transaction hash, and arrival status.", tool_guide: "Guide", tool_guide_desc: "Learn how to query USDT transfer records via USDT address or hash value.",
        instruction: "Instructions", instruction_title: "How to query USDT transfer records?", instruction_desc: "Copy the USDT wallet address or transaction hash, paste it into the query box, and you can view the public on-chain information related to the USDT transfer. If it is an exchange withdrawal record, you can copy the TxID or hash value on the withdrawal details page for query.",
        check_1: "Check if the USDT transfer has been on-chain.", check_2: "Verify the transfer-in address, transfer-out address, and amount.", check_3: "View transaction hash, time, and status.", check_4: "Confirm whether USDT has arrived.",
        sec_alert: "Security Alert", sec_alert_desc: "This site is only used to query public on-chain information and does not provide trading, deposit, withdrawal, wallet custody, or asset recovery services. Do not enter private keys, mnemonics, wallet passwords, exchange passwords, or verification codes.", view_disclaimer: "View Disclaimer",
        faq: "FAQ", faq_title: "USDT Transfer Query FAQ", faq_desc: "The following content is static text, suitable for search engines.",
        faq_q1: "What is a USDT transfer query?", faq_a1: "A USDT transfer query is a method of viewing public on-chain transfer records through a USDT address or transaction hash, which can be used to verify transfer status and transaction information.",
        faq_q2: "What is the use of a hash query?", faq_a2: "A hash, also known as TxID, can locate a USDT transfer, check whether the transaction is successful, confirmed, and whether the amount and address are correct.",
        faq_q3: "Can this site recover incorrectly transferred USDT?", faq_a3: "No. This site only provides public on-chain data queries and cannot revoke transactions, freeze addresses, recover funds, or handle wallet permission issues.",
        faq_q4: "Why can't I query it?", faq_a4: "It may be because the input format is incorrect, the transaction has not yet been on-chain, or the corresponding interface has not returned complete data. Please verify the address or transaction hash.",
        
        usdt_kicker: "USDT Query Tool", usdt_title: "USDT Transfer Query", usdt_desc: "ChaGeU provides a USDT transfer query tool supporting USDT address query, USDT transaction record query, USDT transaction hash query, and public on-chain transfer status viewing.",
        usdt_sec_title: "USDT Transfer Query Instructions", usdt_sec_p1: "USDT transfer query is mainly used to view USDT transfer records, wallet address activities, transaction hash status, and public on-chain information. Users can query by entering a USDT address or transaction hash.", usdt_sec_p2: "This site does not provide trading, deposit, withdrawal, wallet custody, or asset recovery services, nor does it require users to enter private keys, mnemonics, or wallet passwords.",
        
        energy_title: "Energy Rental", energy_desc: "TRON flash energy rental. Copy the address and transfer according to the rules.",
        energy_rule_1: "Address with USDT to redeem energy: 1.5 TRX", energy_rule_2: "Address without USDT to redeem: 3 TRX",
        energy_notice_1: "Transferring to an address without USDT requires double energy.", energy_notice_2: "Please transfer within 1 hour, otherwise it will expire.",
        energy_addr_title: "Flash Energy Receiving Address:", energy_copy_btn: "Copy Wallet Address", energy_copied: "Copied", energy_copy_success: "Copy Successful",
        energy_tips_title: "Warm Tips", energy_tips_desc: "Please confirm the wallet address and transfer amount before operating. After the transfer is complete, please wait patiently for the system to automatically delegate energy.",

        guide_kicker: "USDT Query Tool", guide_title: "USDT Transfer Query Guide", guide_desc: "ChaGeU explains how to query USDT transfer records, USDT addresses, transaction hashes, and USDT arrival status.",
        guide_sec_title: "How to query USDT transfer records", guide_sec_p1: "When querying a USDT transfer, first copy the USDT address or transaction hash, then paste it into the query box. The query results should be checked against the wallet, exchange, or payment records.", guide_sec_p2: "Please note that once a blockchain transfer is completed, it usually cannot be revoked.",

        about_kicker: "About Us", about_title: "About This Site", about_desc: "Description of this site's USDT transfer query, USDT transaction query, and public on-chain information query services.",
        about_sec_title: "About This Site", about_sec_p1: "This site is a public on-chain information query tool, mainly providing USDT transfer query, USDT transaction query, USDT address query, and transaction hash query functions.", about_sec_p2: "We do not provide digital currency trading, wallet custody, deposit/withdrawal, fund recovery, investment advice, or guarantee services.",

        contact_kicker: "Contact Us", contact_title: "Contact Us", contact_desc: "If you need to give feedback on USDT transfer queries, USDT transaction queries, or website cooperation, you can contact us through this page.",
        contact_sec_title: "Contact Us", contact_sec_p1: "If you encounter problems when using USDT transfer query, USDT address query, or transaction hash query, you can contact the website administrator through this page.",

        privacy_kicker: "Privacy Policy", privacy_title: "Privacy Policy", privacy_desc: "We value and protect your privacy information.", privacy_alert: "Security Alert: ", privacy_alert_desc: "This site will never ask you for private keys, mnemonics, or wallet passwords.",
        privacy_sec_title: "Privacy Policy Instructions", privacy_p1: "1. Data Collection: When providing USDT transfer query services, this site only receives the public address or transaction hash (TxID) actively entered by the user. We will not collect your private keys, mnemonics, passwords, or other sensitive identity information.", privacy_p2: "2. Query Records: The query keywords you enter are only used to connect to the official TRON public interface to obtain on-chain data. This site does not store your query records for a long time.", privacy_p3: "3. Energy Rental: In the energy flash rental process, we only disclose the receiving address. The system automatically identifies on-chain arrival records and delegates energy, which does not involve obtaining control of the user's wallet.", privacy_p4: "4. Logs and Statistics: This site may use basic visit statistics tools (such as IP, browser type) to optimize website performance. These data do not involve the security of your assets.",

        terms_kicker: "Terms of Service", terms_title: "Terms of Service", terms_desc: "By using this site, you agree to the following terms.", terms_alert: "Important Notice: ", terms_alert_desc: "This site only provides public data query and energy assistance, and does not touch user assets.",
        terms_sec_title: "Terms of Service Instructions", terms_p1: "1. Nature of Service: ChaGeU (this site) provides a public information query entry on the TRON chain and TRX energy rental auxiliary services. This site is not an exchange and does not provide any financial derivatives services.", terms_p2: "2. User Responsibility: Users must ensure that the source of the query address or transaction hash entered is legal. Any transfer or rental behavior conducted by the user through the guidance of this site is a personal on-chain operation of the user, and the risk is borne by the user.", terms_p3: "3. Energy Rental: This site adopts a self-service transfer mode. Users transfer TRX to the designated address according to the page prompts, and the system automatically delegates energy. Please be sure to verify the amount and address. This site does not assume refund responsibility for losses caused by transferring the wrong amount or transferring to the wrong address.", terms_p4: "4. Service Changes: This site has the right to modify the terms of service or suspend related functions at any time according to business needs or legal and regulatory requirements without prior notice.",

        disclaimer_kicker: "Disclaimer", disclaimer_title: "Disclaimer", disclaimer_desc: "This site does not provide trading, deposit, withdrawal, fund recovery, or investment advice.", disclaimer_alert: "Important Notice: ", disclaimer_alert_desc: "Please read all terms of this disclaimer carefully.",
        disclaimer_sec_title: "Disclaimer", disclaimer_p1: "1. This site (ChaGeU) only provides query and energy rental auxiliary services based on public on-chain data of TRON, and does not provide any form of digital currency trading, fiat currency exchange, fund custody, or investment and wealth management services.", disclaimer_p2: "2. When users use the services of this site, this site is not responsible for asset losses caused by personal operational errors (including but not limited to filling in the wrong receiving address, entering the wrong transfer amount, leaking private keys or mnemonics), and cannot assist in recovery.", disclaimer_p3: "3. The blockchain network is irreversible. Once a transaction is broadcast and confirmed, it cannot be revoked. Please be sure to carefully verify the information before performing any transfer operation.", disclaimer_p4: "4. The exchange rate data displayed on this site is for reference only and does not constitute any investment advice. This site does not assume legal responsibility for data display errors caused by network delays or third-party interface failures."
    }
};

function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (globalI18n[lang] && globalI18n[lang][key]) {
            el.textContent = globalI18n[lang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (globalI18n[lang] && globalI18n[lang][key]) {
            el.setAttribute('placeholder', globalI18n[lang][key]);
        }
    });
    const btn = document.getElementById('langSwitchBtn');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中文';
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';
    localStorage.setItem('site_lang', lang);
    document.body.style.opacity = '1';
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('site_lang') || 'zh';
    applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
}

async function initLanguage() {
    let savedLang = localStorage.getItem('site_lang');
    if (savedLang) { applyLanguage(savedLang); return; }

    try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        if (data.country_code) {
            const cnRegions = ['CN', 'HK', 'MO', 'TW'];
            applyLanguage(cnRegions.includes(data.country_code) ? 'zh' : 'en');
            return;
        }
    } catch (e) { console.log('IP failed, using browser lang.'); }

    const userLang = navigator.language || navigator.userLanguage;
    applyLanguage(userLang.toLowerCase().startsWith('zh') ? 'zh' : 'en');
}

document.addEventListener("DOMContentLoaded", function() {
    initLanguage();
});
