import { useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import ContentDetail from 'containers/ContentDetail'
import ContentDetailSidebar from 'containers/ContentDetailSidebar'
import { LeftContent, RightContent, StyledContainer, StyledContent, StyledSidebar } from './styles'

function ContentDetailPage() {
  useEffect(() => {
    // change background color
    document.body.style.background = '#FFFFFF'
  })

  const GRID_LAYOUT = {
    display: 'grid',
    height: 'calc(100vh - 64px)',
    columnGap: {
      xs: 4,
      sm: 0,
    },
    gridTemplateColumns: {
      xs: '1fr',
      sm: '1fr 800px 400px 1fr',
    },
  }

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <StyledContainer sx={GRID_LAYOUT}>
        <LeftContent />
        <StyledContent>
          <ContentDetail />
        </StyledContent>
        <StyledSidebar>
          <ContentDetailSidebar />
        </StyledSidebar>
        <RightContent />
      </StyledContainer>
    </ErrorBoundary>
  )
}

export default ContentDetailPage
