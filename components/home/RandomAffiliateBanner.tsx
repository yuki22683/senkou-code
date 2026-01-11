'use client'

import { useAffiliateLinks } from '@/components/layout/AffiliateLinkProvider'
import { useEffect, useState } from 'react'

interface Props {
    className?: string
    index?: number
}

export default function RandomAffiliateBanner({ className = "", index = 0 }: Props) {
  const { getLink } = useAffiliateLinks()
  const [link, setLink] = useState<{ href: string; img: string } | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const l = getLink(index)
    setLink(l)
  }, [getLink, index])

  if (!isMounted || !link) return null

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <a href={link.href} target="_blank" rel="nofollow sponsored noopener" className="block w-full hover:opacity-80 transition-opacity">
        <img 
          src={link.img} 
          className="rounded-lg shadow-sm w-full h-auto" 
          alt="Rakuten Affiliate" 
        />
      </a>
    </div>
  )
}
