<template lang="pug">

.page-users
  .h1 Пользователи

  table.table
    thead
      tr
        th name
        th email
        th phone

    tbody
      tr(v-for='user in users')
        td
          router-link(:to='{ name: "todo", params: { userId: user.id }}') {{ user.name }}

        td {{ user.email }}
        td {{ user.phone }}

  pagination.pagination(:total='total' :page='page' :limit='limit')

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Action, namespace } from 'vuex-class';
import { Route } from 'vue-router';
import Pagination from '@/components/Pagination.vue';
import { UserItem } from '@/store/types';
import store from '@/store';

const usersModule = namespace('users');

@Component({
  components: {
    pagination: Pagination,
  },
})
export default class UsersPage extends Vue {
  @usersModule.State
  users!: UserItem[]

  @usersModule.State
  total!: number

  @usersModule.State
  page!: number

  @usersModule.State
  limit!: number

  @usersModule.Action
  fetchUsers!: (page: number) => Promise<any>

  async beforeRouteEnter(to: Route, from: Route, next: any) {
    await store.dispatch('users/fetchUsers', Number(to.query.page) || 1);
    next();
  }

  async beforeRouteUpdate(to: Route, from: Route, next: any) {
    await this.fetchUsers(Number(to.query.page) || 1);
    next();
  }
}
</script>

<style scoped lang="sass">

.page-users
  display: flex
  flex-direction: column
  align-items: center

</style>
