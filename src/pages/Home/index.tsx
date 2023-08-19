import * as S from './styles'
import Woman from "../../assets/Mulher_Flor.jpg"
import Fundo from "../../assets/FUNDO.png"
import Logo from "../../assets/LOGO_FLOR.png"

export function Home() {
  return (
    <section style={{
      height: '83vh',
      backgroundImage: `url(${Fundo})`,
      backgroundSize: 'cover',
    }}>

      <S.Section>
        <div>
          <h2> ESTAÇÃO <br /> FLORI- <br /> CULTURA </h2>
        </div>
        <a href="flores">
          <picture>
            <img src={Woman} alt="MULHER COM FLOR" />
          </picture>
        </a>
      </S.Section>
      <S.Board>
        <div>
          <img src={Logo} alt="LOGO" />
          <h2> FLORES <br /> ADUBOS <br /> ORNAMENTOS </h2>
        </div>
      </S.Board>

    </section>
  )
}
