import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function List() {
  return (
    <>
      <S.Pesq>
        <label>
          <input type="text" name="email" placeholder="digite a planta" />
          <input className="botao" type="submit" value="ENVIAR" />
        </label>
      </S.Pesq>

      <S.Section>
        {dados.map(item => (
          <ComponentCard
            key={item.id}
            nome={item.nome}
            Image={item.Image}
          />
        ))}
      </S.Section>
    </>
  )
}
