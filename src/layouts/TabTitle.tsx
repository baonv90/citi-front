import React from 'react';
import styled from 'styled-components';


const Container = styled.div<{ selected: boolean }>`
  border-radius: .5rem;
  font-size: .825rem;
  padding: 0.25rem .5rem;
  margin-right: .75rem;
  background: ${({ selected }) => selected ? 'var(--primary-color)' : 'var(--grey-color)'};
  color: ${({ selected }) => selected ? 'var(--bg-color)' : 'var(--text-color)'};
  cursor: pointer;
`;


interface TitleProps {
  title: String,
  isSelected: boolean,
  onSelectTab: (index: number) => void,
  index: number
};


const TabTitle: React.FC<TitleProps> = ({ title, isSelected, onSelectTab, index }) => {
  const onItemClick = () => onSelectTab(index)

  return (
    <Container
      onClick={onItemClick}
      selected={isSelected}
    >
      {title}
    </Container>
  );
};

export default TabTitle;
