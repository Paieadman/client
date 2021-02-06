export class Sale {
  private id: number;
  private image: string;


  constructor(id: number, image: string) {
    this.id = id;
    this.image = image;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  getImage(): string {
    return this.image;
  }

  setImage(image: string) {
    this.image = image;
  }
}
