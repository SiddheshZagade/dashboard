// client/src/scenes/dashboard/index.jsx

import React, { useState } from "react";
import { useGetUserQuery } from "../../state/api";


const Dashboard = () => {
  const [userId, setUserId] = useState("613bfcaeb7b07c450a28d45b");
  const { data, isLoading, isError } = useGetUserQuery(userId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div>
      user={data?.data} 
    </div>
  );
};

export default Dashboard;
