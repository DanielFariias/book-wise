import { useSession } from 'next-auth/react'
import * as S from './styles'
import { Avatar } from '@components/ui/Avatar'
import { Heading } from '@components/typography/heading'
import { RatingStars } from '@components/rating-starts'
import { FormEvent, useState } from 'react'
import { Textarea } from '@components/ui/form/Textarea'
import { ActionIcon } from '@components/ui/ActionIcon'
import { Check, X } from '@phosphor-icons/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from '@lib/axios'

type RatingFormProps = {
  onCancel: () => void
  bookId: string
}

export function RatingForm({ onCancel, bookId }: RatingFormProps) {
  const [description, setDescription] = useState('')
  const [currentRate, setCurrentRate] = useState(0)

  const queryClient = useQueryClient()

  const { mutateAsync: handleRate } = useMutation({
    mutationFn: async () => {
      await api.post(`/books/${bookId}/rate`, {
        description,
        rate: currentRate,
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['book', bookId] })
      queryClient.invalidateQueries({ queryKey: ['books'] })
      onCancel()
    },
  })

  const { data: session } = useSession()
  const user = session?.user

  const submitDisabled = !description.trim() || !currentRate

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    if (submitDisabled) return

    await handleRate()
  }

  return (
    <S.RatingFormContainer>
      {user && (
        <S.UserDetails>
          <section>
            <Avatar src={user.avatar_url} alt={user.name} />
            <Heading size={'xs'}>{user.name}</Heading>
          </section>

          <RatingStars
            size={'lg'}
            rating={currentRate}
            setRating={setCurrentRate}
          />
        </S.UserDetails>
      )}

      <S.FormContainer onSubmit={handleSubmit}>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Escreva sua avaliação"
          maxLength={450}
        />
        <S.ActionsContainer>
          <ActionIcon
            type="button"
            onClick={onCancel}
            iconColor="purple100"
            icon={<X />}
          />
          <ActionIcon
            type="submit"
            iconColor="green100"
            icon={<Check />}
            disabled={submitDisabled}
          />
        </S.ActionsContainer>
      </S.FormContainer>
    </S.RatingFormContainer>
  )
}
