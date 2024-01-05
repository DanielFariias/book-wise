import { Text } from '@components/typography/text'
import { Link } from '@components/ui/Link'

import * as S from './styles'
import { BookCard, TBookWithAvgRating } from '@components/book-card'
import { useQuery } from '@tanstack/react-query'
import { api } from '@lib/axios'

export function PopularBooks() {
  const { data: popularBooks } = useQuery<TBookWithAvgRating[]>({
    queryKey: ['popular-books'],
    queryFn: async () => {
      const response = await api.get('/books/popular')
      return response.data?.books ?? []
    },
  })

  return (
    <S.PopularBooksContainer>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {popularBooks?.map((book) => <BookCard key={book.id} book={book} />)}
      </section>
    </S.PopularBooksContainer>
  )
}
