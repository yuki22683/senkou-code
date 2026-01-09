'use client'

import { useEffect, useState } from 'react'
import { rakutenWidgets } from '@/lib/rakutenWidgets'

interface Props {
  uniqueKey?: string
}

export default function RakutenWidgetList({ uniqueKey }: Props) {
  const [widgets, setWidgets] = useState<typeof rakutenWidgets>([])
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const calculateWidgets = () => {
      // Use viewport height minus header offset
      const availableHeight = window.innerHeight - 80

      const widgetHeight = 600
      const gap = 16
      const count = Math.max(1, Math.floor((availableHeight + gap) / (widgetHeight + gap)))

      // Select 'count' random widgets
      const selected = []
      for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * rakutenWidgets.length)
        selected.push(rakutenWidgets[randomIndex])
      }
      setWidgets(selected)
    }

    calculateWidgets()
  }, [uniqueKey])

  if (!isMounted || widgets.length === 0) return null

  return (
    <div className="flex flex-col gap-4">
      {widgets.map((widget, index) => {
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8">
                <style>
                    body { margin: 0; padding: 0; overflow: hidden; background-color: transparent; }
                </style>
            </head>
            <body>
                <div style="display: flex; justify-content: center;">
                    <script type="text/javascript">
                        rakuten_design="slide";
                        rakuten_affiliateId="4bee7433.fc9cdba3.4bee7434.f3fa9fc1";
                        rakuten_items="${widget.items}";
                        rakuten_genreId="${widget.genreId}";
                        rakuten_size="200x600";
                        rakuten_target="_blank";
                        rakuten_theme="gray";
                        rakuten_border="off";
                        rakuten_auto_mode="on";
                        rakuten_genre_title="off";
                        rakuten_recommend="${widget.recommend}";
                        rakuten_ts="${widget.ts}";
                    </script>
                    <script type="text/javascript" src="https://xml.affiliate.rakuten.co.jp/widget/js/rakuten_widget.js?20230106"></script>
                </div>
            </body>
            </html>
        `
        return (
            <div key={index} className="w-[200px] h-[600px]">
                <iframe
                    srcDoc={htmlContent}
                    width="200"
                    height="600"
                    style={{ border: 'none', overflow: 'hidden' }}
                    title={`Rakuten Widget ${index}`}
                />
            </div>
        )
      })}
    </div>
  )
}
