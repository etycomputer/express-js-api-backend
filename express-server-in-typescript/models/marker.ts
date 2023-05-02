import { Position } from './position';

export class Marker {
    markerId: number;
    subnet: number;
    node: number;
    installPosition: Position;
    activated: boolean;
    activationTime: Date;
  
    constructor(markerId: number,        subnet: number,        node: number,        installPosition: Position,        activated: boolean,        activationTime: Date) {
      this.markerId = markerId;
      this.subnet = subnet;
      this.node = node;
      this.installPosition = installPosition;
      this.activated = activated;
      this.activationTime = activationTime;
    }
  }