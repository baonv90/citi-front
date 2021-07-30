import React from 'react';
import styled from 'styled-components';

import Tabs from './layouts/Tabs';
import Insights from './components/Insights';
import DeviceList from './components/DeviceList';

import { getFilteredData } from './helpers/utils';
import { useFetchData } from './hooks/useFetchData';
import './App.css';
import { ResultProps } from './interface';

const URL = 'http://localhost:8010/devices';

const Container = styled.div`
  display: flex;
  padding: 1.5rem 5rem;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  color: var(--title-color);
`;

// tabs definition
const TABS = [
  { title: 'All Devices' },
  { title: 'Active', filter: 'connected' },
  { title: 'Inactive', filter: 'disconnected' }
];

function App () {
  const { data, loading, hasError } = useFetchData(URL);

  if (hasError) {
    return <div>Error while loading page...</div>;
  }

  let results: Array<ResultProps> = [];
  if (data) {
    results = data.results;
  }

  return (
    <Container>
      <Title>Insights</Title>
      <Insights isLoading={!data && loading} data={results}/>
      <Title>Devices</Title>
      <Tabs>
        {TABS.map(({ title, filter }, index) =>
          <DeviceList
            key={`tab-${index}`}
            title={title}
            data={getFilteredData(results, filter)}
            isLoading={!data && loading}
          />
        )}
      </Tabs>
    </Container>
  );
};

export default App;
