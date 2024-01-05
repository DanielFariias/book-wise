import { styled } from 'stitches.config'

export const PopularBooksContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: 60,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  '> section': {
    display: 'flex',
    flexDirection: 'column',
    gap: '$3',
  },
})
