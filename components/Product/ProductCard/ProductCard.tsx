import { Product } from '@common/types/product'
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import s from './ProductCard.module.css'

interface Props {
  product: Product
  variant?: 'simple' | 'slim'
}

const placeholderImage = '/product-image-placeholder.svg'

const ProductCard: FC<Props> = ({ product, variant = 'simple' }) => {
  return (
    <Link href={`/product/${product.slug}`}>
      {variant === 'slim' ? (
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <span className="p-3 text-xl font-bold text-white bg-black">
              {product.name}
            </span>
          </div>
          {product.images && (
            <div className="flex-1">
              <Image
                src={product.images[0].url ?? placeholderImage}
                alt={product.name ?? 'Product Image'}
                width={320}
                height={320}
                quality="85"
              />
            </div>
          )}
        </div>
      ) : (
        <div className={s.root}>
          <div className={s.productBg}></div>
          <div className={s.productTag}>
            <h3 className={s.productTitle}>
              <span>{product.name}</span>
            </h3>
            <span className={s.productPrice}>
              {product.price.value} {product.price.currencyCode}
            </span>
          </div>
          {product.images && (
            <Image
              src={product.images[0].url ?? placeholderImage}
              alt={product.name ?? 'Product Image'}
              width={540}
              height={540}
              quality="85"
              style={{ width: '100%' }}
            />
          )}
        </div>
      )}
    </Link>
  )
}

export default ProductCard
