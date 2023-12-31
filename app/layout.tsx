import Navbar from './Navbar'
import './globals.css'
import SideBar from './SideBar'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <div className='flex w-full justify-between'>
          <div className='fixed  h-full'>
            <SideBar />
          </div>
          <div className='w-full'>
            {children}
          </div>
        </div>
        </body>
    </html>
  )
}
