import * as React from 'react'
import { Root, TriggerItem, Content, Arrow } from '@radix-ui/react-dropdown-menu'
import { RowButton } from '~components/Primitives/RowButton'
import { MenuContent } from '~components/Primitives/MenuContent'
import { useTheme } from '~hooks'
import { dark } from '~styles'

export interface DMSubMenuProps {
  label: string
  size?: 'small'
  disabled?: boolean
  children: React.ReactNode
  id?: string
}

export function DMSubMenu({
  children,
  size,
  disabled = false,
  label,
  id,
}: DMSubMenuProps): JSX.Element {
  const { theme } = useTheme()
  return (
    <span id={id}>
      <Root dir="ltr">
        <TriggerItem dir="ltr" asChild>
          <RowButton disabled={disabled} hasArrow>
            {label}
          </RowButton>
        </TriggerItem>
        <Content
          className={theme === 'dark' ? dark : ''}
          dir="ltr"
          asChild
          sideOffset={2}
          alignOffset={-2}
        >
          <MenuContent size={size}>
            {children}
            <Arrow offset={13} />
          </MenuContent>
        </Content>
      </Root>
    </span>
  )
}
