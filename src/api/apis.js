import axios from 'axios';

const getChildren = async (groupId, institutionId) => {
  const response = await axios.get(`${process.env.REACT_APP_URL}/daycare/tablet/group`, {
      params: {
        accessToken: process.env.REACT_APP_ACCESS_TOKEN,
        groupId,
        institutionId
        }
      }
    );
  return response.data;
};

const postCheckIn = async (childId, pickupTime) => {
  const response = await axios.post(`${process.env.REACT_APP_URL}/v2/children/${childId}/checkins`, {},{
    params: {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      pickupTime
      }
    });
  return response.data;
};

const postCheckOut = async (childId, pickupTime) => {
  const response = await axios.post(`${process.env.REACT_APP_URL}/v2/children/${childId}/checkout`, {},{
    params: {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN,
      }
    });
  return response.data;
};

export { getChildren, postCheckIn, postCheckOut };