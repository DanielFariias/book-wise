import * as S from './styles'
import { CaretRight, CaretLeft } from '@phosphor-icons/react'
import { ComponentProps } from '@stitches/react'

type LinkProps = Omit<ComponentProps<typeof S.LinkContainer>, 'href'> & {
  text: string
  href?: string
  onClick?: () => void
  withoutIcon?: boolean
}

export const Link = ({
  text,
  href,
  onClick,
  iconSide = 'right',
  withoutIcon,
  ...props
}: LinkProps) => {
  return (
    <S.LinkContainer
      {...props}
      href={href || ''}
      iconSide={iconSide}
      onClick={onClick}
      as={onClick ? 'button' : undefined}
    >
      {text}
      {!withoutIcon && (iconSide === 'right' ? <CaretRight /> : <CaretLeft />)}
    </S.LinkContainer>
  )
}
