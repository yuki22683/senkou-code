'use client'

import RakutenLeftWidget from './RakutenLeftWidget'
import RakutenRightWidget from './RakutenRightWidget'

interface Props {
  children: React.ReactNode
  uniqueKey?: string
}

export default function HomeWrapper({ children, uniqueKey }: Props) {
  return (
    <div className="flex justify-center w-full">
      {/* 左サイドウィジェット */}
      <aside className="hidden xl:block w-[220px] flex-shrink-0">
        <div className="sticky top-[80px]">
          <RakutenLeftWidget uniqueKey={uniqueKey} />
        </div>
      </aside>

      {/* メインコンテンツ */}
      <div className="flex-1 max-w-5xl min-w-0">
        {children}
      </div>

      {/* 右サイドウィジェット */}
      <aside className="hidden xl:block w-[220px] flex-shrink-0">
        <div className="sticky top-[80px]">
          <RakutenRightWidget uniqueKey={uniqueKey} />
        </div>
      </aside>
    </div>
  )
}
