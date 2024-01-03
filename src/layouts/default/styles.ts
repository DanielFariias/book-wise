import { styled } from 'stitches.config'

export const LayoutContainer = styled('main', {
  width: '100%',
  height: '100vh',
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
})

export const LayoutContent = styled('div', {
  width: '100%',
  height: '100vh',
  maxWidth: '996px',
  margin: '0 auto',
  paddingTop: 72,
})
