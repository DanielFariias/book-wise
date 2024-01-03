import { ComponentProps } from '@stitches/react'

import * as S from './styles'

type AvatarProps = ComponentProps<typeof S.AvatarContainer> & {
  src: string
  size?: 'sm' | 'md' | 'lg'
  alt: string
}

export function Avatar({ src, alt, size = 'md', ...props }: AvatarProps) {
  return (
    <S.AvatarContainer size={size} {...props}>
      <S.AvatarImage src={src} width={80} height={80} alt={alt} />
    </S.AvatarContainer>
  )
}
