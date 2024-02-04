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

const postCheck = async (childId, type) => {
  const response = await axios.post(`${process.env.REACT_APP_URL}/v2/children/${childId}/${type}`, {},{
    params: {
      accessToken: process.env.REACT_APP_ACCESS_TOKEN
      }
    });
  return response.data;
};

export { getChildren, postCheck };