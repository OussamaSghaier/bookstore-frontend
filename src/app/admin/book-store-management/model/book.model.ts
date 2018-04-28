export class Book {
  public _id: string;
  public title: string;
  public genre: string;
  public author: string;
  public price: number;
  public image_url: string;
  public description: string;

  constructor(id?: string, name?: string, genre?: string , price?: number, imagePath?: string, description?: string) {
    this._id = id;
    this.title = name;
    this.price = price;
    this.image_url = imagePath;
    this.description = description;
    this.genre = genre
  }
}


