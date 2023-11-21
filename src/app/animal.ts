export class Animal {
  name: string = '';
  canFly: boolean = false;
  constructor(name: string, cf: boolean) {
    this.name = name;
    this.canFly = cf;
  }
}
