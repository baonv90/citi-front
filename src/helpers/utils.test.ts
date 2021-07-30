import { getFilteredData, getLastSeenTime, getDeviceStatus, getConnectionStatus } from './utils';

describe('helpers > utils', () => {
  const data = [
    {
      serial_number: '1',
      status: 'connected',
      connection_type: 'wifi',
      last_seen_at: ''
    },
    {
      serial_number: '2',
      status: 'disconnected',
      connection_type: 'wifi',
      last_seen_at: ''
    },
    {
      serial_number: '3',
      status: 'connected',
      connection_type: 'cellular',
      last_seen_at: ''
    },
    {
      serial_number: '4',
      status: 'disconnected',
      connection_type: 'cellular',
      last_seen_at: ''
    }
  ];

  it('getFilteredData', () => {
    const active = getFilteredData(data, 'connected');
    const inActive = getFilteredData(data, 'disconnected');
    expect(active).toHaveLength(2);
    expect(inActive).toHaveLength(2);
  });

  it('getLastSeenTime', () => {
    const twoHoursAgo = (new Date(new Date().getTime() - 2 * 60 * 60 * 1000).toISOString());
    const lastSeen = getLastSeenTime(twoHoursAgo);
    expect(lastSeen).toEqual('2 hour(s) ago');
  });

  it('getDeviceStatus', () => {
    const status = getDeviceStatus(data);
    expect(status).toEqual('50% of all the devices are connected, 50% are disconnected');
  });

  it('getConnectionStatus', () => {
    const status = getConnectionStatus(data);
    expect(status).toEqual('Of all the disconnected devices, wifi: 50% cellular: 50% ');
  });
});
