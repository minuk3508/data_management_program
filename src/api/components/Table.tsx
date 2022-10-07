import styled from 'styled-components';
import DataType from 'types';

interface Props {
  results: DataType[];
}

const Table = ({ results }: Props) => {
  return (
    <Wapper>
      <TableWapper>
        <thead>
          <Column>
            {ROW_DATA.map((row) => (
              <Head key={row}>{row}</Head>
            ))}
          </Column>
        </thead>
        {results.map((item, index) => {
          const {
            thingName,
            shadow: {
              batLvl,
              connAt,
              disconnAt,
              disconnReason,
              connCardNum,
              connGW,
              rawSentCnt,
              remainData,
              rssi,
              fwVer,
              hwVer,
            },
          } = item;
          return (
            <tbody key={thingName}>
              <tr>
                <Sell style={{ fontWeight: '900' }}>{index + 1}</Sell>
                <Sell>{thingName}</Sell>
                <Sell>{batLvl}</Sell>
                <Sell>{connAt}</Sell>
                <Sell>{disconnAt}</Sell>
                <Sell>{disconnReason}</Sell>
                <Sell>{connCardNum}</Sell>
                <Sell>{connGW}</Sell>
                <Sell>{rawSentCnt}</Sell>
                <Sell>{remainData}</Sell>
                <Sell>{rssi}</Sell>
                <Sell>{fwVer}</Sell>
                <Sell>{hwVer}</Sell>
              </tr>
            </tbody>
          );
        })}
      </TableWapper>
    </Wapper>
  );
};

export default Table;

const Wapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const TableWapper = styled.table`
  border-collapse: separate;
  border: 1px solid black;
  border-spacing: 0 0px;
`;

const Head = styled.th`
  padding: 10px 0px;
  border-bottom: 3px double black;
  font-weight: 900;
`;

const Column = styled.tr`
  text-align: center;
`;

const Sell = styled.td`
  padding: 15px 30px;
  font-size: 15px;
  text-align: center;
  :hover {
    background-color: gray;
  }
`;

const ROW_DATA = [
  '#',
  'Sensor ID',
  'Bat.(%)',
  'Connected at',
  'Disconnected at',
  'Reason',
  'Card No.',
  'Gateway',
  'Raw sent',
  'Remain',
  'RSSI',
  'F/W ver.',
  'H/W ver.',
];
