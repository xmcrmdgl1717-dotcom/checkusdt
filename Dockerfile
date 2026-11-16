# 使用官方自带的 WordPress 镜像
FROM wordpress:latest

# 将我们写好的主题目录，复制到容器内的 WordPress 主题目录下
# 注意：假设你的主题文件夹名为 chageu，如果你的文件夹叫别的名字，请把下面的 chageu 改掉
COPY ./wp-content/themes/chageu /var/www/html/wp-content/themes/chageu

# 确保文件权限正确
RUN chown -R www-data:www-data /var/www/html/wp-content/themes/chageu
