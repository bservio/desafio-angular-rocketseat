export interface IAuthSucessResponse {
  message: string;
  user: {
    userId: number;
    email: string;
    iat: number;
    exp: number;
  };
}
