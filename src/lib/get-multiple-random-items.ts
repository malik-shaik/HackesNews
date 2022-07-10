interface Params<T> {
  array: T[]
  numOfElements: number
}

/**
 * Gives specified number of random elements from a given array
 * @param array of string
 * @param numOfElements to pick from array
 * @returns array with specified number of elements
 */
export const getMultipleRandomItems = <T>({
  array,
  numOfElements,
}: Params<T>): T[] => {
  const shuffled = shuffleElements(array)

  return shuffled.slice(0, numOfElements)
}

/**
 * Shuffles elements from a given array
 * @param array of string
 * @returns shuffled array
 */
export const shuffleElements = <T>(array: T[]): T[] =>
  [...array].sort(() => 0.5 - Math.random())
