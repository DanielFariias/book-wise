import { DefaultLayout } from '@layouts/default'
import { ReactElement, useState } from 'react'
import * as S from './styles'
import { PageTitle } from '@components/ui/PageTitle'
import { Binoculars, MagnifyingGlass } from '@phosphor-icons/react'
import { Input } from '@components/ui/form/Input'
import { Tag } from '@components/ui/Tag'
import { BookCard, TBookWithAvgRating } from '@components/book-card'
import { useQuery } from '@tanstack/react-query'
import { Category } from '@prisma/client'
import { api } from '@lib/axios'

function ExplorePage() {
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const { data: categories } = useQuery<Category[]>({
    queryKey: ['books'],
    queryFn: async () => {
      const response = await api.get('/books/categories')
      return response.data.categories ?? []
    },
  })

  const { data: books } = useQuery<TBookWithAvgRating[]>({
    queryKey: ['books', selectedCategory],
    queryFn: async () => {
      const response = await api.get('/books', {
        params: {
          category: selectedCategory,
        },
      })
      return response.data.books ?? []
    },
  })

  const filteredBooks = books?.filter((book) => {
    return (
      book.name.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <S.ExploreContainer>
      <header>
        <PageTitle title="Explorar" icon={<Binoculars size={32} />} />

        <Input
          type="text"
          placeholder="Pesquisar"
          icon={<MagnifyingGlass size={20} />}
          css={{ maxWidth: '400px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </header>

      <S.TagsContainer>
        <Tag
          active={selectedCategory === null}
          onClick={() => setSelectedCategory(null)}
        >
          Tudo
        </Tag>
        {categories?.map((category) => (
          <Tag
            key={category.id}
            active={selectedCategory === category.id}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Tag>
        ))}
      </S.TagsContainer>

      <S.BooksGrid>
        {filteredBooks?.map((book) => (
          <BookCard size="lg" key={book.id} book={book} />
        ))}
      </S.BooksGrid>
    </S.ExploreContainer>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Explorar">{page}</DefaultLayout>
}

export default ExplorePage
