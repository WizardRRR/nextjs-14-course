import { Montserrat, Poppins } from 'next/font/google'

export const monserrat = Montserrat({ subsets: ['latin'] })

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '800', '900']
})