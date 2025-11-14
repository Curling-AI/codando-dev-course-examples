import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_API_KEY,
    model: "gemini-2.5-flash",
});

const question = "De forma sucinta, explique o que é a inferência da IA?";

console.log(`Pergunta: ${question}`);

const response = await model.invoke(question);

console.log(`Resposta:\n\n${response.content}`);
