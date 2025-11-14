import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY
});

const texts = [
    'o gato está no telhado',
    'o felino subiu no teto',
    'preciso comprar pão',
]

const embedding = await embeddings.embedDocuments(texts);

console.log('Dimensão do embedding 1:', embedding[0].length);
console.log('Exemplo de embedding 1:', embedding[0].slice(0, 5));
