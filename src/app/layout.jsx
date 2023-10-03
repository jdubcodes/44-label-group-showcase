import './globals.css'

export const metadata = {
  title: '44 Label Group Showcase',
  description: '44 Label Group fan page',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
