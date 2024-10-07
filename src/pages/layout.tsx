import { Header } from "@/shared/ui/Header"

export default function Layout({ children }) {
  return (
    <>
      <Header isLogged={false} />
      <main>{children}</main>
    </>
  )
}
