const fs = require("fs");

const { GoogleGenerativeAI } = require("@google/generative-ai");
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function run(prompt, JSONstring) {
  try {
    const newPrompt = "this is the refrence data in json object for you "+ JSONstring + " dont store it anywhere it already stored in 'file.json' file write code which can read file and help to visualize just give me code no need of explaination for this prompt '" +  prompt +"'"
    console.log(newPrompt)
    const result = await model.generateContent(newPrompt);
    const response = await result.response;
    const text = await response.text();
    console.log("Generated Text:", text);

    return text;
  } catch (error) {
    console.log(error)
  }
}

export default run;
