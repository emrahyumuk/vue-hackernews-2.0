import { mount } from '@vue/test-utils';
import ProgressBar from '@/components/ProgressBar.vue';

describe('snapshot - Spinner.vue', () => {
  it('renders correctly', () => {
    const wrapper = mount(ProgressBar);
    expect(wrapper.element).toMatchSnapshot();
  });
});
