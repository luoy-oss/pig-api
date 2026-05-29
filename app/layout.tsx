import './globals.css'

export const metadata = {
  title: '随机猪猪 API',
  description: '随机猪猪 API - 部署在 Vercel',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
