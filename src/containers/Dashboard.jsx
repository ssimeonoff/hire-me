import { useEffect } from "react";
import DashboardUI from "../components/DashboardUI";
import useDashboard from "../hooks/useDashboard";

const Dashboard = () => {
  const groupId = "86413ecf-01a1-44da-ba73-1aeda212a196";
  const institutionId = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";

  const { data, error, fetchChildren } = useDashboard();

  useEffect(() => {
    fetchChildren(groupId, institutionId);
  }, []);

  return <DashboardUI data={data} error={error} />;
};

export default Dashboard;
