export class Usuarios{

  static usuarioDesdeJson( obj: any ){

    return new Usuarios(
      obj['id'],
      obj['email'],
      obj['first_name'],
      obj['last_name'],
      obj['avatar'],
    );
  }

  constructor(
    public id: number,
    public email: string,
    public first_name: string,
    public last_name: string,
    public avatar: string,
  ) {}

  get fullname() {
      return `${this.first_name} ${this.last_name}`;
  }

}
