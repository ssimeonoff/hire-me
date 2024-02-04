import { useState } from "react";
import { getChildren } from "../api/apis";

const useDashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchChildren = async (groupId, institutionId) => {
    try {
      const response = await getChildren(groupId, institutionId);
      setData(response.children);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    data,
    error,
    fetchChildren,
  };
};

export default useDashboard;
