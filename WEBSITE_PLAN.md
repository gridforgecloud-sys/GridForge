# GridForge 官方网站构建方案

## 技术路线

### 核心技术栈
- **框架**: Next.js 14 (App Router) - 服务端渲染，SEO优化，性能优异
- **语言**: TypeScript - 类型安全，提升代码质量
- **样式**: Tailwind CSS - 快速构建淡色系、简洁的UI
- **动画**: Framer Motion - 流畅的动画效果，增强科技感
- **图标**: Lucide React - 现代、简洁的图标库
- **字体**: Inter / Geist - 现代、专业的无衬线字体

### 设计原则
- **配色方案**: 淡色系为主
  - 主色: 淡蓝/淡灰 (#F0F4F8, #E8EDF2)
  - 强调色: 科技蓝 (#3B82F6, #2563EB)
  - 文字: 深灰 (#1E293B, #334155)
  - 背景: 白色/极淡灰 (#FFFFFF, #FAFBFC)
- **设计风格**: 简洁、现代、科技感
- **响应式**: 移动端优先，支持所有设备

## 网站目录结构

```
Gridforge/
├── public/                          # 静态资源
│   ├── images/                      # 图片资源
│   │   ├── logo.svg                 # 公司Logo
│   │   ├── hero-bg.svg              # 首页背景
│   │   └── services/                # 服务相关图片
│   └── favicon.ico                  # 网站图标
│
├── src/
│   ├── app/                         # Next.js App Router
│   │   ├── layout.tsx               # 根布局
│   │   ├── page.tsx                 # 首页
│   │   ├── about/                   # 关于我们页面
│   │   │   └── page.tsx
│   │   ├── services/                # 服务页面
│   │   │   └── page.tsx
│   │   ├── contact/                 # 联系我们页面
│   │   │   └── page.tsx
│   │   └── globals.css              # 全局样式
│   │
│   ├── components/                  # 可复用组件
│   │   ├── layout/                  # 布局组件
│   │   │   ├── Header.tsx           # 导航栏
│   │   │   ├── Footer.tsx           # 页脚
│   │   │   └── Navigation.tsx       # 导航菜单
│   │   ├── sections/                # 页面区块组件
│   │   │   ├── Hero.tsx             # 首页英雄区
│   │   │   ├── Services.tsx         # 服务展示区
│   │   │   ├── About.tsx            # 关于我们区
│   │   │   ├── Contact.tsx          # 联系表单区
│   │   │   └── Features.tsx         # 特色功能区
│   │   ├── ui/                      # UI基础组件
│   │   │   ├── Button.tsx           # 按钮组件
│   │   │   ├── Card.tsx             # 卡片组件
│   │   │   ├── Section.tsx          # 区块容器
│   │   │   └── Container.tsx        # 容器组件
│   │   └── animations/              # 动画组件
│   │       └── FadeIn.tsx           # 淡入动画
│   │
│   ├── lib/                         # 工具函数
│   │   ├── utils.ts                 # 通用工具
│   │   └── constants.ts             # 常量定义
│   │
│   └── types/                       # TypeScript类型定义
│       └── index.ts
│
├── config/                          # 配置文件
│   ├── site.ts                      # 网站配置（公司信息、SEO等）
│   └── services.ts                  # 服务内容配置
│
├── package.json                     # 项目依赖
├── tsconfig.json                    # TypeScript配置
├── tailwind.config.ts               # Tailwind配置
├── next.config.js                   # Next.js配置
├── .gitignore                       # Git忽略文件
└── README.md                        # 项目说明
```

## 页面结构规划

### 1. 首页 (Home)
- **Hero区域**: 大标题 + 副标题 + CTA按钮
- **服务概览**: 5大业务板块卡片展示
- **核心优势**: 突出GridForge的技术实力
- **客户案例/合作伙伴**: 展示信任度
- **联系CTA**: 引导用户联系

### 2. 关于我们 (About)
- 公司介绍
- 使命愿景
- 团队/技术实力
- 地理位置（马来西亚，EMEA区域）

### 3. 服务 (Services)
详细展示5大业务板块：
- **Server / Compute**: 服务器与计算服务
- **Cloud Hosting**: 云托管服务
- **Data Layer & Pipeline**: 数据层与管道
- **DevOps / Deployment**: DevOps与部署
- **High-Performance Grid Computing**: 高性能网格计算（突出"Forge"概念）

### 4. 联系我们 (Contact)
- 联系表单
- 公司地址
- 联系方式（邮箱、电话）
- 地图（可选）

## 功能特性

1. **响应式设计**: 完美适配桌面、平板、手机
2. **SEO优化**: Meta标签、结构化数据
3. **性能优化**: 图片优化、代码分割、懒加载
4. **动画效果**: 滚动动画、悬停效果（适度使用，保持简洁）
5. **多语言支持**: 预留英文/马来文切换接口（可选）

## 开发步骤

1. ✅ 项目初始化（Next.js + TypeScript + Tailwind）
2. ✅ 基础布局（Header + Footer）
3. ✅ 首页开发（Hero + Services + Features）
4. ✅ 关于页面
5. ✅ 服务详情页面
6. ✅ 联系页面
7. ✅ 样式优化与动画
8. ✅ SEO优化
9. ✅ 响应式测试
10. ✅ 部署准备

## 依赖包清单

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^14.0.0"
  }
}
```

---

**请确认以上方案是否符合您的需求，确认后我将开始构建网站。**

