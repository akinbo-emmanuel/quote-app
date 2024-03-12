import axios from 'axios';



export const fetchQuotes = async (page: number) => {
  try {
    const response = await axios.get(`https://api.quotable.io/quotes?page=${page}`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return [];
  }
};