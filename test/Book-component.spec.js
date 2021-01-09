import { mount } from '@vue/test-utils';
import BookComponent from '@/components/Book-component.vue';

describe('Test basic functions in Book component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(BookComponent, {
      title: 'Atomic Design',
      description: 'Book description',
      urlImg: 'img/bookCover.png',
      author: 'Brad Forst',
      language: 'English'
    });
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
  test('Tes with defaul values', () => {
    const wrapper = mount(BookComponent, {
      title: 'Atomic Design',
      description: 'Book description',
      urlImg: 'img/bookCover.png',
      author: 'Brad Forst',
      language: 'English'
    });
    expect(wrapper.text()).toContain('Atomic Design');
  });
});
