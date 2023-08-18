import * as S from "./styles"
import Logo from "../../assets/LOGO_FLOR.png"

export function Header() {
  return (
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
          <li>
            <a href="/cadastrar">CADASTRAR</a>
          </li>
          <div>
            <h2>|</h2>
          </div>
          <li>
            <a href="/entrar">ENTRAR</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}