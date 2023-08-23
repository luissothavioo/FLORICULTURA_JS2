import * as S from "./styles"

export function Hamburguer() {
    return (
        <S.Section>
                <input type="checkbox" className="hamburguer" />

                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        
                <ul>
                    <li>
                        <a href=".">PAGINA INICIAL</a>
                    </li>
                    <li>
                        <a href="./flores">LISTAR</a>
                    </li>
                    <li>
                        <a href="./cadastrar">CADASTRAR</a>
                    </li>
                    <li>
                        <a href="./entrar">ENTRAR</a>
                    </li>
                </ul>
        </S.Section>
    )
}