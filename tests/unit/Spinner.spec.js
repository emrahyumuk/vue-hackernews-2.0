import { mount } from '@vue/test-utils';
import Spinner from '@/components/Spinner.vue';

describe('Spinner.vue', () => {
  const wrapper = mount(Spinner);

  it('has svg', () => {
    expect(wrapper.contains('svg')).toBe(true);
  });
});
