import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { getMultipleRandomItems } from 'lib/get-multiple-random-items'

export interface Story {
  by: string
  descendants: number
  id: number
  score: number
  time: number
  title: string
  url: string
  authorKarmaScore: string
  image: string
}

type ErrorType = AxiosError | Error | unknown

interface UseTenRandomStoriesResult {
  stories: Story[]
  loading: boolean
  error: ErrorType
}

/**
 * Fetches all top stories and gives 10 random stories
 * @returns an object with random 10 stories, loading or error
 */
export const useTenRandomStories = (): UseTenRandomStoriesResult => {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<ErrorType>(null)

  const getTenRandomStories = async () => {
    try {
      // Fetch all stories ids
      const topStoriesURL = `${process.env.REACT_APP_TOP_STORIES_URL}topstories.json`
      const { data } = await axios.get(topStoriesURL)

      // Get 10 random stories ids
      const tenRandomStories = getMultipleRandomItems<string>({
        array: data,
        numOfElements: 10,
      })

      // Get 10 random image ids
      const tenRandomImages = getMultipleRandomItems({
        array: Array.from(Array(10).keys()),
        numOfElements: 10,
      })

      const arrayOfPromises = tenRandomStories.map(async (story, i) => {
        // Fetch story data by its id
        const storyURL = `${process.env.REACT_APP_TOP_STORIES_URL}item/${story}.json`
        const { data: storyData } = await axios.get(storyURL)

        // Fetch user data by its id
        const authorURL = `${process.env.REACT_APP_TOP_STORIES_URL}user/${storyData.by}.json`
        const { data: authorData } = await axios.get(authorURL)

        // Return story data with image name and author karma score
        const image = `${tenRandomImages[i]}.webp`
        return { ...storyData, image, authorKarmaScore: authorData.karma }
      })

      const allStories = await Promise.all(arrayOfPromises)

      // Sort stories in ascending order by their score
      const sortedStories = allStories.sort(
        (a: Story, b: Story) => a.score - b.score
      )

      setStories(sortedStories)
    } catch (error) {
      console.error(error)
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getTenRandomStories()
  }, [])

  return { stories, loading, error }
}
