import { Text } from '@components/typography/text'
import { Link } from '@components/ui/Link'

import * as S from './styles'
import { BookCard } from '@components/book-card'

export function PopularBooks() {
  return (
    <S.PopularBooksContainer>
      <header>
        <Text size="sm">Livros populares</Text>
        <Link href="/explore" text="Ver todos" />
      </header>

      <section>
        {Array.from({ length: 4 }).map((_, index) => (
          <BookCard
            key={index}
            book={{
              author: 'J. K. Rowling',
              id: '1',
              name: 'Harry Potter e a Pedra Filosofal',
              avgRating: 4,
              cover_url: 'https://github.com/danielfariias.png',
              summary:
                'oakdshjvaklsjfdh jkdsafh jkdh fkdjhf kljashjfk dhfdkljh sdajkhfkajlfh jkdashfdjkdshkjfsadjkfdsahadfskhdfljkdfsdfsjk fhd d sfladfskhdjklfdhsfadsh lfdsjkh ',
            }}
          />
        ))}
      </section>
    </S.PopularBooksContainer>
  )
}
