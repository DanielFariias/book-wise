import { ReactElement } from 'react'

import { DefaultLayout } from 'src/layouts/default'

import { NextPageWithLayout } from './_app.page'

import { HomePageComponent } from './home'

const HomePage: NextPageWithLayout = () => {
  return <HomePageComponent />
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
