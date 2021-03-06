import React from 'react';

import { FiChevronRight } from 'react-icons/fi';

import * as S from './styled';

interface PropsListItem {
  image: string;
  name: string;
  price: string;
}

const ListItem: React.FC<PropsListItem> = ({ image, name, price }) => (
  <S.ListItem>
    <S.ItemImage src={image} alt="Produto" />
    <S.ItemDetail>
      <S.ItemName>{name}</S.ItemName>
      <S.ItemPriceContainer>
        <S.ItemPriceSymbol>R$</S.ItemPriceSymbol>
        <S.ItemPrice>{price}</S.ItemPrice>
      </S.ItemPriceContainer>
    </S.ItemDetail>
    <FiChevronRight size={20} />
  </S.ListItem>
);

export default ListItem;
