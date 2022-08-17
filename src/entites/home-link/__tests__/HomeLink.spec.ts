import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import router from '@/app/router';
import HomeLink from '@/entites/home-link';

describe('HomeLink', () => {
  const wrapper = mount(HomeLink, { global: { plugins: [router] } });

  it('render expected ui ', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
