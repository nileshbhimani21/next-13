import UserLayout from 'layout/index'
import { ComponentProps } from 'types/components'

export default function AdminLayout({
  children,
}: ComponentProps) {
  return (
    <html>
      <head />
      <body><UserLayout>{children}</UserLayout></body>
    </html>
  )
}
