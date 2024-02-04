import styled from "styled-components";
import { useState } from 'react';

import Child from "../containers/Child";
import Pagination from "./Pagination";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DashboardUI = ({data, error}) => {
  const PAGE_SIZE = 5;
  const [page, setPage] = useState(0);

  return (
    <>
      <div>Dashboard</div>
      {data && 
        <Container>
          <Pagination size={PAGE_SIZE} page={page} setPage={setPage} count={data.length}/>
          {data.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1)).map((child) => {
          return (
            <Child 
              key= {child.childId} 
              id={child.childId} 
              name={child.name.fullName} 
              checkedIn={child.checkedIn} 
              checkins={child.checkins}
              pickupTime={child.pickupTime}
              />
            );
        })}
        </Container>}
      {error && error}
    </>
  )
}

export default DashboardUI;