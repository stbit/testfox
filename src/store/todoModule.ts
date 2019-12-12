import {
  Module, VuexModule, Mutation, Action,
} from 'vuex-module-decorators';
import axios from 'axios';
import { ToDoItem, UserItem } from '@/store/types';
import store from './store';

@Module({
  dynamic: true,
  store,
  name: 'todo',
  namespaced: true,
})
export default class UsersModule extends VuexModule {
  user!: UserItem;

  items: ToDoItem[] = [];

  @Mutation
  updateItems(payload: { user: UserItem, items: ToDoItem[] }) {
    this.user = payload.user;
    this.items = payload.items;
  }

  @Action({ commit: 'updateItems' })
  async fetchItems(userId: number) {
    const usersResponse = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
    const todoResponse = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);

    return {
      user: usersResponse.data[0] || {},
      items: todoResponse.data,
    };
  }
}
