import { GoogleGenerativeAI } from "@google/generative-ai";




const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
could make with some or all of those ingredients. You don't need to use every ingredient they
mention in your recipe. The recipe can include additional ingredients they didn't mention, but try
not to include too many extra ingredients. Format your response in markdown to make it easier to
render to a web page`;

const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY
);

export async function getRecipeFromGemini(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ");

    const model = genAI.getGenerativeModel({
        model: "models/gemini-2.5-flash-lite"
    });

    const prompt = `${SYSTEM_PROMPT}

    Ingredients: ${ingredientsString}
    Give me a recipe suggestion.`;

    const result = await model.generateContent(prompt);
    return result.response.text();
}


