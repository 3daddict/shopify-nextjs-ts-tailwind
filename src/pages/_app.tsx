import { AppProps } from 'next/app'
import { FC } from 'react'

const Noop: FC = ({ children }) => <>{children}</>

function NextShopify({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC } }) {
  const Layout = Component.Layout ?? Noop

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default NextShopify
