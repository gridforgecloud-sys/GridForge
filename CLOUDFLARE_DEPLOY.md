# Cloudflare Pages 部署配置

## 构建设置

在 Cloudflare Pages 控制台中配置以下设置：

### 构建配置
- **构建命令**: `npm run build`
- **构建输出目录**: `out`
- **根目录**: `/` (项目根目录)

### 环境变量
无需特殊环境变量。

### Node.js 版本
Cloudflare Pages 会自动检测 Node.js 版本（推荐 18.x 或更高）。

## 部署说明

1. 项目已配置为静态导出（`output: 'export'`）
2. 所有页面都会预渲染为静态 HTML
3. 输出目录为 `out/`
4. 已配置 `_redirects` 文件处理 404 路由

## 验证部署

部署成功后，访问你的 Cloudflare Pages URL 即可查看网站。

## 故障排除

如果遇到问题：
1. 确保构建命令为 `npm run build`
2. 确保输出目录为 `out`
3. 检查构建日志中的错误信息

