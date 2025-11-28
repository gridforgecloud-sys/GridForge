# Cloudflare Pages 部署配置

## 在 Cloudflare Pages 中的设置

### 构建配置

1. **框架预设**: Next.js (Static HTML Export)
2. **构建命令**: `npm run build`
3. **构建输出目录**: `out`
4. **根目录**: `/` (项目根目录)
5. **Node.js 版本**: 18.x 或更高

### 重要提示

⚠️ **不要设置部署命令** - Cloudflare Pages 会自动部署 `out` 目录中的文件。

如果之前设置了部署命令（如 `npx wrangler deploy`），请将其删除或留空。

### 环境变量

如果需要环境变量，可以在 Cloudflare Pages 设置中添加：
- 进入项目设置
- 选择 "Environment variables"
- 添加所需的变量

### 自定义域名

1. 在 Cloudflare Pages 项目设置中
2. 选择 "Custom domains"
3. 添加 `gridforgeai.com`
4. 按照提示配置 DNS 记录

## 构建输出

项目已配置为静态导出模式：
- 所有页面预渲染为静态 HTML
- 输出目录：`out/`
- 适合 Cloudflare Pages 的静态托管

## 验证部署

构建成功后，你应该看到：
- ✓ 所有页面成功生成
- ✓ `out/` 目录包含所有静态文件
- ✓ 无构建错误

