
import { IResponseUser, IUser } from "../../../interfaces/user.interface";
import api from "../../api";

class UserData {
  register(data: IUser) {
    return api.post<IResponseUser>('cadastrar', data)
  }
  login(data: IUser) {
    return api.post<IResponseUser>('entrar', data)
  }
}

export default new UserData()