import Links from '@/components/links'
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
              <div className="w-1/3">{children}</div>
              <div className="w-2/3 flex flex-col gap-4">
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
