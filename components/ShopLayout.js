import { CartProvider } from '@/context/Store'
import Navbar from './Navbar'

function ShopLayout({ children }) {
  return (
    <CartProvider>
      <div className="flex flex-col justify-between min-h-screen">
        <Navbar />

        <main>{children}</main>
      </div>
    </CartProvider>
  )
}

export default ShopLayout
