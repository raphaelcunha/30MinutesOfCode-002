import { ErrorBoundary } from 'react-error-boundary'
import Carousel from 'containers/ContentCarousel'
import ContentList from 'containers/ContentList'

export default function Content() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Carousel />
      <ContentList />
    </ErrorBoundary>
  )
}
