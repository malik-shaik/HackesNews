import { FC } from 'react'
import { StoryProps as ContentProps } from 'components/landing-page/story'
import { Info } from 'components/landing-page/story/info'
import { ViewStory } from 'components/landing-page/story/view-story'

export const Content: FC<ContentProps> = ({ story }) => {
  return (
    <div className="story__details">
      <Info story={story} />
      <ViewStory url={story?.url} />
    </div>
  )
}
