import React from 'react';

import * as S from './styled';

const ListItem: React.FC = () => (
  <S.ListItem>
    <S.ItemImage
      src="https://brsonyb2c.vteximg.com.br/arquivos/ids/221335-510-365/W665F.jpg?v=637087524559170000"
      alt="Produto"
    />
    <S.ItemDetail>
      <S.ItemName>TV Sony</S.ItemName>
      <S.ItemPriceContainer>
        <S.ItemPriceSymbol>R$</S.ItemPriceSymbol>
        <S.ItemPrice>4990,00</S.ItemPrice>
      </S.ItemPriceContainer>
    </S.ItemDetail>
  </S.ListItem>
);

export default ListItem;