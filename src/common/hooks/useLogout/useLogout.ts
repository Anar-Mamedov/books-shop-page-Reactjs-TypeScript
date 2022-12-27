import { useSetRecoilState } from "recoil";
import tokenAtom from "../../store/recoil/token/atom";

export default function useLogout() {
  const setToken = useSetRecoilState(tokenAtom);

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return logout;
}
