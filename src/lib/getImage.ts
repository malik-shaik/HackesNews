export enum ImageType {
  LOGO = 'logo',
  STORY = 'story',
}
type Params = {
  imageType: ImageType
}

/**
 * Gives image url based on type
 * @param imageType which can be 'logo' or 'story'
 * @returns image url
 */
export const getImage = ({ imageType }: Params): string => {
  if (imageType === ImageType.LOGO) {
    return 'images/hacker-logo.png'
  }
  return ''
}
