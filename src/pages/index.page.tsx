import { AuthButton } from '@components/primitives/auth-button'
import { signOut, useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <AuthButton onClick={() => signOut()}>SignOut</AuthButton>
    </>
  )
}
