import React from 'react';
import * as S from  './styled';

const Header = () => {
  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder='Digite o username a ser pesquisado'/>
        <button type="submit">
          <span>Buscar</span>
        </button> 
      </S.Wrapper>
    </header>
  );
};

export default Header;
