import axios from "axios";

export const analyzeComplaintAI = async (description) => {
  try {
    const prompt = `
Analyze this complaint carefully:

Complaint:
${description}

Return STRICTLY in this format:

Priority:
Department:
Summary:
Automated Response:
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-4o-mini",
        messages: [
          {
            role: "user",
            content: prompt
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000",
          "X-Title": "Complaint Management System"
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error.response?.data || error.message);

    return "AI analysis unavailable";
  }
};