/**
 * Shuffles elements from a given array
 * @param array of string
 * @returns shuffled array
 */
export const shuffleElements = <T>(array: T[]): T[] =>
  [...array].sort(() => 0.5 - Math.random())
