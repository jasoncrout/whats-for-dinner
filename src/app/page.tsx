import App from "./(app)/app";

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function Home() {
  async function fetchFoodSuggestions(foodInputText: string): Promise<string> {
    "use server";
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "A chef who specialises in cooking home cooked meals.",
        },
        {
          role: "user",
          content: foodInputText,
        },
      ],
    });
    console.log(completion.data.choices);
    return completion.data.choices[0].message?.content || "";
  }

  return <App fetchFoodSuggestions={fetchFoodSuggestions} />;
}
