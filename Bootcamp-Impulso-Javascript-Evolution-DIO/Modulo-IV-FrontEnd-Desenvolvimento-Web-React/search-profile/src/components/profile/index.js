import React from 'react';
import useGithub from '../../hooks/github-hooks'
import * as S from './styled'

const Profile = () => {
  const { githubState } = useGithub();
  return (
    <S.Wrapper>
      <S.WrapperImage src="https://avatars.githubusercontent.com/u/78963788?v=4" alt="avatar do usuário" />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a href={githubState.user.html_url} rel='noreferrer' target="_blank">{githubState.user.login}</a>
          </S.WrapperUsername>
        </div>
          <S.WrapperStatusCounter>
            <div>
              <h4>Seguidores</h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4>Seguido</h4>
              <span>{githubState.user.following}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{githubState.user.public_gists}</span>
            </div>
            <div>
              <h4>Repositorios</h4>
              <span>{githubState.user.public_repos}</span>
            </div>

          </S.WrapperStatusCounter>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
