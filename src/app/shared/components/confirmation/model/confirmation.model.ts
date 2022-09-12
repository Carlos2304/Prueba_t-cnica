export class Confirmation {
  title: string = '';
  dualOptions: boolean = false;
  message: string = '';

  constructor(title: string, dualOptions: boolean = false, message: string) {
    this.title = title;
    this.dualOptions = dualOptions;
    this.message = message;
  }
}
