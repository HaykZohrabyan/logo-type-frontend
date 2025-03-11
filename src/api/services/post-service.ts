import instance from '../instance';
import { IPost } from '../../types/types';

export default class PostService {
  public static async getAllPosts(): Promise<IPost[]> {
    const response = await instance.get<IPost[]>('data.json');

    return response.data;
  }
}
