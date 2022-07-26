import { Button, Table, Tag, Input } from 'antd';
import { useEffect } from 'react';
import { ListingFilters } from '../../styles';

const columns = [
  {
    title: 'First Name',
    dataIndex: 'first_name',
    key: 'first_name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Last Name',
    dataIndex: 'last_name',
    key: 'last_name',
  },
  {
    title: 'Position',
    key: 'position',
    dataIndex: 'position',
    render: (value) => value || 'N/A'

  },
  {
    title: 'Team',
    key: 'city',
    dataIndex: 'city'
  },
  {
    title: 'Conference',
    key: 'conference',
    dataIndex: 'conference',
    render: (value) => <Tag color={value === 'West' ? '#41A63D' : '#F83F3F'}>{value}</Tag>
  },
  {
    title: 'Division',
    key: 'division',
    dataIndex: 'division'
  }
];

const List = ({ setValues, values }) => {
  
  const sortPlayers = (data) => {
    return data.sort((a, b) => {
      if (a[values.columnToBeFiltered] < b[values.columnToBeFiltered]) { return -1; }
      if (a[values.columnToBeFiltered] > b[values.columnToBeFiltered]) { return 1; }
      return 0;
    })
  }

  const filterPlayers = (data) => {
    return data.filter((player) => player[values.columnToBeFiltered]?.trim()?.toLowerCase().includes(values.filterKeyword?.trim()?.toLowerCase()))
  }

  const parsePlayersData = () => {
    let playersList = [];
    playersList = values.playersList.map(({ team, last_name, first_name, position }, index) => {
      const { division, city, conference } = team || {};
      return {
        key: index,
        division,
        conference,
        last_name, 
        first_name, 
        city, 
        position
      };
    });
  
    if (values.isSortingApplied) {
      playersList = sortPlayers(playersList);
    }
    if (values.filterKeyword.trim()) {
      playersList = filterPlayers(playersList);
    }
    return playersList;
  };

  const getPlayersData = async () => {
    const data = await fetch(`${process.env.REACT_APP_PUBLIC_API_BASEURL}/players`);
    const { data: playersList = [] } = await data.json() || {};
    setValues({ ...values, playersList });
  };

  useEffect(() => {
    getPlayersData()
  }, [])

  const parsedData = parsePlayersData();
  return (
    <div>
      <ListingFilters>
        <Button onClick={() => setValues({ ...values, isSortingApplied: !values.isSortingApplied })} type='primary'>
          {values.isSortingApplied ? 'Remove Sorting' : 'Sort by Last Name' }
        </Button>
        <Input
          style={{ width: 400 }}
          onChange={({ target }) => setValues({ ...values, filterKeyword: target.value })} 
          value={values.filterKeyword} 
          placeholder='Search by Last Name' 
        />
      </ListingFilters>
      <Table 
        bordered 
        pagination={false} 
        columns={columns} 
        dataSource={parsedData} 
      />
    </div>
  );
};

export default List;