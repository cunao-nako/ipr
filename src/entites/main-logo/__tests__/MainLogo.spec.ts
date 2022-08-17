import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import MainLogo from '@/entites/main-logo';

describe('MainLogo', () => {
  it('render expected ui', () => {
    const wrapper = mount(MainLogo);

    expect(wrapper).toMatchSnapshot();
  });
});
