import { FC } from 'react'

interface ViewStoryProps {
  url: string
}
export const ViewStory: FC<ViewStoryProps> = ({ url }) => {
  return (
    <a
      className="view__story"
      href={url || ''}
      target="_blank"
      rel="noreferrer noopener"
    >
      View story
    </a>
  )
}
