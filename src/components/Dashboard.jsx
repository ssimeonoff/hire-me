import { useEffect, useState } from 'react';
import styled from "styled-components";

import { getChildren } from '../api/apis';
import Child from './Child';

const PAGE_SIZE = 5;

const Dashboard = () => {
  const groupId = "86413ecf-01a1-44da-ba73-1aeda212a196";
  const institutionId = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // pagination
  const [page, setPage] = useState(0);
  const pageLabel = data && `${PAGE_SIZE * page + 1}-${PAGE_SIZE * (page + 1) > data.length ? data.length : PAGE_SIZE * (page + 1)}/${data.length}`;
  const isPreviousDisabled = page === 0;
  const isNextDisabled = data && PAGE_SIZE * (page + 1) > data.length;

  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await getChildren(groupId, institutionId);
        setData(response.children);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchChildren();
  }, []);

  return (
    <div>
      <div>DASHBOARD</div>
      <ContainerPagination>
        <Pagination type="button" disabled={isPreviousDisabled} onClick={() => !isPreviousDisabled && setPage(prevState => prevState - 1)}>PREV</Pagination>
        <PageLabel>{pageLabel}</PageLabel>
        <Pagination type="button" disabled={isNextDisabled} onClick={() => !isNextDisabled && setPage(prevState => prevState + 1)}>NEXT</Pagination>
      </ContainerPagination>
      <ContainerChildren>
        {data && data.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1)).map((child) => {
          return (
            <Child 
              key= {child.childId} 
              id={child.childId} 
              name={child.name.fullName} 
              checkedIn={child.checkedIn} 
              checkins={child.checkins}/>
            );
        })}
        {error && "Data could not be fetched."}
      </ContainerChildren>
    </div>
  )
}

export default Dashboard;

const ContainerPagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
const ContainerChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PageLabel = styled.div`
  min-width: 70px;
`

const Pagination = styled.button`
  margin: 5px;
  padding: 5px;
`

