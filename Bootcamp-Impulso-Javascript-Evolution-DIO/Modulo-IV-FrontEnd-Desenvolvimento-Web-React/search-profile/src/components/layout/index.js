import React from 'react';
import * as S from './styled'

const Layout = ({ children }) => {
  return (
    <S.WrapperLayout>
    { children }
  </S.WrapperLayout>
  );
};

export default Layout;
