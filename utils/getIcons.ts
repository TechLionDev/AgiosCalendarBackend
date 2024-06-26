import generateFileUrl from "./generateFileUrl";
import generateCroppedFileUrl from "./generateCroppedFileUrl";
import getIconagrapher from "./getIconagrapher";

/**
 * Retrieves the formatted icons based on the provided icons array.
 * @param {Icon[]} icons - The array of icons to be formatted.
 * @returns {Promise<Icon[]>} - The formatted icons array.
 */
export default async function getIcons(icons: any[]): Promise<Icon[]> {
  if (!icons) return [];
  let formattedIcons = [];
  for (let icon of icons) {
    let formattedIcon = {
      created: new Date(icon.created),
      id: icon.id,
      name: icon.name,
      updated: new Date(icon.updated),
      caption: icon.caption,
      explanation: icon.explanation,
      story: icon.story,
      image: await generateFileUrl(icon),
      croppedImage: await generateCroppedFileUrl(icon),
      iconagrapher: await getIconagrapher(icon.iconographer),
    };
    formattedIcons.push(formattedIcon);
  }
  return formattedIcons;
}
