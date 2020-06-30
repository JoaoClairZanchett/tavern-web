import React, { useState, ChangeEvent, FormEvent } from "react";

import "./login.styles.scss";
import Input from "../../shared/components/input/input";
import Button from "../../shared/components/button/button";
import api from "../../shared/services/api";

interface IUsuario {
  name: string;
  email: string;
  password: string;
  adventurerName: string;
}

const Login = () => {
  const [formData, setFormData] = useState<IUsuario>({} as IUsuario);
  const [wrongPassword, setwrongPassword] = useState<boolean>(false);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    if (name === 'confirmPassword') {
      setwrongPassword(value !== formData.password);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    
    const { name, email, adventurerName, password } = formData;

    const data = {
        name,
        email,
        adventurerName,
        password
    }

    await api.post('user', data)
  }

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
          error={wrongPassword}
          onChange={handleInputChange}
          label="Senha"
        />
        <Input
          htmlFor="confirmPassword"
          type="password"
          name="confirmPassword"
          error={wrongPassword}
          id="confirmPassword"
          onChange={handleInputChange}
          label="Confirmar Senha"
        />
        <Input
          htmlFor="adventurerName"
          type="text"
          name="adventurerName"
          id="adventurerName"
          onChange={handleInputChange}
          label="Nome de aventureiro"
        />
        <Button>Criar conta</Button>
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
