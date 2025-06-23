import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/context/theme-store'
import Header from '@/components/Header'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artistly – Book Performing Artists',
  description: 'Connect Event Planners and Artist Managers on Artistly.com',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider>
          <Header />
          <main className="min-h-screen px-4 py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
