import styled from "styled-components";

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
  return new Date(dateString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

const ChildUI = ({name, checked, checkedInTime, checkedOutTime,  onCheckIn, onCheckOut, error}) => {

  const setStatus = () => {
    if (checked) return `checked in at ${convertDateString(checkedInTime)}`;
    if (checkedOutTime) return `checked out at ${convertDateString(checkedOutTime)}`;
    return "not checked in";
  }
  
  return (
      <Container $checked={checked}>
        <div>{name}</div>
        <div>{setStatus()}</div>
        <ButtonsContainer>
          {checked ? 
          <Button type="button" onClick={onCheckIn}>CHECK OUT</Button>
          : <Button type="button" onClick={onCheckOut}>CHECK IN</Button>
          }
        </ButtonsContainer>
        {error && error}
      </Container>
    )
}

export default ChildUI;

