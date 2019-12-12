<template lang="pug">

.page-todo
  .h2 {{ user.name }}
  router-link.btn(tag='button' :to='{ name: "users", query: { page: lastPage }}') К списку

  table.table
    thead
      tr
        th completed
        th title

    tbody
      tr(v-for='item in items')
        td.completed
          span.glyphicon.glyphicon-ok(v-if='item.completed')
          span.glyphicon.glyphicon-remove(v-else)

        td {{ item.title }}

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import { Route } from 'vue-router';
import { ToDoItem, UserItem } from '@/store/types';
import store from '@/store';

const usersModule = namespace('users');
const todoModule = namespace('todo');

@Component
export default class UsersPage extends Vue {
  @usersModule.State('page')
  lastPage!: number

  @todoModule.State
  user!: UserItem[]

  @todoModule.State
  items!: ToDoItem[]

  async beforeRouteEnter(to: Route, from: Route, next: any) {
    await store.dispatch('todo/fetchItems', to.params.userId);
    next();
  }
}
</script>

<style scoped lang="sass">

.glyphicon-ok
  color: green

.glyphicon-remove
  color: gray

.completed
  text-align: center

</style>
