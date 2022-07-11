/**
 * Give human readable format of date from unix time stamp
 * @param unixTimestamp
 * @returns formatted date
 */
export const getDateFromUnixTimestamp = (unixTimestamp: number): string =>
  new Date(unixTimestamp * 1000).toLocaleDateString()
