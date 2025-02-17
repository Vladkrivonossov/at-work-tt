import axios from 'axios';
import { IUser } from '../types/user';

export const fetchUsers = async (): Promise<IUser[]> => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      return response.data.slice(0, 6);
    } catch (error) {
      console.error('fetchUsers error:', error);
      throw new Error('Failed to fetch users');
    }
  };

