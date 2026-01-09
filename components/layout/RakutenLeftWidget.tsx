'use client'

import { usePathname } from 'next/navigation'
import RakutenWidgetList from './RakutenWidgetList'

interface Props {
  uniqueKey?: string
}

export default function RakutenLeftWidget({ uniqueKey }: Props) {
  const pathname = usePathname()

  // 演習ページでは非表示（チュートリアルページは表示）
  const isExercisePage = pathname?.match(/\/exercises\/[^/]+$/)

  if (isExercisePage) return null

  return (
    <div className="w-[200px] px-2">
      <RakutenWidgetList uniqueKey={`${uniqueKey}-left`} />
    </div>
  )
}