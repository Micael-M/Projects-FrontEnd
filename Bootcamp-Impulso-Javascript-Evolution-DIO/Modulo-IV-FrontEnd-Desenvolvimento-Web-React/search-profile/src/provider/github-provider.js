import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    loading: false,
    user: {
      login: undefined,
      name: undefined,
      html_url: undefined,
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

  const getUser = (username) => {
    api.get(`users/${username}`).then(
      ({
        login,
        name,
        html_url,
        blog,
        company,
        location,
        followers,
        following,
        public_gists,
        public_repos,
      }) => {
        setGithubState((prevState) => ({
          ...prevState,
          user: {
            login: login,
            name: name,
            html_url: html_url,
            blog: blog,
            company: company,
            location: location,
            followers: followers,
            following: following,
            public_gists: public_gists,
            public_repos: public_repos,
          },
        }));
      });
  };

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), []),
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
};

export default GithubProvider;
