import React, { useState, ChangeEvent } from "react";

import "./login.styles.scss";
import Input from "../../shared/components/input/input";
import Button from "../../shared/components/button/button";

interface IUsuario {
  name: string;
  email: string;
  password: string;
  adventurerName: string;
}

const Login = () => {
  const [formData, setFormData] = useState<IUsuario>({} as IUsuario);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit() {}

  return (
    <div className="home-container">
      <form onSubmit={handleSubmit}>
        <h2>Crie uma nova conta</h2>
        <Input
          htmlFor="name"
          type="text"
          name="name"
          id="name"
          onChange={handleInputChange}
          label="Name"
        />
        <Input
          htmlFor="email"
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          label="E-mail"
        />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          label="Senha"
        />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          label="Confirmar Senha"
        />
        <Input
          htmlFor="adventurerName"
          type="password"
          name="adventurerName"
          id="adventurerName"
          onChange={handleInputChange}
          label="Nome de aventureiro"
        />
        {/* <div className="form-footer"> */}
            <Button>Criar conta</Button>

            {/* <Button>Entrar com conta do Google</Button> */}
        {/* </div> */}
      </form>

      <form onSubmit={handleSubmit}>
        <h2>Entre em uma conta já existente.</h2>
        <Input
          htmlFor="email"
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          label="E-mail"
        />
        <Input
          htmlFor="password"
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          label="Senha"
        />

        <Button>Entrar</Button>
      </form>

      <div className="lateral-image"></div>
    </div>
  );
};

export default Login;
