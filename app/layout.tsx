import './globals.css'
import Nav from './nav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='mx-4 md:mx-48 xl:mx-96 bg-orange-600'>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
