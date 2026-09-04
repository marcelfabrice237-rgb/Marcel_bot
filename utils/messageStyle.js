import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "꧁𓆩༒☥Kevin De Bruyne𓆪༒꧂",
        body: "꧁𓆩༒☥Kevin De Bruyne𓆪༒꧂",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
