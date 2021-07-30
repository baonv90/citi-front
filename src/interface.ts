// device info interface
export interface ResultProps {
  connection_type: string,
  last_seen_at: string,
  mac_wifi?: string,
  serial_number: string,
  sim_id?: number,
  status: string,
  url?: string,
  voltage?: number
}


export type DataInterface = {
  results: Array<ResultProps>
}