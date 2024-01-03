import Image from 'next/image'

import { SidebarNavigation } from '@components/sidebar-navigation'
import { UserDetails } from './user-details'

import Logo from '@assets/logo.svg'

import * as S from './styles'

export function Sidebar() {
  return (
    <S.SidebarContainer>
      <div>
        <Image className="logo" src={Logo} alt="Book Wise logo" />

        <SidebarNavigation />
      </div>

      <UserDetails />
    </S.SidebarContainer>
  )
}
