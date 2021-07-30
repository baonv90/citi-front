import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ResultProps } from '../interface';

import IconStatus from '../atoms/IconStatus';
import { getLastSeenTime } from '../helpers/utils';

const Wrapper = styled.div<{ expand: boolean}>`
  height: ${({ expand }) => expand ? '7.5rem' : '2.5rem'};
  transition: all 250ms ease;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
  font-size: .825rem;
  line-height: 1.25rem;
  align-items: center;
  height: 2.5rem;
  border-bottom: 1px solid var(--grey-color);
  cursor: pointer;
`;

const DetailWrapper = styled.div<{ expand: boolean}>`
  height: 5rem;
  background: var(--background-color);
  font-size: .825rem;
  line-height: 1.25rem;
  border-bottom: 1px solid var(--grey-color);
  display: ${({ expand }) => expand ? 'flex' : 'none'};
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  padding: .15rem .25rem;
  color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
  border-radius: 3px;
`;


export const Info = styled.div`
  width: 25%;
  font-weight: 400;
`;


const DeviceItem : React.FC<ResultProps> = ((props) => {
  const { serial_number, connection_type, mac_wifi, status, sim_id, voltage, last_seen_at, url } = props;
  const [expand, setExpand] = useState<boolean>(false);

  const onItemClick = useCallback(() => {
    setExpand(expand => !expand);
  }, [setExpand]);

  return (<Wrapper expand={expand}>
    <Container onClick={onItemClick}>
      <Info>{serial_number}</Info>
      <IconStatus status={status} />
      <Info>{connection_type}</Info>
      <Info>{getLastSeenTime(last_seen_at)}</Info>
    </Container>
    {expand && 
      <DetailWrapper expand={expand}>
        <DetailContainer>
          <Link href={url} target='_blank'>Device URL</Link>
          <span>Sim Id: {sim_id}</span>
        </DetailContainer>
        <DetailContainer>
          <span>Mac Address: {mac_wifi}</span>
          <span>Voltage: {voltage}</span>
        </DetailContainer>
      </DetailWrapper>
    }
  </Wrapper>);
});

export default DeviceItem;
