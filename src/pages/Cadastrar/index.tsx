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
    <S.Section>
      <h1>Cadastre-se</h1>
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <div>
          <BsFillPersonFill />
          <input type="text" name="name" id="nome" placeholder="Nome"
            onChange={(e) => handleChange({ name: e.target.value })}
            value={formData?.name}
          />
        </div>
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
          Já possui conta? <Link to="/login">Faça o login</Link>
          <button type="submit">Salvar</button>
        </p>
      </form>
    </S.Section>
  );
};

/*import * as S from './styles'
import Fundo from "../../assets/FUNDO.png"

export function Cadastrar() {
    return (
        <section style={{
            height:'83vh',
            backgroundImage: `url(${Fundo})`,
            backgroundSize: 'cover',
          }}>
      
        <S.Section>
            <form>
                <fieldset>
                    <legend> CADASTRAR </legend>

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

                    <br />
                    <label>
                        NOME:
                        <br />
                        <input type="text" name="nome" placeholder= "seu nome" />
                    </label>               
                    <label> 
                        SEXO:
                        <br />
                        <select name="sexo" id="">
                            <option value=""></option>
                            <option value="1">masculino</option>
                            <option value="2">feminino</option>
                            <option value="3">não-binário</option>
                            <option value="4">outro</option>
                        </select>
                    </label>
                    <label>
                        ESTADO/CIDADE:
                        <br />
                        <select name="estado" id="">
                            <option value=""></option>
                            <option value="1">AC</option>
                            <option value="2">AL</option>
                            <option value="3">AP</option>
                            <option value="4">AM</option>
                            <option value="5">BA</option>
                            <option value="6">CE</option>
                            <option value="27">DF</option>
                            <option value="7">ES</option>
                            <option value="8">GO</option>
                            <option value="9">MA</option>
                            <option value="10">MT</option>
                            <option value="11">MS</option>
                            <option value="12">MG</option>
                            <option value="13">PA</option>
                            <option value="14">PB</option>
                            <option value="15">PR</option>
                            <option value="16">PE</option>
                            <option value="17">PI</option>
                            <option value="18">RJ</option>
                            <option value="19">RN</option>
                            <option value="20">RS</option>
                            <option value="21">RO</option>
                            <option value="22">RR</option>
                            <option value="23">SC</option>
                            <option value="24">SP</option>
                            <option value="25">SE</option>
                            <option value="26">TO</option>
                        </select>
                        <br />
                        <input type="text" name="cidade" placeholder="São Paulo" />
                    </label>

                    <label className='bot'>
                        <input className='botao' type="reset" value="LIMPAR" />
                        <input className='botao' type="submit" value="ENVIAR" />
                    </label>

                    <a href="Entrar">Já possui cadastro? Login</a>
                </fieldset>
            </form>
        </S.Section>
        </section>
    )
}*/
