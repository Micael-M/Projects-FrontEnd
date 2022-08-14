import React, { Children, createContext } from 'react';

export const GithubContext = createContext({
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({children}) => {
  const [githubState, setGithubState] = useState({
    user: {
      login: undefined,
      name: undefined,
      publicUrl: undefined,
      blog: undefined,
      company: undefined,
      location: undefined,
      followers: 0,
      following: 0,
      public_gists: 0,
      public_repos: 0,
    },
    repositories: [],
    starred: [],
  });

  const contextValue = {
    githubState,

  }
  return (
    <GithubProvider.Provider value={contextValue}>
      {children}
    </GithubProvider.Provider>
  )
};

export default GithubProvider;
