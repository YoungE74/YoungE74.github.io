# 视频网站使用指南

这是一个托管在 GitHub Pages 上的个人视频网站。本指南将帮助您了解如何添加和管理您的视频内容。

## 网站结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 功能
├── VIDEO_GUIDE.md      # 本指南
└── README.md           # 项目说明
```

## 添加新视频

### 方法一：修改 HTML 文件

1. 打开 `index.html` 文件
2. 找到 `<div class="video-grid">` 部分
3. 复制现有的视频卡片代码：

```html
<div class="video-card">
    <div class="video-thumbnail">
        <div class="video-placeholder">
            <div class="play-button">▶</div>
        </div>
        <div class="video-duration">05:30</div>
    </div>
    <div class="video-info">
        <h3 class="video-title">您的视频标题</h3>
        <p class="video-description">视频描述内容...</p>
        <div class="video-meta">
            <span class="video-date">2024-01-20</span>
            <span class="video-views">0 观看</span>
        </div>
    </div>
</div>
```

4. 修改以下内容：
   - `video-title`: 您的视频标题
   - `video-description`: 视频描述
   - `video-duration`: 视频时长
   - `video-date`: 发布日期
   - `video-views`: 观看次数

### 方法二：嵌入实际视频

要嵌入实际视频，请替换 `video-placeholder` 部分：

#### YouTube 视频
```html
<iframe width="100%" height="200" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen>
</iframe>
```

#### Bilibili 视频
```html
<iframe width="100%" height="200" 
        src="//player.bilibili.com/player.html?bvid=BV_ID" 
        frameborder="0" allowfullscreen>
</iframe>
```

#### 本地视频文件
```html
<video width="100%" height="200" controls>
    <source src="videos/your-video.mp4" type="video/mp4">
    您的浏览器不支持视频标签。
</video>
```

## 自定义样式

### 修改主题颜色

在 `styles.css` 中找到以下变量并修改：

```css
/* 主要颜色 */
.nav-brand h1 { color: #2563eb; }  /* 导航栏标题颜色 */
.btn-primary { background: #2563eb; }  /* 按钮颜色 */

/* 渐变背景 */
.video-placeholder {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 修改字体

在 `index.html` 的 `<head>` 部分修改字体链接：

```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

然后在 `styles.css` 中更新字体族：

```css
body {
    font-family: 'Noto Sans SC', sans-serif;
}
```

## 添加新功能

### 视频分类

可以为视频添加分类筛选功能：

1. 在 `index.html` 中添加分类按钮
2. 为每个视频卡片添加分类属性
3. 在 `script.js` 中添加筛选逻辑

### 搜索功能

可以添加视频搜索框：

1. 在导航栏添加搜索输入框
2. 在 `script.js` 中实现搜索逻辑
3. 根据标题和描述筛选视频

## 部署到 GitHub Pages

1. 将所有文件推送到您的 `username.github.io` 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支作为源
4. 您的网站将在 `https://username.github.io` 上可用

## 性能优化建议

### 图片优化
- 使用适当的图片格式（WebP、JPEG）
- 压缩图片文件大小
- 使用响应式图片

### 视频优化
- 使用视频托管服务（YouTube、Bilibili）
- 避免直接托管大型视频文件
- 使用视频缩略图作为预览

### 代码优化
- 压缩 CSS 和 JavaScript 文件
- 使用 CDN 加载外部资源
- 启用浏览器缓存

## 常见问题

### Q: 如何更换网站图标？
A: 在 `index.html` 的 `<head>` 部分添加：
```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

### Q: 如何添加统计分析？
A: 可以添加 Google Analytics 或其他分析工具的代码到 `<head>` 部分。

### Q: 如何优化移动端体验？
A: 网站已经具备响应式设计，您可以在 `styles.css` 的媒体查询部分进一步调整移动端样式。

## 支持与反馈

如果您在使用过程中遇到问题或有改进建议，请通过以下方式联系：

- GitHub Issues: https://github.com/YoungE74/YoungE74.github.io/issues
- 邮箱: contact@example.com

祝您使用愉快！