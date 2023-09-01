import { ModelError, RealtimeMessage } from './models';

export interface ISocketWrapper {
  onMessage?: (data: RealtimeMessage) => void;
  onError?: (event: ModelError) => void;
  onDisconnect?: (event: CloseEvent) => void;
  connect(url: string, authToken?: string, appId?: string): Promise<void>;
  disconnect(): Promise<void>;
  sendAudioBuffer(buffer: ArrayBufferLike): void;
  sendMessage(message: string): void;
  isOpen(): boolean;
}
