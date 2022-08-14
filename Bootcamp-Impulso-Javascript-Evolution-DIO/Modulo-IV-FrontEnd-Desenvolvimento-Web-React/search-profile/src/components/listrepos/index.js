import React from 'react';
import RepositoryItem from '../repository-item';
// import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import * as S from './styled'

const ListRepos = () => {
  return (
    <S.WrapperTabs
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositórios</S.WrapperTab>
        <S.WrapperTab>Favoritos</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="Mock-Instagram-Login"
          linkToRepo="https://github.com/Micael-M/BootCamp-Philips-Fullstack-Developer"
          fullName="Micael-M/Mock-Instagram-Login" />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name="Projects-FrontEnd"
          linkToRepo="https://github.com/Micael-M/Projects-FrontEnd"
          fullName="Micael-M/Projects-FrontEnd" />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>Painel de Favoritos</S.WrapperTabPanel>
    </S.WrapperTabs>
  );
};

export default ListRepos;
