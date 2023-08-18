import * as S from './styles'
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
}
