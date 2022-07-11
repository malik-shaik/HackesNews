import { FC } from 'react'
import { BiCalendar, BiBarChartSquare, BiUser, BiAward } from 'react-icons/bi'
import { StoryProps as InfoProps } from 'components/landing-page/story'
import { getDateFromUnixTimestamp } from 'lib/get-date-from-unix-timestamp'

export const Info: FC<InfoProps> = ({ story }) => {
  return (
    <div className="info">
      <h3>{story.title}</h3>

      <div className="info__section">
        <div className="info__item">
          <BiCalendar size={16} />
          <p>{getDateFromUnixTimestamp(story.time)}</p>
        </div>

        <div className="info__item">
          <BiBarChartSquare size={16} />
          <p>{story.score}</p>
        </div>
      </div>

      <div className="info__section">
        <div className="info__item">
          <BiUser size={18} />
          <p>{story.by}</p>
        </div>

        <div className="info__item">
          <BiAward size={17} />
          <p>{story.authorKarmaScore}</p>
        </div>
      </div>

      <div className="info__section">
        <div className="info__item">
          <a href={story.url} target="_blank" rel="noreferrer noopener">
            {story.url}
          </a>
        </div>
      </div>
    </div>
  )
}
