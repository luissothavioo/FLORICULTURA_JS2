import * as S from "./styles";
export interface ICard {
  nome: string
  Image: string
}
export const Card = ({ nome, Image }: ICard) => {
  return (
    <S.Aside>
      <article>
        <h5> {nome} </h5>
        <img src={Image} alt="" />
      </article>
    </S.Aside>
  );
};
