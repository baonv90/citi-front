import React from 'react';
import styled from 'styled-components';

import { SkeletonLoader } from '../atoms/SkeletonLoader';

const Wrapper = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid var(--grey-color);
`;

const Skeleton = styled(SkeletonLoader)`
  display: flex;
  line-height: 1.25rem;
  width: 100%;
  height: 1rem;
`;

// Skeleton to display while loading the content
const DeviceSkeleton : React.FC<any> = () => (
  <Wrapper>
    <Skeleton />
  </Wrapper>
);

export default DeviceSkeleton;
