import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
`;

const Circle = styled.div<{ isConnected: boolean }>`
  width: .625rem;
  height: .625rem;
  background: ${({ isConnected }) => isConnected ? `var(--active-color)` : `var(--inactive-color)`};
  border-radius: 50%;
  margin-right: .5rem;
`;

const StatusText = styled.span`
  font-size: .825rem;
  font-weight: 600;
  color: var(--title-color);
`;

interface IconStatusProps {
  status: String
};

const IconStatus: React.FC<IconStatusProps> = ({ status }) => {
  return (
    <Container>
      <Circle isConnected={status === 'connected'} />
      <StatusText>{status}</StatusText>
    </Container>
  );
};

export default IconStatus;
