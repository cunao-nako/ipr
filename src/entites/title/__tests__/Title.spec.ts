import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Title from '@/entites/title';

describe('Title', () => {
  it('render with prop', () => {
    const value = 'Test prop';
    const wrapper = mount(Title, { props: { value } });

    expect(wrapper.text()).toMatch(value);
  });
});
