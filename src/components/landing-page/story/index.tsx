import { FC } from 'react'
import { getImage, ImageType } from 'lib/getImage'
import { Story as StoryType } from 'lib/use-ten-random-stories'
import { Content } from 'components/landing-page/story/content'

export type StoryProps = {
  story: StoryType
}

export const Story: FC<StoryProps> = ({ story }) => {
  const imgUrl = getImage({
    imageType: ImageType.STORY,
    imageName: story.image,
  })

  return (
    <div className="story">
      <img src={imgUrl} alt="story" />
      <Content story={story} />
    </div>
  )
}
