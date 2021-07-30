import React, { useState, ReactElement } from 'react';
import styled from 'styled-components';

import TabTitle from './TabTitle';

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
`;

interface TabsProps {
  children: ReactElement[]
};

// Tabs component to display tab and its content based on selected index
const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const onSelectTab = (index: number) => {
    setSelectedTab(index);
  };

  const renderTitles = (items: ReactElement[]) => 
    items.map((item, index: number) => (
      <TabTitle
        key={`title-${index}`}
        onSelectTab={onSelectTab}
        isSelected={selectedTab === index}
        index={index}
        title={item.props.title}
      />
    )
  );

  return (
    <TabsContainer>
      <Header>
        {renderTitles(children)}
      </Header>
      {children[selectedTab]}
    </TabsContainer>
  );
};

export default Tabs;
