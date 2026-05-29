import { NextRequest, NextResponse } from 'next/server'
import imageList from '@/data/image-list.json'

// ============================================================
// 🔧 修改这里：你的图片 GitHub 仓库地址
// 格式: https://raw.githubusercontent.com/<用户名>/<仓库名>/main/images
// ============================================================
const GITHUB_IMAGES_BASE =
  'https://raw.githubusercontent.com/luo9-bot/plugin_rollpig/main/images'

interface ImageEntry {
  filename: string
  title: string
}

function getRandomImages(count: number): ImageEntry[] {
  const images = imageList.images as ImageEntry[]
  const shuffled = [...images].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, images.length))
}

function buildResponse(img: ImageEntry) {
  return {
    filename: img.filename,
    title: img.title,
    url: `${GITHUB_IMAGES_BASE}/${encodeURIComponent(img.filename)}`,
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const count = Math.max(1, Math.min(20, Number(searchParams.get('count')) || 1))
  const redirect = searchParams.get('redirect') === 'true'

  const selected = getRandomImages(count)

  // redirect=true 时直接 302 跳转到图片（单张时适用）
  if (redirect && count === 1) {
    const url = `${GITHUB_IMAGES_BASE}/${encodeURIComponent(selected[0].filename)}`
    return NextResponse.redirect(url, 302)
  }

  const result = selected.map(buildResponse)

  return NextResponse.json(
    count === 1 ? result[0] : { total: imageList.total, count: result.length, images: result },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'no-cache',
      },
    }
  )
}
