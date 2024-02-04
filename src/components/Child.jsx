import styled from "styled-components";

import { postCheck } from "../api/apis";

import { useState } from "react";

const Child = ({id, name, checkedIn, checkins}) => {
  const [checked, setChecked] = useState(checkedIn);
  const [checkedInTime, setCheckedInTime] = useState(checkins.length > 0 ? new Date(checkins[0].checkinTime
    ).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : "");
  const [error, setError] = useState(null);

  const checkInChild = async () => {
    setError(null);
    try {
      const response = await postCheck(id, "checkins");
      setChecked(true);
      setCheckedInTime(new Date(response.checkinTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } catch (error) {
      setError(error.message);
    }
  };

  const checkOutChild = async () => {
    setError(null);
    try {
      await postCheck(id, "checkout");
      setChecked(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const setStatus = () => {
    if (checked) return `checked in at ${checkedInTime}`;
    if (checkins.length > 0) return `last checked in at ${checkedInTime}`;
    return "not checked in";
  }

  return (
      <Container $checked={checked}>
        <div>{name}</div>
        <div>{setStatus()}</div>
        <ButtonsContainer>
          {checked ? 
          <Button type="button" onClick={() => checkOutChild()}>CHECK OUT</Button>
          : <Button type="button" onClick={() => checkInChild()}>CHECK IN</Button>
          }
        </ButtonsContainer>
        <div>{error && error}</div>
      </Container>
    )
}

export default Child;

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: ${props => (props.$checked ? "lightblue" : "#eee")};
  min-width: 200px;
  border-radius: 5px;
`

const ButtonsContainer = styled.div`
  display: flex;
  margin: 10px;
`

const Button = styled.button`
  flex: 1;
  padding: 5px;
`