import React from 'react'

import { HeaderContainer, HeaderIcon, HeaderTitle } from './styles'
import dimensions from '../../global/dimensions'

interface HeaderProps {
  headerTitle: string
  headerIcon?: string
  execute?(): void
}

const Header: React.FC<HeaderProps> = ({ ...props }) => {
  const { headerIcon, headerTitle, execute } = props

  return (
    <HeaderContainer style={{ shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.5, shadowRadius: 3.84, elevation: 8 }}>
      {headerIcon &&
        <HeaderIcon name={headerIcon} size={dimensions.icon} onPress={() => {
          if (execute != null) execute()
        }}/>
      }
      <HeaderTitle>{headerTitle}</HeaderTitle>
    </HeaderContainer>
  )
}

export default Header
