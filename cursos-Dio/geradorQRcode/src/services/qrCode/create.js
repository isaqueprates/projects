import prompt from "prompt";
import qrCodePrompt from "../../promptsSchema/schemaQrCode.js";
import handler from "./handler.js";

async function createQrCode() {
    prompt.get(qrCodePrompt, handler);
}


export default createQrCode;