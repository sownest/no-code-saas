import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const apiKey =process.env.GOOGLE_API_KEY as string;

if (!apiKey) {
  throw new Error(
    "GOOGLE_API_KEY environment variable is not set.  Please set it in your .env file."
  );
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function GenerateSummary(text: string) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

    const prompt = `You are a highly efficient text summarizer. Create clear, concise summaries that capture the main points while maintaining context and key details. Format the summary in well-organized bullet points when appropriate.  Transform this document into an engaging, easy-to-read summary with contextuality relevant emojis and proper markdown formatting:\n\n${text}`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    return summary;
  } catch (error) {
    console.error("Error in summarizeText:", error);
    throw error;
  }
}
