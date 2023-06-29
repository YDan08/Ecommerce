import { Inter } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { AppProvider } from '../context/AppContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'Projeto de ecommerce'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`text-slate-950 ${inter.className}`}>
        <div className="flex h-screen flex-col">
          <AppProvider>
            <NavBar />
            {children}
            <Footer />
          </AppProvider>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
