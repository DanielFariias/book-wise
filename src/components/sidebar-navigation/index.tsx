import { useMemo } from 'react'

import { usePathname } from 'next/navigation'

import { useSession } from 'next-auth/react'

import { Binoculars, ChartLineUp, User } from '@phosphor-icons/react'

import * as S from './styles'

const NAV_ITEMS = [
  {
    label: 'Início',
    href: '/',
    icon: <ChartLineUp size={24} />,
  },
  {
    label: 'Explorar',
    href: '/explore',
    icon: <Binoculars size={24} />,
  },
]

export function SidebarNavigation() {
  const pathname = usePathname()

  const { data: session } = useSession()

  const navItems = useMemo(() => {
    if (session) {
      return NAV_ITEMS.concat({
        label: 'Perfil',
        href: `/profile/${session.user.id}`,
        icon: <User size={24} />,
      })
    }

    return NAV_ITEMS
  }, [session])

  return (
    <S.NavigationContainer>
      {navItems.map(({ href, label, icon }) => (
        <S.NavItemContainer href={href} key={label} active={pathname === href}>
          {icon}
          {label}
        </S.NavItemContainer>
      ))}
    </S.NavigationContainer>
  )
}
