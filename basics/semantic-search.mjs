import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY
});

const vectorStoree = await MemoryVectorStore.fromTexts(
    [
        'React é uma biblioteca de JavaScript para UI.',
        'Python é ótimo para data science.',
        'Next.js é um framework para React.',
        'Typescript adiciona tipagem estática ao JavaScript.',
    ],
    [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    embeddings
)

const results = await vectorStoree.similaritySearch('Frameworks frontend', 2);

console.log(results);
