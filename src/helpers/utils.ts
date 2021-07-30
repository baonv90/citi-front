import { ResultProps } from '../interface';

// list of orders for each tab
export const getFilteredData = (data: Array<ResultProps>, filter: string | undefined) : Array<ResultProps> => {
  if (!filter) {
    return data;
  }

  const filterList = data.filter(({ status }) => {
    return status === filter;
  });
  return filterList;    
};

// get the last seen time from now
export const getLastSeenTime = (lastseen: string) : string => {
  const lastSeenDate = new Date(lastseen);
  const fromNow = new Date().getTime() - lastSeenDate.getTime(); 
  return (fromNow /(1000 * 60 * 60)).toFixed(0) + ' hour(s) ago';
};

// get connected and disconnected devices information
export const getDeviceStatus = (data: Array<ResultProps>) : string => {
  const connected = (data.filter(device => device.status === 'connected').length / data.length) * 100;
  return `${connected.toFixed(0)}% of all the devices are connected, ${(100 - connected).toFixed(0)}% are disconnected`;
};

interface Counted {
  [key: string]: number;
} 

// get connection type status
export const getConnectionStatus = (data: Array<ResultProps>) : string => {
  const disconect_devices = (data.filter(device => device.status === 'disconnected'));
  
  const countedType:Counted = disconect_devices.reduce(function (list: Counted, device: ResultProps) {
    list[device.connection_type] = list[device.connection_type] ? list[device.connection_type] + 1 : 1; 
    return list;
  }, {});

  let results = 'Of all the disconnected devices, '
  for (const [key, value] of Object.entries(countedType)) {
    const percent = (value/disconect_devices.length * 100).toFixed(0);
    results += (`${key}: ${percent}% `);
  }
  return results;
};
