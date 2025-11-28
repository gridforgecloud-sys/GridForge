# GridForge Technology 官方网站

GridForge Technology Sdn. Bhd. 的官方网站，展示公司在 EMEA 区域的 AI 基础设施服务。

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 项目结构

```
Gridforge/
├── src/
│   ├── app/              # Next.js 页面路由
│   ├── components/       # React 组件
│   ├── lib/              # 工具函数
│   └── types/            # TypeScript 类型定义
├── src/
│   └── config/           # 配置文件
├── public/               # 静态资源
└── package.json
```

## 页面

- `/` - 首页
- `/about` - 关于我们
- `/services` - 服务详情
- `/contact` - 联系我们

## 部署

网站配置为部署到 `gridforgeai.com` 域名。

### Vercel 部署

1. 将代码推送到 Git 仓库
2. 在 Vercel 中导入项目
3. 配置域名 `gridforgeai.com`
4. 部署

### 环境变量

如需配置环境变量，创建 `.env.local` 文件。

## 开发说明

- 使用 TypeScript 确保类型安全
- 遵循 Tailwind CSS 设计系统
- 组件采用模块化设计，便于维护和扩展
- 所有动画使用 Framer Motion 实现

## 许可证

© 2025 GridForge Technology Sdn. Bhd. All rights reserved.

