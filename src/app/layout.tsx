import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"
import "./globals.css"
import { Providers } from "./providers"

export const metadata: Metadata = {
  title: "Danidu Pramuditha - Associate Software Engineer",
  description: "Full-stack developer passionate about building modern web and mobile applications",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Providers>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <CustomCursor />
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
