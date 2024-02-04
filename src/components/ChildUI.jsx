import styled from "styled-components";
import TimeSelector from "./TimeSelector";
import { useState } from "react";

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
const convertDateString = (dateString) => {
  return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
}

const convertTimeStringToLocalTime = (time) => {
  // Create a Date object with the current date and the input time in the local timezone
  const currentDateLocal = new Date();
  const [hoursLocal, minutesLocal] = time.split(":").map(Number);
  currentDateLocal.setHours(hoursLocal, minutesLocal, 0, 0);

  // Convert to a localized time string based on UTC
  return currentDateLocal.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
    }
  )
};

const ChildUI = ({name, checked, checkedInTime, checkedOutTime, pickup, onCheckIn, onCheckOut, error}) => {
  const [selectedTime, setSelectedTime] = useState("");

  const setStatus = () => {
    if (checked) return `checked in at ${convertDateString(checkedInTime)}`;
    if (checkedOutTime) return `checked out at ${convertDateString(checkedOutTime)}`;
    return "not checked in";
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onCheckIn(convertTimeStringToLocalTime(selectedTime));
  };

  return (
    <Container $checked={checked}>
      <div>{name}</div>
      <div>{setStatus()}</div>
      <form onSubmit={handleFormSubmit}>
        {checked ? 
        `pickup at ${convertDateString(pickup)}` : 
        <TimeSelector required selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
        }
        <ButtonsContainer>
          {checked ? 
          <Button type="button" onClick={() => onCheckOut()}>CHECK OUT</Button>
          : <Button type="submit">CHECK IN</Button>
          }
        </ButtonsContainer>
      </form>  
      {error && error}
    </Container>
  )
}

export default ChildUI;

