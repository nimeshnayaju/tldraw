import * as React from 'react'
import { styled } from '~styles'
import { useTldrawApp } from '~hooks'
import { Panel } from '~components/Primitives/Panel'
import { ToolButton, ToolButtonWithTooltip } from '~components/Primitives/ToolButton'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  Cross2Icon,
  MagnifyingGlassIcon,
} from '@radix-ui/react-icons'
import { Tooltip } from '~components/Primitives/Tooltip'

interface NavigationToolsProps {
  onBlur?: React.FocusEventHandler
}

export const NavigationTools = React.memo(function NavigationTools({
  onBlur,
}: NavigationToolsProps): JSX.Element {
  const app = useTldrawApp()

  return (
    <StyledToolsPanelContainer onBlur={onBlur}>
      <StyledCenterWrap id="TD-Navigation">
        <StyledNavigationTools>
          <Tooltip label="Zoom to fit" kbd="⇧1" id="TD-ZoomToFit">
            <ToolButton variant="circle" onSelect={app.zoomToFit}>
              <MagnifyingGlassIcon />
            </ToolButton>
          </Tooltip>
          <Panel side="center" id="TD-NavigationTools">
            <ToolButtonWithTooltip
              label="Previous Slide"
              onClick={app.previousPage}
              id="TD-NavigationTools-PreviousPage"
            >
              <ArrowLeftIcon />
            </ToolButtonWithTooltip>
            <ToolButtonWithTooltip
              label="Next Slide"
              onClick={app.nextPage}
              id="TD-NavigationTools-NextPage"
            >
              <ArrowRightIcon />
            </ToolButtonWithTooltip>
          </Panel>
          <Tooltip label="Toggle presentation mode" id="TD-TogglePresentationMode">
            <ToolButton variant="circle" onSelect={app.togglePresentationMode}>
              <Cross2Icon />
            </ToolButton>
          </Tooltip>
        </StyledNavigationTools>
      </StyledCenterWrap>
    </StyledToolsPanelContainer>
  )
})

const StyledToolsPanelContainer = styled('div', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  minWidth: 0,
  maxWidth: '100%',
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  gridTemplateRows: 'auto auto',
  justifyContent: 'space-between',
  padding: '0',
  gap: '$4',
  zIndex: 200,
  pointerEvents: 'none',
  '& > div > *': {
    pointerEvents: 'all',
  },
})

const StyledCenterWrap = styled('div', {
  gridRow: 1,
  gridColumn: 2,
  display: 'flex',
  width: 'fit-content',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '$4',
})

const StyledNavigationTools = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
