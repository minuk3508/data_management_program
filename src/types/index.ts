import { Header } from '@tanstack/react-table';

export interface DataType {
  thingName: string;
  shadow: {
    batLvl: number;
    connAt: string;
    disconnAt: string;
    disconnReason: number;
    connCardNum: number;
    connGW: string;
    rawSentCnt: number;
    remainData: number;
    rssi: number;
    fwVer: string;
    hwVer: number;
    [key: string]: any;
  };
}

export interface CustomHeader {
  header: Header<DataType, unknown>;
}

export interface CustomSorter {
  width: number;
  isSortable: boolean;
}
