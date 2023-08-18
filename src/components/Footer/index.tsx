import * as S from "./styles"
import Face from "../../assets/FACEBOOK.png"
import Insta from "../../assets/INSTAGRAM.png"
import Whatsapp from "../../assets/WHATSAPP.png"
import Logo from "../../assets/LOGO_FLOR.png"

export function Footer() {
  return (
    <S.Footer>
      <section>
        <a href="https://facebook.com" target="_blank">
          <img src={Face} alt="Facebook" />
        </a>
        <a href="https://instagram.com/luissothavioo?igshid=YmMyMTA2M2Y" target="_blank">
          <img src={Insta} alt="Instagram" />
        </a>
        <a href="https://chat.whatapp.com/JE7LzdWQoMaA9CXKX7RBjH" target="_blank">
          <img src={Whatsapp} alt="Whatsapp" />
        </a>
      </section>
      
      <aside>
        <a href="/" target="_blank">
          <img class="logo" src={Logo} alt="Logo" />
        </a>
      </aside>
    </S.Footer>
  )
}