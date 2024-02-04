import ChildUI from "../components/ChildUI";
import useChild from "../hooks/useChild";

const Child = ({ id, name, checkedIn, checkins, pickupTime }) => {
  const {
    checked,
    checkedInTime,
    checkedOutTime,
    pickup,
    error,
    checkInChild,
    checkOutChild,
  } = useChild(id, checkedIn, checkins, pickupTime);

  return (
    <ChildUI
      name={name}
      checked={checked}
      checkedInTime={checkedInTime}
      checkedOutTime={checkedOutTime}
      pickup={pickup}
      onCheckIn={(pickup) => checkInChild(pickup)}
      onCheckOut={() => checkOutChild()}
      error={error}
    />
  );
};

export default Child;
