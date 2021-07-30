import React from 'react';
import styled from 'styled-components';

import { ResultProps } from '../interface';
import InsightItem from '../molecules/InsightItem';
import { getDeviceStatus, getConnectionStatus } from '../helpers/utils';

const Wrapper = styled.div`
  display: flex;
`;

interface InsightsProps {
  data: Array<ResultProps>,
  isLoading: boolean
};

// Insights definition
const INSIGHTS = [
  { title: 'Device Status', func: getDeviceStatus },
  { title: 'Connection', func: getConnectionStatus }
];

// Component to display specific insights about the devices
const Insights: React.FC<InsightsProps> = ({ data, isLoading }) => {
  return (
    <Wrapper>
      {
        INSIGHTS.map(({ title, func }, index) => 
          <InsightItem key={`insight-${index}`} isLoading={isLoading} title={title} content={func(data)}/> 
        )
      }
    </Wrapper>
  );
};

export default React.memo(Insights);
