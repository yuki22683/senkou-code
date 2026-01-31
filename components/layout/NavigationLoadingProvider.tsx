'use client'

import React, { createContext, useContext, useState, useCallback, useEffect, useRef, Suspense } from 'react'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

interface NavigationLoadingContextType {
  isNavigating: boolean
  startNavigation: () => void
  stopNavigation: () => void
  navigateTo: (url: string, options?: { hardRefresh?: boolean }) => void
}

const NavigationLoadingContext = createContext<NavigationLoadingContextType>({
  isNavigating: false,
  startNavigation: () => {},
  stopNavigation: () => {},
  navigateTo: () => {},
})

export const useNavigationLoading = () => useContext(NavigationLoadingContext)

// useSearchParamsを使う部分を分離してSuspenseで囲む
function RouteChangeHandler({ onRouteChange }: { onRouteChange: () => void }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    onRouteChange()
  }, [pathname, searchParams, onRouteChange])

  return null
}

export function NavigationLoadingProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleRouteChange = useCallback(() => {
    setIsNavigating(false)
    // タイムアウトをクリア
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }, [])

  // ナビゲーション開始時に安全タイムアウトを設定（10秒）
  useEffect(() => {
    if (isNavigating) {
      timeoutRef.current = setTimeout(() => {
        setIsNavigating(false)
      }, 10000)
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isNavigating])

  // ブラウザの戻る/進むボタン対応
  useEffect(() => {
    const handlePopState = () => {
      setIsNavigating(true)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const startNavigation = useCallback(() => {
    setIsNavigating(true)
  }, [])

  const stopNavigation = useCallback(() => {
    setIsNavigating(false)
  }, [])

  const navigateTo = useCallback((url: string, options?: { hardRefresh?: boolean }) => {
    setIsNavigating(true)
    if (options?.hardRefresh) {
      window.location.href = url
    } else {
      router.push(url)
    }
  }, [router])

  return (
    <NavigationLoadingContext.Provider value={{ isNavigating, startNavigation, stopNavigation, navigateTo }}>
      <Suspense fallback={null}>
        <RouteChangeHandler onRouteChange={handleRouteChange} />
      </Suspense>
      {children}
      {isNavigating && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/80 backdrop-blur-sm"
          style={{ pointerEvents: 'all' }}
        >
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600 font-medium">読み込み中...</p>
          </div>
        </div>
      )}
    </NavigationLoadingContext.Provider>
  )
}
