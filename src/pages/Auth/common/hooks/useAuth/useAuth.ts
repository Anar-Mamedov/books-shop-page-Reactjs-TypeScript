import * as Yup from "yup";
import { useLogin } from "../../../../../common/hooks";
import { Login } from "../../../../../common/models/auth.model";
import AuthService from "../../../../../common/services/AuthService";

export const initialValues: Login = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required field"),
  password: Yup.string().required("Required field"),
});

export default function useAuth() {
  const login = useLogin();

  const handleSubmit = async (form: Login) => {
    const response = await AuthService.login(form);

    const token = response?.token;

    if (token === "") {
      return;
    }

    login(token);
  };

  return {
    handleSubmit,
  };
}
