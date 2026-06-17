
import { GoogleGenAI, Type, Modality } from "@google/genai";

// Helper to get AI client
const getAIClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const streamChatResponse = async (
  history: { role: string; parts: [{ text: string }] }[],
  message: string,
  onChunk: (text: string) => void,
  onSources: (sources: string[]) => void
) => {
  const ai = getAIClient();
  
  // Using gemini-2.5-flash with googleSearch for market info
  const model = 'gemini-2.5-flash';
  
  try {
    const response = await ai.models.generateContentStream({
      model: model,
      contents: [
        ...history,
        { role: 'user', parts: [{ text: message }] }
      ],
      config: {
        tools: [{ googleSearch: {} }],
        systemInstruction: `Eres el asistente virtual experto de 'lahuertarealestate', una consultora inmobiliaria líder en Madrid dirigida por arquitectos. 
        Tu tono es profesional, elegante, cercano y experto.
        Ayudas a clientes con dudas sobre inversión, venta, reformas y el mercado de Madrid.
        Usa euros (€) para precios.`,
      }
    });

    for await (const chunk of response) {
      const text = chunk.text;
      if (text) onChunk(text);
      
      const groundingChunks = chunk.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (groundingChunks) {
        const sources = groundingChunks
          .map((c: any) => c.web?.uri || c.web?.title)
          .filter((s: any) => !!s);
        if (sources.length > 0) onSources(sources);
      }
    }
  } catch (error) {
    console.error("Chat Error:", error);
    throw error;
  }
};

export const generateThinkingResponse = async (prompt: string): Promise<string> => {
  const ai = getAIClient();
  // Using gemini-3-pro-preview for deep reasoning/investment analysis
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      thinkingConfig: { thinkingBudget: 32768 }, // Max thinking for complex real estate analysis
    }
  });
  return response.text || "No se pudo generar una respuesta detallada.";
};

export const analyzeImage = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = getAIClient();
  // Gemini 3 Pro for image understanding
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: {
      parts: [
        { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
        { text: prompt }
      ]
    }
  });
  return response.text || "No se pudo analizar la imagen.";
};

export const generateImage = async (prompt: string, aspectRatio: string = '4:3'): Promise<string> => {
  const ai = getAIClient();
  // Imagen 4 for high quality generations
  const response = await ai.models.generateImages({
    model: 'imagen-4.0-generate-001',
    prompt: prompt,
    config: {
      numberOfImages: 1,
      outputMimeType: 'image/jpeg',
      aspectRatio: aspectRatio,
    },
  });
  
  const base64 = response.generatedImages?.[0]?.image?.imageBytes;
  if (!base64) throw new Error("No image generated");
  return `data:image/jpeg;base64,${base64}`;
};

export const editImage = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = getAIClient();
  // Gemini 2.5 Flash Image for editing (Nano Banana)
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [
        { inlineData: { mimeType: 'image/jpeg', data: base64Image } },
        { text: prompt }
      ]
    },
    config: {
      responseModalities: [Modality.IMAGE],
    }
  });

  const part = response.candidates?.[0]?.content?.parts?.[0];
  if (part?.inlineData) {
    return `data:image/png;base64,${part.inlineData.data}`;
  }
  throw new Error("No edited image returned");
};

export const generateVideo = async (
  prompt: string, 
  aspectRatio: '16:9' | '9:16',
  imageBytes?: string
): Promise<string> => {
  
  // Check for API Key specifically for Veo as per instructions
  if (window.aistudio && !await window.aistudio.hasSelectedApiKey()) {
     await window.aistudio.openSelectKey();
  }

  // Create NEW instance to ensure key is fresh
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  let operation;
  
  const config: any = {
    numberOfVideos: 1,
    resolution: '720p', // Fast preview
    aspectRatio: aspectRatio
  };

  if (imageBytes) {
    // Image-to-Video
    operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt || "Animate this real estate scene cinematically",
      image: {
        imageBytes: imageBytes,
        mimeType: 'image/jpeg'
      },
      config
    });
  } else {
    // Text-to-Video
    operation = await ai.models.generateVideos({
      model: 'veo-3.1-fast-generate-preview',
      prompt: prompt,
      config
    });
  }

  // Polling loop
  while (!operation.done) {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Poll every 5s
    operation = await ai.operations.getVideosOperation({ operation });
  }

  const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
  if (!videoUri) throw new Error("Video generation failed");
  
  return `${videoUri}&key=${process.env.API_KEY}`;
};

// Helper for file to base64
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      // Remove Data URL prefix for API calls that need raw base64, or keep for display
      // For Gemini API `inlineData`, we usually remove the prefix.
      // But the helper below splits it.
      resolve(result);
    };
    reader.onerror = error => reject(error);
  });
};
