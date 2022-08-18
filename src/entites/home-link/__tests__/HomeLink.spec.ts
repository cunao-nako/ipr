import { describe, it, expect } from 'vitest';
import { flushPromises, mount } from '@vue/test-utils';

import router from '@/app/router';
import HomeLink from '@/entites/home-link';

await router.push('/forbidden');

describe('HomeLink', () => {
  const wrapper = mount(HomeLink, { global: { plugins: [router] } });

  it('render expected ui ', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('link to home page', async () => {
    const routerLink = wrapper.find('.home-link');

    await routerLink.trigger('click');
    await flushPromises();

    const currentPath = router.currentRoute.value.path;

    expect(currentPath).toBe('/');
  });
});
