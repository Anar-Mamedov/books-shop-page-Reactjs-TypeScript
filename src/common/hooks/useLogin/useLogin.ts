import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import tokenAtom from "../../store/recoil/token/atom";

export default function useLogin() {
  const setToken = useSetRecoilState(tokenAtom);
  const navigate = useNavigate();

  const login = (token: string) => {
    setToken(token);
    navigate("/dashboard/books");
    localStorage.setItem("token", token);
  };

  return login;
}
