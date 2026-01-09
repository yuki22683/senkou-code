'use client'

import { useEffect, useState } from 'react'
import RakutenWidgetList from './RakutenWidgetList'

interface Props {
  uniqueKey?: string
}

export default function RakutenRightWidget({ uniqueKey }: Props) {
  const [columns, setColumns] = useState<number[]>([])

  useEffect(() => {
    const calculateCols = () => {
      const containerWidth = 1024 // max-w-5xl
      const windowWidth = window.innerWidth
      const spacePerSide = (windowWidth - containerWidth) / 2

      // Calculate how many 220px columns fit in the right space
      const numCols = Math.floor(spacePerSide / 220)

      if (numCols > 0) {
        // Calculate right edge position of centered container
        const containerRight = (windowWidth + containerWidth) / 2
        // Position columns from the right edge of the container going right
        const cols = Array.from({ length: numCols }, (_, i) => {
          return containerRight + 220 * i + 20 // +20 for gap
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

  if (columns.length === 0) return null

  return (
    <>
      {columns.map((leftPos, i) => (
        <div
          key={`right-col-${i}`}
          className="hidden lg:block fixed top-[80px] z-10 w-[200px]"
          style={{ left: `${leftPos}px` }}
        >
          <RakutenWidgetList uniqueKey={`${uniqueKey}-right-${i}`} />
        </div>
      ))}
    </>
  )
}