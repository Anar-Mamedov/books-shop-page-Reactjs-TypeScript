import { atom } from "recoil";

type Token = string | null;

const tokenAtom = atom<Token>({
  key: "auth/token",
  default: localStorage.getItem("token") || null,
  effects: [
    ({ onSet }) => {
      onSet((token) => {
        console.log(token);
      });
    },
  ],
});

export default tokenAtom;
