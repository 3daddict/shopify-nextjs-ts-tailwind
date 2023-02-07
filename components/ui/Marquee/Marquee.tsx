import { ReactNode, FC } from 'react'
import Ticker from 'react-ticker'
import cs from 'classnames'

interface Props {
  childres: ReactNode
  variant?: 'primary' | 'secondary'
}

const Marquee: FC<Props> = ({ children, variant = 'primary' }) => {
  const rootStyle =
    variant === 'primary'
      ? 'bg-black h-96'
      : variant === 'secondary'
      ? 'bg-white h-96'
      : ''

  return (
    <div className={rootStyle}>
      <Ticker offset={80}>
        {() => (
          <div className="flex flex-row">
            <div className="flex py-5">{children}</div>
          </div>
        )}
      </Ticker>
    </div>
  )
}

export default Marquee
