import { AuthButton } from '@components/primitives/auth-button'
import { signOut, useSession } from 'next-auth/react'
import { NextPageWithLayout } from './_app.page'
import { ReactElement } from 'react'
import { DefaultLayout } from 'src/layouts/default'

const HomePage: NextPageWithLayout = () => {
  const session = useSession()
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <AuthButton onClick={() => signOut()}>SignOut</AuthButton>
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DefaultLayout title="Início">{page}</DefaultLayout>
}

export default HomePage
