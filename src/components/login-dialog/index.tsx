import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import { Heading } from '@components/typography/heading'
import { AuthSection } from '@components/auth-section'

import * as S from './styles'

type LoginDialogProps = {
  children: ReactNode
}

export const LoginDialog = ({ children }: LoginDialogProps) => {
  const router = useRouter()
  const paramBookId = router.query.book as string

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <S.DialogOverlay />
        <S.DialogContent>
          <S.DialogClose>
            <X size={24} />
          </S.DialogClose>

          <div>
            <Heading size="xs" color="gray-200" css={{ marginBottom: 40 }}>
              Faça login para deixar sua avaliação
            </Heading>
            <AuthSection
              callbackUrl={
                paramBookId ? `/explore?book=${paramBookId}` : '/explore'
              }
            />
          </div>
        </S.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
