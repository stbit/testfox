<template lang="pug">

ul.pagination
  li.page-item
    router-link.page-link(:to='{ query: { page: 1 }}') Первая

  li.page-item(:class='{ disabled: page === 1 }')
    router-link.page-link(:to='{ query: { page: prevPage }}') Предыдущая

  li.page-item.dynamic(v-for='p in pages' :class='{ active: p == page }')
    router-link.page-link(:to='{ query: { page: p }}') {{ p }}

  li.page-item(:class='{ disabled: page === pages }')
    router-link.page-link(:to='{ query: { page: nextPage }}') Следующая

  li.page-item
    router-link.page-link(:to='{ query: { page: pages }}') Последняя

</template>

<script lang="ts">
import {
  Component, Prop, Vue,
} from 'vue-property-decorator';

@Component
export default class Pagination extends Vue {
  @Prop() private total!: number;

  @Prop() private page!: number;

  @Prop() private limit!: number;

  get pages(): number {
    if (!this.total) return 0;

    return Math.trunc(this.total / this.limit);
  }

  get prevPage(): number {
    return this.page === 1 ? this.page : this.page - 1;
  }

  get nextPage(): number {
    return this.page === this.pages ? this.page : this.page + 1;
  }
}

</script>
