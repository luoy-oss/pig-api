export default function Home() {
  return (
    <main className="min-h-screen bg-bg-primary text-text-primary">
      {/* Header */}
      <header className="border-b border-border-default">
        <div className="mx-auto max-w-4xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold">
                猪
              </div>
              <span className="text-sm font-medium">随机猪猪</span>
            </div>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-12">
        <div className="mb-2">
          <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            API
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          随机猪猪 API
        </h1>
        <p className="max-w-2xl text-lg text-text-secondary leading-relaxed">
          一行代码获取随机猪猪图片，支持批量获取和直接跳转。
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="/api/random-pig?redirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-accent px-5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            试一试
          </a>
          <a
            href="#endpoint"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border-default px-5 text-sm font-medium text-text-primary transition-colors hover:bg-bg-secondary"
          >
            查看文档
          </a>
        </div>
      </section>

      {/* Endpoint Section */}
      <section id="endpoint" className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          接口端点
        </h2>

        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <span className="rounded bg-emerald-500/10 px-2 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
              GET
            </span>
            <code className="text-sm font-mono text-text-primary">/api/random-pig</code>
          </div>
          <p className="text-text-secondary">
            返回一张随机猪图的 JSON 信息
          </p>
        </div>

        {/* Response Example */}
        <div className="mb-8">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            响应示例
          </h3>
          <div className="overflow-hidden rounded-xl border border-border-default bg-bg-code">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
              <span className="text-xs text-text-tertiary">JSON</span>
              <button className="text-xs text-text-tertiary hover:text-text-primary transition-colors">
                复制
              </button>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code>
                <span className="code-comment">{"// 响应示例"}</span>{"\n"}
                <span className="code-keyword">{"{"}</span>{"\n"}
                {"  "}<span className="code-property">{'"filename"'}</span>{': '}<span className="code-string">{'"猪反转.jpg"'}</span>{",\n"}
                {"  "}<span className="code-property">{'"title"'}</span>{': '}<span className="code-string">{'"猪反转"'}</span>{",\n"}
                {"  "}<span className="code-property">{'"url"'}</span>{': '}<span className="code-string">{'"https://raw.githubusercontent.com/..."'}</span>{"\n"}
                <span className="code-keyword">{"}"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Parameters Section */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          参数
        </h2>

        <div className="overflow-hidden rounded-xl border border-border-default">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border-default bg-bg-secondary">
                <th className="px-4 py-3 text-left text-sm font-semibold">参数</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">类型</th>
                <th className="px-4 py-3 text-left text-sm font-semibold">说明</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-default">
              <tr className="hover:bg-bg-secondary/50 transition-colors">
                <td className="px-4 py-3">
                  <code className="rounded bg-bg-secondary px-2 py-1 text-sm font-mono text-accent">
                    count
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">number (1-20)</td>
                <td className="px-4 py-3 text-sm text-text-secondary">返回多张图片，默认 1</td>
              </tr>
              <tr className="hover:bg-bg-secondary/50 transition-colors">
                <td className="px-4 py-3">
                  <code className="rounded bg-bg-secondary px-2 py-1 text-sm font-mono text-accent">
                    redirect
                  </code>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">boolean</td>
                <td className="px-4 py-3 text-sm text-text-secondary">为 true 时直接 302 跳转到图片（仅单张）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Examples Section */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          使用示例
        </h2>

        <div className="space-y-4">
          {/* Example 1 */}
          <div className="rounded-xl border border-border-default p-4">
            <p className="mb-2 text-sm font-medium">获取单张图片</p>
            <code className="block rounded-lg bg-bg-code px-4 py-3 text-sm font-mono text-text-primary">
              GET /api/random-pig
            </code>
          </div>

          {/* Example 2 */}
          <div className="rounded-xl border border-border-default p-4">
            <p className="mb-2 text-sm font-medium">批量获取 5 张</p>
            <code className="block rounded-lg bg-bg-code px-4 py-3 text-sm font-mono text-text-primary">
              GET /api/random-pig?count=5
            </code>
          </div>

          {/* Example 3 */}
          <div className="rounded-xl border border-border-default p-4">
            <p className="mb-2 text-sm font-medium">直接跳转到图片</p>
            <code className="block rounded-lg bg-bg-code px-4 py-3 text-sm font-mono text-text-primary">
              GET /api/random-pig?redirect=true
            </code>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          快速开始
        </h2>

        <div className="mb-4">
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-tertiary">
            在 HTML 中使用
          </h3>
          <div className="overflow-hidden rounded-xl border border-border-default bg-bg-code">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
              <span className="text-xs text-text-tertiary">HTML</span>
              <button className="text-xs text-text-tertiary hover:text-text-primary transition-colors">
                复制
              </button>
            </div>
            <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
              <code>
                <span className="code-keyword">{"<img"}</span>{"\n"}
                {"  "}<span className="code-property">{"src"}</span>{'='}<span className="code-string">{'"/api/random-pig?redirect=true"'}</span>{"\n"}
                {"  "}<span className="code-property">{"alt"}</span>{'='}<span className="code-string">{'"随机猪图"'}</span>{"\n"}
                <span className="code-keyword">{"/>"}</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border-default">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-tertiary">
              图片来源: PigHub (pighub.top)
            </p>
            <p className="text-sm text-text-tertiary">
              共 1,248 张图片
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
