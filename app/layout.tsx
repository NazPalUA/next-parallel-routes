import Links from '@/components/Links'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import './globals.css'

export default function RootLayout({
  children,
  slot1,
  slot2
}: Readonly<{
  children: React.ReactNode
  slot1: React.ReactNode
  slot2: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <main className="w-full h-screen flex items-center justify-center p-5">
          <Card className="w-full h-full ">
            <CardHeader>
              <CardTitle>Parent Layout</CardTitle>
              <Links />
            </CardHeader>
            <CardContent className="flex gap-4 h-full">
              <div className="flex-1">{children}</div>
              <div className="flex-1 flex flex-col gap-4">
                {slot1}
                {slot2}
              </div>
            </CardContent>
          </Card>
        </main>
      </body>
    </html>
  )
}
