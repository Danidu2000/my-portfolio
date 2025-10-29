import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className + " bg-[#0f172a]"}>
        <ThemeProvider>
          <Suspense fallback={
            <div className="fixed inset-0 flex items-center justify-center bg-[#0f172a] z-[9999]">
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-gaming" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="block w-6 h-6 bg-blue-500 rounded-full animate-pulse-gaming"></span>
                  </div>
                </div>
                <span className="text-blue-400 font-mono text-lg tracking-widest select-none">
                  LOADING
                </span>
              </div>
            </div>
          }>
            {children}
          </Suspense>
          <CustomCursor />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
