'use client'

import Script from 'next/script'

interface GoogleAnalyticsProps {
  gaId?: string
}

export default function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  // 从环境变量获取GA ID，如果没有提供props
  const GA_ID = gaId || process.env.NEXT_PUBLIC_GA_ID

  // 如果没有GA ID，不渲染任何内容
  if (!GA_ID) {
    return null
  }

  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
