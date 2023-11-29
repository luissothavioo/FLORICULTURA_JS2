import * as S from "./styles"
import Logo from "../../assets/LOGO_FLOR.png"
import { ComponentHamburguer } from "../index"
import { Link, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

export function Header() {
  const { user, signOut } = useContext(AuthContext)
  const navigate = useNavigate();
  async function logout() {
    await signOut()
    navigate('/login')
  }
  return (
    <S.ComponentHamburguer>
      <S.Header>
        <picture>
          <img src={Logo} alt="Logo" />
        </picture>
        <S.NavBar>
          <ul>
            <li>
              <a href="/">PÁGINA INICIAL</a>
            </li>
            <li>
              <a href="/flores">LISTAR</a>
            </li>
          </ul>
          {
          user ? (
            <ul>
              <li>
                <Link to="/adm/message">Mensagem</Link>
              </li>
              <li>
                <button onClick={logout}>{user.name} <GrLogout /></button>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/cadastrar">CADASTRAR</Link>
              </li>
              <div>
                <h2>|</h2>
              </div>
              <li>
                <Link to="/login">LOGIN</Link>
              </li>
            </ul>
          )
        }
        </S.NavBar>
      </S.Header>
      <aside>
        <ComponentHamburguer />
      </aside>
    </S.ComponentHamburguer>
  )
}