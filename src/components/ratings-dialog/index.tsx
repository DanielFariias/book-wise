import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { ReactNode, useEffect, useState } from 'react'
import { BookOpen, BookmarkSimple, X } from '@phosphor-icons/react'
import { Heading } from '@components/typography/heading'
import { Text } from '@components/typography/text'
import { RatingStars } from '@components/rating-starts'
import { BookInfo } from './book-info'
import { BookRatings } from '@components/book-ratings'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'
import { TBookWithAvgRating } from '@components/book-card'
import { TRatingWithAuthor } from '@components/user-rating-card'
import { CategoriesOnBooks, Category } from '@prisma/client'

type BookDetails = TBookWithAvgRating & {
  ratings: TRatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

interface IRatingsDialogProps {
  bookId: string
  children: ReactNode
}

export function RatingDialog({ children, bookId }: IRatingsDialogProps) {
  const [open, setOpen] = useState(false)

  const router = useRouter()
  const paramBookId = router.query.book as string

  useEffect(() => {
    if (paramBookId === bookId) {
      setOpen(true)
    }
  }, [paramBookId, bookId])

  const { data: book } = useQuery<BookDetails>({
    queryKey: ['book', bookId],
    queryFn: async () => {
      const response = await api.get(`/books/details/${bookId}`)

      return response.data.book
    },
    enabled: open,
  })

  const onOpenChange = (open: boolean) => {
    if (open) {
      router.push(`/explore?book=${bookId}`, undefined, { shallow: true })
    } else {
      router.push('/explore', undefined, { shallow: true })
    }

    setOpen(open)
  }

  const ratingsLength = book?.ratings.length || 0

  const categories = book?.categories
    .map((category) => category.category.name)
    .join(', ')

  console.log(book)

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <S.DialogOverlay />

        <S.DialogContent>
          <S.DialogClose>
            <X size={24} />
          </S.DialogClose>

          {!book ? (
            <p>Carregando...</p>
          ) : (
            <>
              <S.BookDetailsWrapper>
                <S.BookDetailsContainer>
                  <S.BookImage
                    src={book?.cover_url}
                    width={171}
                    height={242}
                    alt={book.name}
                  />

                  <S.BookContent>
                    <div>
                      <Heading size="md">{book.name}</Heading>
                      <Text color={'gray-300'} css={{ marginTop: '$2' }}>
                        {book.author}
                      </Text>
                    </div>

                    <div>
                      <RatingStars rating={book.avgRating} size={'md'} />
                      <Text
                        color={'gray-400'}
                        css={{ marginTop: '$1' }}
                        size={'sm'}
                      >
                        {ratingsLength}
                        {ratingsLength === 1 ? ' avaliação' : ' avaliações'}
                      </Text>
                    </div>
                  </S.BookContent>
                </S.BookDetailsContainer>

                <S.BookInfos>
                  <BookInfo
                    icon={<BookmarkSimple />}
                    title="Categorias"
                    info={categories || 'Não categorizado'}
                  />
                  <BookInfo
                    icon={<BookOpen />}
                    title="Páginas"
                    info={String(book.total_pages)}
                  />
                </S.BookInfos>
              </S.BookDetailsWrapper>

              <BookRatings ratings={book.ratings} bookId={bookId} />
            </>
          )}
        </S.DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
