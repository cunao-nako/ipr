import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import InputWrapper from '@/entites/input-wrapper';

describe('InputWrapper', () => {
  const modelValue = 'modelValue';
  const placeholder = 'placeholder';

  const wrapper = mount(InputWrapper, { props: { modelValue, placeholder } });

  it('render expected ui', () => {
    expect(wrapper).toMatchSnapshot();
  });

  const input = wrapper.find('input').element;

  it('render with props', () => {
    expect(input.placeholder).toBe(placeholder);
    expect(input.value).toBe(modelValue);
  });
});
