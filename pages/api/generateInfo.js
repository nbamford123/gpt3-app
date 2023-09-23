/* Create a controller with the following specifications:
1. import the configuration class and the OpenApi class from the openapi npm module as esm imports
2. create a new configuration object that includes the api key and uses the Configuration class from the openapi module
3. create a new instance of the OpenApi class and pass in the configuration object
4. create an async function called generateInfo that accepts a request and response object as parameters
5. use try to make a request to the OpenApi completion api and return the response
6. use catch to catch any errors and return the error in a message to the user
7. export the generateInfo function
*/

const OpenAI = require("openai");
const dotenv = require("dotenv");

const { recipePrompt } = require("../../data/prompt.json");

dotenv.config();
const openApi = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateInfo = async (req, res) => {
  try {
    const { recipe } = req.body;
    const completion = await openApi.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${recipePrompt}${recipe}` }],
      max_tokens: 200,
      temperature: 0,
      n: 1,
    });
    const response = completion.choices[0].message.content;

    return res.status(200).json({ success: true, data: response });
  } catch (error) {
    console.error(error);
    if (error.response.status === 401) {
      return res.status(401).json({
        error: "Please provide a valid API key.",
      });
    }
    return res.status(500).json({
      error:
        "An error occured while generating recipe information. Please try again later.",
    });
  }
};
module.exports = { generateInfo };
