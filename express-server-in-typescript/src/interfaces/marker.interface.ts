export interface IMarker {
  markerId: number;
  subnet: number;
  node: number;
  activated: boolean;
  activationTime: null | Date;
}
