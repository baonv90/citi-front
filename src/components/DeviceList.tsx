import React from 'react';
import styled from 'styled-components';
import ListHeader from '../molecules/ListHeader';
import DeviceItem from '../molecules/DeviceItem';
import DeviceSkeleton from '../molecules/DeviceSkeleton';
import { ResultProps } from '../interface';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  overflow: hidden;
`;

const ListContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100vh - 12rem);
`;

interface DeviceListProps {
  title: string,
  isLoading: boolean,
  data: Array<ResultProps>
}

// display skeleton while loading data
const skeletonItems = Array.from(Array(10)).map((_, key) => <DeviceSkeleton key={`skeleton-${key}`} />);

// Component to display the list of devices based on the selected tab
const DeviceList: React.FC<DeviceListProps> = ({ data, isLoading }) => (
  <Container>
    <ListHeader />
    <ListContainer>
      {
        isLoading 
        ? skeletonItems
        : data.map((item, index) => 
          <DeviceItem key={index} {...item}/>
        )
      }
    </ListContainer>
  </Container>
);

export default React.memo(DeviceList);
