import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    <S.Section>
      <h1>Login</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <div>
          <MdEmail />
          <input type="email" name="email" id="email" placeholder="E-mail"
            onChange={(e) => handleChange({ email: e.target.value })}
            value={formData?.email}
          />
        </div>
        <label htmlFor="senha">Senha</label>
        <div>
          <FaKey />
          <input type="password" name="senha" id="senha" placeholder="Senha"
            onChange={(e) => handleChange({ password: e.target.value })}
            value={formData?.password}
          />
        </div>
        <p>
          Não possui conta? <Link to="/cadastrar">Cadastre-se</Link>
          <button type="submit">Entrar</button>
        </p>
      </form>
    </S.Section>
  );
};

/*import * as S from './styles'
import Fundo from "../../assets/FUNDO.png"

export function Entrar() {
    return (
        <section style={{
            height: '83vh',
            backgroundImage: `url(${Fundo})`,
            backgroundSize: 'cover',
          }}>
      
        <S.Section>
            <form>
                <fieldset>
                    <legend> ENTRAR </legend>

                    <label>
                        E-MAIL:
                        <br />
                        <input type="email" name="email" placeholder="name@email" />
                    </label>

                    <label>
                        SENHA:
                        <br />
                        <input type="password" name="nome" placeholder= "sua senha" />
                    </label>

                    <label className='bot'>
                        <input className='botao' type="button" value="CADASTRAR" />
                        <input className='botao' type="submit" value="ENTRAR" />
                    </label>

                    <a href="Cadastrar">Não possui cadastro? Cadastrar</a>
                </fieldset>
            </form>
        </S.Section>
        </section>
    )
}*/
