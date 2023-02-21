import React, { useState } from "react";
import Styles from "./login-styles.scss";
import {
  Input,
  LoginHeader,
  Footer,
  FormStatus,
} from "@/presentation/components";
import Context from "@/presentation/contexts/form/form-context";

const Login: React.FC = () => {
  const [state, setState] = useState({
    isLoading: false,
  });

  const [errorState] = useState({
    email: "Campo obrigatório",
    password: "Campo obrigatório",
    main: "",
  });

  return (
    <div className={Styles.login}>
      <LoginHeader />
      <Context.Provider value={{ state, setState, errorState }}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" placeholder="Digite seu e-mail" name="email" />
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
          />
          <button
            data-testid="submit"
            disabled
            className={Styles.submit}
            type="submit"
          >
            Entrar
          </button>
          <span className={Styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
