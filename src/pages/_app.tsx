import { AppProps } from 'next/app'
import { MyCart } from '@components/my-cart'
import '@shared/globals.css'
import { CartProvider } from 'src/context/cart.provider'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <MyCart />
      <Component {...pageProps} />
    </CartProvider>
  )
}

export default MyApp
