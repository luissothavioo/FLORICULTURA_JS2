import Fundo from "../../assets/FUNDO.png"
import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify";

import * as S from "./styles";
import { IErrorResponse, IUser } from "../../interfaces/user.interface";
import { AxiosError } from "axios";
import { apiUser } from "../../services/data/index";

export function Cadastrar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<IUser>({
    name: '',
    email: '',
    password: '',
  })
  async function handleChange(e: IUser) {
    setFormData((state: IUser | undefined) => ({ ...state, ...e }))
  }
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      await apiUser.register(formData);
      toast.success("Cadastro realizado com sucesso!");
      navigate('/login')
    } catch (error) {
      const err = error as AxiosError<IErrorResponse>
      let messages = err.response?.data.message
      if (err.response?.data.errors) {
        messages = err.response?.data.errors?.map((i) => i.message)
          .reduce((total, cur) => `${total} ${cur}`)
      }
      toast.error(messages)
    }
  }

  return (
    <section style={{
      height:'83vh',
      backgroundImage: `url(${Fundo})`,
      backgroundSize: 'cover',
    }}>
    
    <S.Section>
      <form method="post" onSubmit={handleSubmit}>
          <legend> CADASTRAR </legend>

          <label htmlFor="email">E-MAIL</label>
          <div>
            <MdEmail />
            <input type="email" name="email" id="email" placeholder="E-mail"
              onChange={(e) => handleChange({ email: e.target.value })}
              value={formData?.email}
            />
          </div>
          <br />

          <label htmlFor="senha">Senha</label>
          <div>
            <FaKey />
            <input type="password" name="senha" id="senha" placeholder="Senha"
              onChange={(e) => handleChange({ password: e.target.value })}
              value={formData?.password}
            />
          </div>
          <br />

          <label htmlFor="nome">Nome</label>
          <div>
            <BsFillPersonFill />
            <input type="text" name="name" id="nome" placeholder="Nome"
              onChange={(e) => handleChange({ name: e.target.value })}
              value={formData?.name}
            />
          </div>              

          <label className='bot'>
            <input className='botao' type="reset" value="LIMPAR" />
            <input className='botao' type="submit" value="ENVIAR" />
          </label>

          <p>
            Já possui conta? <Link to="/login">Faça o login</Link>
          </p>
      </form>
      
      </S.Section>
    </section>
  );
};

