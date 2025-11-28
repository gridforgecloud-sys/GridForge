# Cloudflare Pages 部署配置

## 构建设置

在 Cloudflare Pages 项目设置中配置：

**构建命令：**
```bash
npm run build
```

**构建输出目录：**
```
out
```

**Node.js 版本：**
```
22.x 或 20.x
```

## 环境变量

如果需要环境变量，在 Cloudflare Pages 设置中添加。

## 注意事项

- Next.js 已配置为静态导出模式（`output: 'export'`）
- 构建输出会生成在 `out` 目录
- 所有页面都是静态生成的，适合 Cloudflare Pages
- 如果使用自定义域名，在 Cloudflare Pages 设置中配置

