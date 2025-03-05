import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const { prompt } = await req.json();
  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a Dungeon Master for a fantasy RPG..." },
      { role: "user", content: prompt },
    ],
  });
  return new Response(response.choices[0].message.content);
}