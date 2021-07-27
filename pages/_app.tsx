import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo';


function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <DefaultSeo
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: 'https://www.url.ie/',
        site_name: 'SiteName',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
      titleTemplate = 'Next | %s'
    />
    
    <Component {...pageProps} />
  </>
}
export default MyApp
