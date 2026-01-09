'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import RakutenWidgetList from './RakutenWidgetList'

interface Props {
  uniqueKey?: string
}

export default function RakutenLeftWidget({ uniqueKey }: Props) {
  const [columns, setColumns] = useState<number[]>([])
  const pathname = usePathname()

  // 演習ページでは非表示（チュートリアルページは表示）
  const isExercisePage = pathname?.match(/\/exercises\/[^/]+$/)

  useEffect(() => {
    const calculateCols = () => {
      const containerWidth = 1024 // max-w-5xl
      const windowWidth = window.innerWidth
      const spacePerSide = (windowWidth - containerWidth) / 2

      // Calculate how many 220px columns fit in the left space
      const numCols = Math.floor(spacePerSide / 220)

      if (numCols > 0) {
        // Calculate left edge position of centered container
        const containerLeft = (windowWidth - containerWidth) / 2
        // Position columns from the left edge of the container going left
        const cols = Array.from({ length: numCols }, (_, i) => {
          return containerLeft - 220 * (i + 1)
        })
        setColumns(cols)
      } else {
        setColumns([])
      }
    }

    calculateCols()
    window.addEventListener('resize', calculateCols)
    return () => window.removeEventListener('resize', calculateCols)
  }, [])

  if (columns.length === 0 || isExercisePage) return null

  return (
    <>
      {columns.map((leftPos, i) => (
        <div
          key={`left-col-${i}`}
          className="hidden lg:block fixed top-[80px] z-10 w-[200px]"
          style={{ left: `${leftPos}px` }}
        >
          <RakutenWidgetList uniqueKey={`${uniqueKey}-left-${i}`} />
        </div>
      ))}
    </>
  )
}