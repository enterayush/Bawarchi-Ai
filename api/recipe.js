import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of 
those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention,
but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`;

export default async function handler(req, res) {
    try {
    const { ingredients } = req.body;
    const ingredientsString = ingredients.join(", ");

    const model = genAI.getGenerativeModel({
        model: "models/gemini-2.5-flash-lite"
    });

    const prompt = `${SYSTEM_PROMPT}

Ingredients: ${ingredientsString}
Give me a recipe suggestion.`;

    const result = await model.generateContent(prompt);
    res.json({ recipe: result.response.text() });
    } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gemini request failed" });
    }
}
