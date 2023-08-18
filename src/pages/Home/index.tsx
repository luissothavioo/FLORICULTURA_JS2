import * as S from './styles'
import Woman from "../../assets/Mulher_Flor.jpg"
import Fundo from "../../assets/FUNDO.png"

export function Home() {
  return (
    <section style={{
      backgroundImage: `url(${Fundo})`,
      backgroundSize: 'cover',
    }}>

    <S.Section>
        <div>
          <h2> ESTAÇÃO <br /> FLORI- <br /> CULTURA </h2>
        </div>

        <a href="./List">
          <picture>
            <img src={Woman} alt="MULHER COM FLOR" />
          </picture>
        </a>
    </S.Section>
    </section>
  )
}
