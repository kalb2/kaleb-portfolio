import NavBar from './components/NavBar'
import './globals.css'
import { Roboto_Mono } from 'next/font/google'

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          <NavBar />
        <main>
        {children}
        </main>
        </body>
    </html>
  )
}
