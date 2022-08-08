import React from 'react';
import * as S from './styled'

const Profile = () => {
  return (
    <S.Wrapper>
      <S.WrapperImage src="https://avatars.githubusercontent.com/u/78963788?v=4" alt="avatar do usuário" />
      <S.WrapperInfoUser>
        <div>
          <h1>Micael Santos</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a href="https://github.com/Micael-M" rel='noreferrer' target={'_blank'}>Micael-M</a>
          </S.WrapperUsername>
        </div>
          <S.WrapperStatusCounter>
            <div>
              <h4>Seguidores</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Favoritos</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Seguido</h4>
              <span>5</span>
            </div>
          </S.WrapperStatusCounter>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
