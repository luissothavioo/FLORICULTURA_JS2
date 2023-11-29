import Fundo from "../../assets/FUNDO.png"
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

import * as S from "./styles";
import { useAuth } from "../../hooks/authHook";
import { IErrorResponse, IUser } from "../../interfaces/user.interface";
import { AxiosError } from "axios";

export function Login() {
  const navigate = useNavigate();
  const { signIn } = useAuth()
  const [formData, setFormData] = useState<IUser>({
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const { email, password } = formData
      await signIn({
        email: String(email),
        password: String(password),
      })
      toast.success("Login realizado com sucesso!");
      navigate('/adm')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      toast.error(String(err.response?.data))
    }
  }

  return (
    <section style={{
      height: '83vh',
      backgroundImage: `url(${Fundo})`,
      backgroundSize: 'cover',
    }}>

      <S.Section>
        <form method="post" onSubmit={handleSubmit}>
          <legend>ENTRAR</legend>

          <label htmlFor="email">E-MAIL</label>
          <div>
            <MdEmail />
            <input type="email" name="email" id="email" placeholder="E-mail"
              onChange={(e) => handleChange({ email: e.target.value })}
              value={formData?.email}
            />
          </div>

          <label htmlFor="senha">SENHA</label>
          <div>
            <FaKey />
            <input type="password" name="senha" id="senha" placeholder="Senha"
              onChange={(e) => handleChange({ password: e.target.value })}
              value={formData?.password}
            />
          </div>

          <label className='bot'>
            <input className='botao' type="submit" value="ENTRAR" />
          </label>

          <p>
            Não possui conta? <a href="/cadastrar">Faça o cadastro </a>
          </p>

        </form>
      </S.Section>
    </section>
  );
}