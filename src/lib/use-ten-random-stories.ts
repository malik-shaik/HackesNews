import axios, { AxiosError } from 'axios'
import { getMultipleRandomItems } from 'lib/get-multiple-random-items'
import { useEffect, useState } from 'react'

interface Story {
  by: string
  descendants: number
  id: number
  score: number
  time: number
  title: string
  url: string
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
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ErrorType>(null)

  const getTenRandomStories = async () => {
    setLoading(true)

    try {
      const topStoriesURL = `${process.env.REACT_APP_TOP_STORIES_URL}topstories.json`
      const { data } = await axios.get(topStoriesURL)

      const tenRandomStories = getMultipleRandomItems<string>({
        array: data,
        numOfElements: 10,
      })

      const arrayOfPromises = tenRandomStories.map(async (story) => {
        const storyURL = `${process.env.REACT_APP_TOP_STORIES_URL}item/${story}.json`
        const { data } = await axios.get(storyURL)
        return data
      })

      const allStories = await Promise.all(arrayOfPromises)

      setStories(allStories)
    } catch (error) {
      console.error(error)
      setError(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    getTenRandomStories()
  }, [])

  return { stories, loading, error }
}
