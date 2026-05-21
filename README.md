# Atlas

中文 | [English](./README.en.md)

Atlas 是一个黑色系 Astro 个人网站模板，面向学生、创作者和正在学习设计工程的同学。它适合用来展示课程记录、小项目、博客笔记、简历经历和个人链接。

模板使用 Astro Content Collections 管理博客和项目数据，内容以 Markdown 维护，适合长期更新和二次修改。

## 特性

- 黑色系视觉风格，适合学生个人主页和作品集
- 首页包含头像、状态卡片、快捷入口、项目和最新笔记
- 内置关于我、项目、博客、简历、联系方式页面
- 集成中英文多语言：中文默认路径，英文路径为 `/en/`
- 博客使用 Markdown 编写
- 项目详情使用 Markdown 编写
- 主要站点文案集中在 `src/config/site.ts`
- 使用 `src/content.config.ts` 定义 Content Collections
- 使用 Tailwind CSS v4 和 `@tailwindcss/vite`
- 静态输出，适合部署到 GitHub Pages、Vercel、Netlify 或 Cloudflare Pages

## 项目结构

```text
src/
  components/        可复用 UI 组件
  config/            站点文案、导航、社交链接和经历数据
  content/           博客和项目 Markdown 内容
  layouts/           基础布局和 Markdown 布局
  pages/             页面路由
  styles/            全局 Tailwind 样式
public/
  avatar.png         默认头像占位图
  favicon.svg        浏览器标签页图标
```

## 快速开始

安装依赖：

```sh
npm install
```

启动开发服务器：

```sh
npm run dev
```

构建生产版本：

```sh
npm run build
```

本地预览生产版本：

```sh
npm run preview
```

## 自定义模板

大部分模板文案都在：

```text
src/config/site.ts
```

你可以在这里修改：

- 站点名称和描述
- 中英文站点文案
- 导航菜单
- 头像路径
- 社交链接
- 首页标题、简介和按钮
- 状态卡片
- 快捷入口
- 关于我、项目、博客、简历、联系页面文案
- 技能和经历
- 通用按钮文案

## 多语言

Atlas 默认使用中文页面，英文页面路径为：

```text
/en/
/en/about/
/en/projects/
/en/blog/
/en/resume/
/en/contact/
```

语言配置在：

```text
src/config/site.ts
```

其中 `zh` 是中文配置，`en` 是英文配置。Header 会自动显示语言切换按钮。

博客默认只有一份内容，中英文页面都会显示同一批文章。项目可以通过 frontmatter 的 `lang` 字段区分中英文版本：

```md
---
lang: "zh"
title: "中文项目"
---
```

```md
---
lang: "en"
title: "English Project"
---
```

替换默认头像：

```text
public/avatar.png
```

替换浏览器标签页图标：

```text
public/favicon.svg
```

## 内容管理

博客文章放在：

```text
src/content/blog/
```

项目内容放在：

```text
src/content/projects/
```

博客示例：

```md
---
title: "我的第一篇笔记"
description: "这是一段笔记摘要。"
pubDate: 2026-05-20
tags: ["Astro", "学习"]
draft: false
---

在这里写你的笔记正文。
```

项目示例：

```md
---
lang: "zh"
title: "课程 Dashboard"
description: "一个为课程作业制作的小型看板。"
date: 2026-05-20
tags: ["Astro", "Tailwind"]
role: "课程项目"
featured: true
---

在这里写你的项目介绍。
```

## 部署

Atlas 会构建为 `dist/` 里的静态文件：

```sh
npm run build
```

你可以把它部署到任意静态托管平台。Astro 官方部署说明见 [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)。

## License

本项目基于 [GNU General Public License v3.0](./LICENSE) 开源。
