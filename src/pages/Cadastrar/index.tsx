import * as S from './styles'

export function Cadastrar() {
    return (
        <S.Section>
            <form>
                <fieldset>
                    <legend> Cadastrar </legend>

                    <label>
                        Nome:<input type="text" name="nome" placeholder="Seu Nome" />
                    </label>

                    <label>
                        E-mail:
                        <input type="email" name="email" placeholder="name@email" />
                    </label>

                    <label> 
                        Sexo
                        <br />
                        <input type="radio" name="sexo" id="masc" value="Masculino" />
                        <label className='opc' for="masc"> Masculino </label>
                        <br />
                        <input type="radio" name="sexo" id="fem" value="Feminino" />
                        <label className='opc' for="fem"> Feminino </label>
                        <br />
                        <input type="radio" name="sexo" id="non" value="Nao Binario" />
                        <label className='opc' for="non"> Nao Binário </label>
                        <br />
                        <input type="radio" name="sexo" id="outro" value="Outro" />
                        <label className='opc' for="outro"> Outro </label>
                    </label>

                    <label>
                        <label > Estado/Cidade </label>
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
                        <input type="text" name="cidade" placeholder="São Paulo" />
                    </label>

                    <label>
                        <input className='botao' type="submit" value="Enviar" />
                        <input className='botao' type="reset" value="Limpar" />
                    </label>
                </fieldset>
            </form>
        </S.Section>
    )
}
