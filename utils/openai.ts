// utils/openai.ts
import OpenAI from "openai";
const apiKey = process.env.OPENAI_API_KEY;

const openai = new OpenAI({
  apiKey: apiKey, // ✅ Use env var, not hardcoded key
});

export default openai;
