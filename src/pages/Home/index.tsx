import * as S from './styles'
import Woman from "../../assets/Mulher_Flor.jpg"

export function Home() {
  return (
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
  )
}
