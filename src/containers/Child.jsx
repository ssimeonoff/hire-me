import ChildUI from "../components/ChildUI"
import useChild from "../state/use-child";

const Child = ({id, name, checkedIn, checkins}) => {
  const {
    checked,
    checkedInTime,
    checkedOutTime,
    error,
    checkInChild,
    checkOutChild
  } = useChild(id, checkedIn, checkins)
  
  return <ChildUI 
    name={name} 
    checked={checked} 
    checkedInTime={checkedInTime} 
    checkedOutTime={checkedOutTime} 
    onCheckIn={() => checkOutChild()} 
    onCheckOut={() => checkInChild()}
    error={error}
  />
} 

export default Child;
