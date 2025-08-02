import LandingPageNavber from "./_components/LandingPageNavber"

interface LayoutProps {
  children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" flex flex-col py-10 px-10 xl:px-0 container"> 
      <LandingPageNavber />
      {children}
    </div>
  )
}

export default Layout
