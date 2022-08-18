import { useContext } from 'react';
import { GithubContext } from '../provider/github-provider';

const useGithub = () => {
  const { githubState, getUser } = useContext(GithubContext);

  return { githubState, getUser };
};

export default useGithub;
