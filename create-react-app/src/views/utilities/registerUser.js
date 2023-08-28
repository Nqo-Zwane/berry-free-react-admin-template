import axios from 'axios';

export const registerUser = async (registrationData) => {
  const response = await axios.post('http://localhost:5000/api/users/register', registrationData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};
