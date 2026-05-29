export default function Home() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '2rem', lineHeight: 1.8 }}>
      <h1>🐷 PigHub Random API</h1>
      <p>随机返回一张猪猪图片。</p>

      <h2>接口说明</h2>

      <h3>GET /api/random-pig</h3>
      <p>返回一张随机猪图的 JSON 信息：</p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: 8, overflow: 'auto' }}>
{`// 响应示例
{
  "filename": "猪反转.jpg",
  "title": "猪反转",
  "url": "https://raw.githubusercontent.com/.../猪反转.jpg"
}`}
      </pre>

      <h3>参数</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid #ddd', textAlign: 'left' }}>
            <th style={{ padding: '0.5rem' }}>参数</th>
            <th style={{ padding: '0.5rem' }}>类型</th>
            <th style={{ padding: '0.5rem' }}>说明</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '0.5rem' }}><code>count</code></td>
            <td style={{ padding: '0.5rem' }}>number (1-20)</td>
            <td style={{ padding: '0.5rem' }}>返回多张图片，默认 1</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #eee' }}>
            <td style={{ padding: '0.5rem' }}><code>redirect</code></td>
            <td style={{ padding: '0.5rem' }}>boolean</td>
            <td style={{ padding: '0.5rem' }}>为 true 时直接 302 跳转到图片（仅单张）</td>
          </tr>
        </tbody>
      </table>

      <h3>示例</h3>
      <ul>
        <li><code>GET /api/random-pig</code> — 返回 1 张</li>
        <li><code>GET /api/random-pig?count=5</code> — 返回 5 张</li>
        <li><code>GET /api/random-pig?redirect=true</code> — 302 跳转到图片</li>
      </ul>

      <h3>在 img 标签中直接使用</h3>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: 8 }}>
{`<img src="/api/random-pig?redirect=true" alt="随机猪图" />`}
      </pre>

      <p style={{ marginTop: '2rem', color: '#888' }}>
        图片来源: PigHub (pighub.top) · 共 {1248} 张
      </p>
    </main>
  )
}
