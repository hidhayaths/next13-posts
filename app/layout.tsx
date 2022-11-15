import NavBar from "../components/NavBar"
import SideBar from "../components/SideBar"
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <NavBar />
        <div className="content">
          {/* @ts-ignore */}
          <SideBar />
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
