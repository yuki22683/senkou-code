'use client'

import { useEffect, useState } from 'react'
import RakutenWidgetList from './RakutenWidgetList'

interface Props {
  containerHeight?: number
  uniqueKey?: string
}

export default function RakutenLeftWidget({ containerHeight, uniqueKey }: Props) {
  const [extraCols, setExtraCols] = useState(0)
  const [showStandard, setShowStandard] = useState(false)

  useEffect(() => {
    const calculateCols = () => {
      // HomeWrapperはmax-w-content (1080px)
      const containerWidth = 1080
      const clientWidth = document.documentElement.clientWidth
      const spacePerSide = (clientWidth - containerWidth) / 2

      // ウィジェット200px分の余白があれば表示
      setShowStandard(spacePerSide >= 200)

      const totalCols = Math.floor(spacePerSide / 200)
      setExtraCols(Math.max(0, totalCols - 1))
    }

    calculateCols()
    window.addEventListener('resize', calculateCols)
    return () => window.removeEventListener('resize', calculateCols)
  }, [])

  return (
    <>
      {/* Standard Column */}
      {showStandard && (
        <div
          className="hidden lg:block absolute top-0 z-10 w-[200px]"
          style={{ left: '-200px' }}
        >
          <RakutenWidgetList containerHeight={containerHeight} uniqueKey={uniqueKey} />
        </div>
      )}

      {/* Extra Columns */}
      {Array.from({ length: extraCols }).map((_, i) => (
        <div
            key={`left-extra-${i}`}
            className="hidden lg:block absolute top-0 z-10 w-[200px]"
            style={{ left: `${-200 - 200 * (i + 1)}px` }}
        >
          <RakutenWidgetList containerHeight={containerHeight} uniqueKey={`${uniqueKey}-left-${i}`} />
        </div>
      ))}
    </>
  )
}
