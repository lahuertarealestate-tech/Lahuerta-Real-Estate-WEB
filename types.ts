export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
  sources?: string[];
}

export enum AIState {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface GeneratedVideo {
  uri: string;
  mimeType: string;
}

export type AspectRatio = '1:1' | '3:4' | '4:3' | '9:16' | '16:9';
