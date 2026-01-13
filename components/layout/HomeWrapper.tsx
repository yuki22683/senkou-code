'use client'

import { useRef, useState, useEffect } from 'react'
import RakutenLeftWidget from './RakutenLeftWidget'
import RakutenRightWidget from './RakutenRightWidget'

interface Props {
  children: React.ReactNode
  uniqueKey?: string
}

export default function HomeWrapper({ children, uniqueKey }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)

  useEffect(() => {
    if (!containerRef.current) return

    const updateHeight = () => {
      if (containerRef.current) {
          setContainerHeight(containerRef.current.clientHeight)
      }
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-[600px] w-full max-w-content mx-auto px-4 overflow-visible">
      <RakutenLeftWidget containerHeight={containerHeight} uniqueKey={uniqueKey} />
      <RakutenRightWidget containerHeight={containerHeight} uniqueKey={uniqueKey} />
      {children}
    </div>
  )
}
