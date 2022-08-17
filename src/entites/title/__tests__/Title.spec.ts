import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Title from '@/entites/title';

describe('Title', () => {
  const value = 'Test prop';
  const wrapper = mount(Title, { props: { value } });

  it('render expected ui', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render with prop', () => {
    expect(wrapper.text()).toMatch(value);
  });
});
