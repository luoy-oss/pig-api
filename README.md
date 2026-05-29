# 随机猪猪 API

随机猪图 API，部署在 Vercel 上。

## 部署步骤

### 1. 上传图片到 GitHub

创建一个 GitHub 仓库（如 `pighub-images`），将 `images/` 文件夹推送到仓库根目录：

```
pighub-images/
└── images/
    ├── 猪反转.jpg
    ├── 猪钓猪.jpg
    └── ...（共 1248 张）
```

### 2. 修改配置

编辑 `app/api/random-pig/route.ts`，将 `GITHUB_IMAGES_BASE` 改为你的仓库地址：

```ts
const GITHUB_IMAGES_BASE =
  'https://raw.githubusercontent.com/你的用户名/pighub-images/main/images'
```

### 3. 部署到 Vercel

```bash
# 安装依赖
npm install

# 本地测试
npm run dev

# 部署到 Vercel
npx vercel
```

或者直接在 [vercel.com](https://vercel.com) 导入 GitHub 仓库自动部署。

### 4. 使用 API

```
GET /api/random-pig              → 返回 1 张随机猪图 JSON
GET /api/random-pig?count=5      → 返回 5 张
GET /api/random-pig?redirect=true → 302 跳转到图片 URL
```

在 `<img>` 标签中使用：
```html
<img src="/api/random-pig?redirect=true" alt="随机猪图" />
```
