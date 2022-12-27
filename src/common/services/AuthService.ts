import { Login } from "../models/auth.model";
import HTTPService from "./HTTPService";

interface IService {
  login: (params: Login) => Promise<{ token: string }>;
}

class AuthService implements IService {
  login(params: Login) {
    return HTTPService.post<{ token: string }, Login>(
      "/api/v1/user/login",
      params,
    );
  }
}

export default new AuthService();
