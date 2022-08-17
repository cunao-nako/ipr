import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Buttons from '@/entites/buttons';

describe('Buttons', () => {
  const wrapper = mount(Buttons);

  it('render expected ui', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
