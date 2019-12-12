import { mount, createLocalVue } from '@vue/test-utils';
import Pagination from '@/components/Pagination.vue';
import VueRouter from 'vue-router';
import router from '@/router';

const localVue = createLocalVue()
localVue.use(VueRouter)

// Инциализация компонента для тестов
function getWrapper()
{
  return mount(Pagination, {
    localVue,
    router,
    propsData: {
      total: 50,
      page: 1,
      limit: 5,
    }
  });
}

describe('Pagination.vue', () => {
  it('renders pages', () => {
    const wrapper = getWrapper();

    expect(wrapper.findAll('.page-item').length).toBe(14); // 4 - кнопки навигации, 10 - страниц
  });

  // Выбор 3й страницы
  it('select 3d page', () => {
    const wrapper = getWrapper();

    wrapper.findAll('.dynamic').at(2).find('a').trigger('click');
    expect(wrapper.vm.$route.query.page).toBe(3);
  });
});
