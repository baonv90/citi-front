import React from 'react';
import styled from 'styled-components';

import { SkeletonLoader } from '../atoms/SkeletonLoader';

const Wrapper = styled.div`
  display: flex;
  min-height: 5rem;
  width: 30%;
  min-width: 250px;
  margin-right: 1.5rem;
  padding: .5rem 1rem;
  flex-direction: column;
  background: var(--bg-color);
  box-shadow: 2px 2px 5px var(--light-color);
`;

const Title = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
  margin-bottom: .5rem;
  line-height: 1.5rem;
`;

const Content = styled.span`
  font-weight: 400;
  font-size: .875rem;
  line-height: 1.25rem;
`;

const ContentSkeleton = styled(SkeletonLoader)`
  width: 90%;
  line-height: 1.25rem;
  height: .75rem;
  margin-bottom: .5rem;
`;

interface InsightItemProps {
  title: string,
  content: string,
  isLoading: boolean
}

const skeletonItems = Array.from(Array(2)).map((_, key) => <ContentSkeleton key={`skeleton-${key}`} />);

// Component to display information about current devices
export const InsightItem: React.FC<InsightItemProps> = ({ title, content, isLoading }) => (
  <Wrapper>
    { 
      <>
        <Title>{title}</Title>
        { 
          isLoading ? skeletonItems : <Content>{content}</Content>
        }
      </> 
    }
  </Wrapper>
);

export default React.memo(InsightItem);
