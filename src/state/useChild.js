import { useState } from "react";
import { postCheck } from "../api/apis";

const useChild = (id, checkedIn, checkins) => {
  const [checked, setChecked] = useState(checkedIn);
  const [checkedInTime, setCheckedInTime] = useState(checkins.length > 0 ? checkins[0].checkinTime : "");
  const [checkedOutTime, setCheckedOutTime] = useState(checkins.length > 0 ? checkins[0].checkoutTime : "");
  const [error, setError] = useState(null);

  const checkInChild = async () => {
    setError(null);
    try {
      const response = await postCheck(id, "checkins");
      setChecked(true);
      setCheckedInTime(response.checkinTime);
    } catch (error) {
      setError(error.message);
    }
  };

  const checkOutChild = async () => {
    setError(null);
    try {
      const response = await postCheck(id, "checkout");
      setChecked(false);
      setCheckedOutTime(response.checkoutTime);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    checked,
    checkedInTime,
    checkedOutTime,
    error,
    checkInChild,
    checkOutChild
  }
}

export default useChild;