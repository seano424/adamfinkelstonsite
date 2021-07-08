import Meta from './Meta'

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Meta />
      <div className="flex max-h-screen flex-col">
        <main className="flex-1 ">{children}</main>
      </div>
    </>
  )
}
