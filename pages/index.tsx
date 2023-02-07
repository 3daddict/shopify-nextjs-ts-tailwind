import type { InferGetStaticPropsType } from 'next'
import getAllProducts from '@framework/products/get-all-products'
import { getConfig } from '@framework/api/config'
import { Layout } from '@components/common'
import { ProductCard } from '@components/Product'
import { Grid, Hero, Marquee } from '@components/ui'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline="Cookiies, Ice Cream and Jelly"
        description="Lorem ipsum q wuh iquwhduqbwd quwbhwiydbqywibd  quybquywbdyqwdbqwy weuhriuwendiwuedbn uwebu2y3b2y3b2y3 u3yduwnqdl asdinundqn wdnwqeud edbq  wid qwidbqwdbqweudbqwiuebn"
      />
      <Marquee>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
      <Grid layout="B">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Marquee variant="secondary">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} variant="slim" />
        ))}
      </Marquee>
    </div>
  )
}

Home.Layout = Layout
