import { Button, Table, Input } from 'antd';
import { useEffect } from 'react';
import { TABLE_COLUMNS } from '../../constants';
import { ListingFilters } from '../../styles';

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
        columns={TABLE_COLUMNS} 
        dataSource={parsedData} 
      />
    </div>
  );
};

export default List;