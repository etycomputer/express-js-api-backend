export interface IReading {
  readingId: number;
  markerId: number;
  timestamp: Date;
  temperature: null | number;
  porePressure: null | number;
}
