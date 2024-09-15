import { surpriseMePrompts } from "../constents";
import { natureImages } from "../constents/imageUrl.js";
import { saveAs } from "file-saver";

let previousIndex = -1;

export function getRandomPrompt(prompt) {
  if (prompt) {
    // Generate a random index based on surpriseMePrompts length
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    // If the random prompt is the same as the provided prompt, try again
    if (randomPrompt === prompt) {
      return getRandomPrompt(prompt);
    }
    return randomPrompt;
  } else {
    // Generate a random index based on natureImages length
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * natureImages.length);
    } while (randomIndex === previousIndex);

    previousIndex = randomIndex;
    const imageUrl = natureImages[randomIndex];
    return imageUrl;
  }
}

export async function downloadImage(_id, photo) {
  saveAs.saveAs(photo, `download-${_id}.jpg`);
}
