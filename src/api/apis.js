import axios from 'axios';

const API_URL = 'https://app.famly.co/api';

const getChildren = async (groupId, institutionId) => {
  const response = await axios.get(`${API_URL}/daycare/tablet/group`, {
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
  const response = await axios.post(`${API_URL}/v2/children/${childId}/checkins?accessToken=${process.env.REACT_APP_ACCESS_TOKEN}`);
  return response.data;
};

const postCheckOut = async (childId) => {
  await axios.post(`${API_URL}/v2/children/${childId}/checkout?accessToken=${process.env.REACT_APP_ACCESS_TOKEN}`);
};

export { getChildren, postCheckIn, postCheckOut };