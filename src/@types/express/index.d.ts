declare global {
  namespace Express {
    interface Request {
      validatedBody: {
        name: string;
        email: string;
        password: string;
        isAdm: boolean;
      },
      user: {
        idUser: string;
        isAdm: boolean;
      },
      updatedBody:{
        name: string;
        email:string;
        password:string;
      },
      addressBody:{
        district: string;
        zipCode: string;
        number: string;
        city: string;
        state: string;
      }
    }
  }
}

export {};
