'use client'

import Link from 'next/link'
import { useNavigationLoading } from './NavigationLoadingProvider'
import { ComponentProps } from 'react'

type NavigationLinkProps = ComponentProps<typeof Link>

export function NavigationLink({ children, onClick, className, ...props }: NavigationLinkProps) {
  const { startNavigation, isNavigating } = useNavigationLoading()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isNavigating) {
      e.preventDefault()
      return
    }
    startNavigation()
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Link
      {...props}
      onClick={handleClick}
      className={`${className || ''} ${isNavigating ? 'pointer-events-none' : ''}`}
    >
      {children}
    </Link>
  )
}
