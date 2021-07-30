import React from 'react';
import styled from 'styled-components';
import { Info, Container } from './DeviceItem';

const Header = styled(Container)`
  border-bottom: 1px solid var(--border-color);
`;

const HearderInfo = styled(Info)`
  font-weight: 600;
`;

const ListHeader: React.FC<any> = () => {
    return (
      <Header>
        <HearderInfo>Serial Number</HearderInfo>
        <HearderInfo>Status</HearderInfo>
        <HearderInfo>Connection</HearderInfo>
        <HearderInfo>Last update</HearderInfo>
      </Header>
    );
};

export default ListHeader;