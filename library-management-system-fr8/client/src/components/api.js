import axios from 'axios';

export const fetchUserProfile = async (setUser) => {
  try {
    const response = await axios.get('/profile');
    setUser(response.data);
  } catch (error) {
    console.log(error);
  }
};
