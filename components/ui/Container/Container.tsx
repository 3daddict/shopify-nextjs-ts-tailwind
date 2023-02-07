import { ReactNode, FC, ComponentType, HTMLAttributes } from 'react'

interface Props {
  children: ReactNode | React.ReactNode[]
  el?: ComponentType<HTMLAttributes<HTMLElement>>
}

const Container: FC<Props> = ({ children, el: Compoent = 'div' }) => {
  return <Compoent className="px-6 mx-auto max-w-[1920px]">{children}</Compoent>
}

export default Container
