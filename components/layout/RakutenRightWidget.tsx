'use client'

import { useEffect, useState } from 'react'
import RakutenWidgetList from './RakutenWidgetList'

interface Props {
  containerHeight?: number
  uniqueKey?: string
}

export default function RakutenRightWidget({ containerHeight, uniqueKey }: Props) {
  const [extraCols, setExtraCols] = useState(0)
  const [showStandard, setShowStandard] = useState(false)
  const [baseRight, setBaseRight] = useState(0)

  useEffect(() => {
    const calculateCols = () => {
      const containerWidth = 1024 // max-w-5xl
      const windowWidth = window.innerWidth
      const spacePerSide = (windowWidth - containerWidth) / 2

      setShowStandard(spacePerSide >= 220)

      // Calculate the right position for the first widget column
      // This should be at the right edge of where the virtual container ends
      setBaseRight(spacePerSide - 220) // 220 = widget width (200) + gap (20)

      const totalCols = Math.floor(spacePerSide / 220)
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
          className="hidden lg:block fixed top-[100px] z-10 w-[200px]"
          style={{ right: `${baseRight}px` }}
        >
          <RakutenWidgetList containerHeight={containerHeight} uniqueKey={uniqueKey} />
        </div>
      )}

      {/* Extra Columns */}
      {Array.from({ length: extraCols }).map((_, i) => (
        <div
            key={`right-extra-${i}`}
            className="hidden lg:block fixed top-[100px] z-10 w-[200px]"
            style={{ right: `${baseRight - 220 * (i + 1)}px` }}
        >
          <RakutenWidgetList containerHeight={containerHeight} uniqueKey={`${uniqueKey}-right-${i}`} />
        </div>
      ))}
    </>
  )
}
