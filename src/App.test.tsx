import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';
import { useFetchData } from './hooks/useFetchData';

jest.mock('./hooks/useFetchData');

describe('App', () => {
  const fakeData = {
    results: [
      { 
        status: 'connected',
        connection_type: 'wifi',
        last_seen_at: new Date().toISOString(),
        serial_number: 'Device_0'
      },
      { 
        status: 'disconnected',
        connection_type: 'celullar',
        last_seen_at: new Date().toISOString(),
        serial_number: 'Device_1'
      }
    ]
  }

  beforeEach(() => {
    useFetchData.mockReturnValue({
      loading: false,
      data: fakeData
    });
  });

  it('should match its snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should contains all the elements', () => {
    render(<App />);
    expect(screen.getByText('Device_0')).toBeInTheDocument();
    expect(screen.getByText('wifi')).toBeInTheDocument();
    expect(screen.getByText('connected')).toBeInTheDocument();
  });

  it('should handle error while loading page', () => {
    useFetchData.mockReturnValue({
      loading: false,
      hasError: true
    });
    render(<App />);
    expect(screen.getByText('Error while loading page...')).toBeInTheDocument();
  });

  it('should handle tab navigation', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Inactive'));
    expect(screen.getByText('Device_1')).toBeInTheDocument();
    expect(screen.queryByText('Device_0')).not.toBeInTheDocument();
  });
});
