import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
  font-size; 16px;
  width: 100%
  margin-top: 16px;
`;

export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WrapperTabList.tabsRole = "Tablist";

export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 16px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    box-shadow: 5px 2px 10px rgba(0, 0, 0, 0.2);
    // border-top-left-radius: 16px;
    // border-top-right-radius: 16px;
    // border-bottom-left-radius: 0;
    // border-bottom-right-radius: 0;
    // border-bottom: 1px solid white;
  }
`;

WrapperTabList.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;

WrapperTabList.tabsRole = "TabPanel";
