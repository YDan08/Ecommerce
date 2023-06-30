import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { AppProvider } from '../context/AppContext'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ecommerce',
  description: 'Projeto de ecommerce'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`text-slate-950 ${inter.className}`}>
        <div className="flex min-h-screen flex-col">
          <AppProvider>
            <NavBar />
            {children}
            <Footer />
          </AppProvider>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  )
}

export default RootLayout
