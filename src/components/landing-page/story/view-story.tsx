import { FC } from 'react'

interface ViewStoryProps {
  url: string
}
export const ViewStory: FC<ViewStoryProps> = ({ url }) => {
  return (
    <div className="view__story">
      <a href={url || ''} target="_blank" rel="noreferrer noopener">
        View story
      </a>
    </div>
  )
}
