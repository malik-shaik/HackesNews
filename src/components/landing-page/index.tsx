import { FC } from 'react'
import { Story } from 'components/landing-page/story'
import { LoadingSpinner } from 'components/utils/loading-spinner'
import { useTenRandomStories } from 'lib/use-ten-random-stories'
import { ErrorPage } from 'components/error-page'

export const LandingPage: FC = () => {
  const { stories, loading, error } = useTenRandomStories()

  if (loading) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorPage />
  }

  if (stories.length === 0) {
    return null
  }

  return (
    <section>
      {stories.map((story) => (
        <Story story={story} />
      ))}
    </section>
  )
}
