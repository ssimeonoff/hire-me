import { useState } from "react";
import { postCheckIn, postCheckOut } from "../api/apis";

const useChild = (id, checkedIn, checkins, pickupTime) => {
  const [checked, setChecked] = useState(checkedIn);
  const [pickup, setPickup] = useState(pickupTime);
  const [error, setError] = useState(null);
  const [checkedInTime, setCheckedInTime] = useState(
    checkins.length > 0 ? checkins[0].checkinTime : ""
  );
  const [checkedOutTime, setCheckedOutTime] = useState(
    checkins.length > 0 ? checkins[0].checkoutTime : ""
  );

  const checkInChild = async (pickupTime) => {
    setError(null);
    try {
      const response = await postCheckIn(id, pickupTime);
      setChecked(true);
      setCheckedInTime(response.checkinTime);
      setPickup(response.pickupTime);
    } catch (error) {
      setError(error.message);
    }
  };

  const checkOutChild = async () => {
    setError(null);
    try {
      const response = await postCheckOut(id);
      setChecked(false);
      setCheckedOutTime(response[0].checkoutTime);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    checked,
    checkedInTime,
    checkedOutTime,
    pickup,
    error,
    checkInChild,
    checkOutChild,
  };
};

export default useChild;
