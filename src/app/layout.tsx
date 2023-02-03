import { ComponentProps } from 'types/components'
import '../styles/globals.scss'

export default function RootLayout({
  children,
}: ComponentProps) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  )
}
