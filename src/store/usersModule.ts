import {
  Module, VuexModule, Mutation, Action, MutationAction,
} from 'vuex-module-decorators';
import axios from 'axios';
import { UserItem } from '@/store/types';
import store from './store';

@Module({
  dynamic: true,
  store,
  name: 'users',
  namespaced: true,
})
export default class UsersModule extends VuexModule {
  users: UserItem[] = [];

  total: number = 0;

  page: number = 1;

  limit: number = 5;

  @Mutation
  updateUsers(payload: { users: UserItem[], page: number, total: number }) {
    this.users = payload.users;
    this.page = payload.page;
    this.total = payload.total;
  }

  @Action({ commit: 'updateUsers' })
  async fetchUsers(page: number) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${this.limit}`);

    return {
      total: parseInt(response.headers['x-total-count'], 10),
      page,
      users: response.data,
    };
  }
}
