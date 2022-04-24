import * as React from 'react'
import { styled } from '~styles'
import { useTldrawApp } from '~hooks'
import { ToolButton } from '~components/Primitives/ToolButton'
import { ArrowLeftIcon, ArrowRightIcon, BorderAllIcon, ExitIcon } from '@radix-ui/react-icons'
import { Tooltip } from '~components/Primitives/Tooltip'

interface BottomPanelProps {
  onBlur?: React.FocusEventHandler
}

export const BottomPanel = React.memo(function BottomPanel({
  onBlur,
}: BottomPanelProps): JSX.Element {
  const app = useTldrawApp()

  return (
    <StyledBottomPanel onBlur={onBlur}>
      <StyledNavigationTools>
        <Tooltip label="Previous Slide" id="TD-NavigationTools-PreviousPage">
          <ToolButton onSelect={app.previousPage}>
            <ArrowLeftIcon />
          </ToolButton>
        </Tooltip>
        <Tooltip label="Next Slide" id="TD-NavigationTools-NextPage">
          <ToolButton onSelect={app.nextPage}>
            <ArrowRightIcon />
          </ToolButton>
        </Tooltip>
        <Tooltip label="Fit to screen" kbd="⇧1" id="TD-FitToScreen">
          <ToolButton onSelect={app.zoomToFit}>
            <BorderAllIcon />
          </ToolButton>
        </Tooltip>
      </StyledNavigationTools>
      <StyledSpacer />
      <StyledSlideControl>
        <Tooltip label="Exit presentation mode" id="TD-TogglePresentationMode">
          <ToolButton onSelect={app.togglePresentationMode}>
            <ExitIcon />
          </ToolButton>
        </Tooltip>
      </StyledSlideControl>
    </StyledBottomPanel>
  )
})

const StyledBottomPanel = styled('div', {
  width: '100%',
  position: 'absolute',
  zIndex: 100,
  bottom: 0,
  left: 0,
  right: 0,
  padding: 4,
  display: 'flex',
  flexDirection: 'row',
  pointerEvents: 'none',
  backgroundColor: '$panel',
  '& > *': {
    pointerEvents: 'all',
  },
})

const StyledNavigationTools = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})

const StyledSpacer = styled('div', {
  flexGrow: 2,
  pointerEvents: 'none',
})

const StyledSlideControl = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
