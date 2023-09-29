import axios from 'axios';

export const fetchAdmin = async (setUser) => {
  try {
    const response = await axios.get('/adminget');
    setUser(response.data);
  } catch (error) {
    console.log(error);
  }
};
