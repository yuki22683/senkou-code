'use client'

import RakutenLeftWidget from './RakutenLeftWidget'
import RakutenRightWidget from './RakutenRightWidget'

interface Props {
  children: React.ReactNode
  uniqueKey?: string
}

export default function HomeWrapper({ children, uniqueKey }: Props) {
  return (
    <>
      <RakutenLeftWidget uniqueKey={uniqueKey} />
      <RakutenRightWidget uniqueKey={uniqueKey} />
      {children}
    </>
  )
}
