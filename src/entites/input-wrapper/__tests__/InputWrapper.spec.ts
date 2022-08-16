import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import InputWrapper from '@/entites/input-wrapper';

describe('InputWrapper', () => {
  it('render with props', () => {
    const modelValue = 'modelValue';
    const placeholder = 'placeholder';

    const wrapper = mount(InputWrapper, { props: { modelValue, placeholder } });

    const input = wrapper.find('input').element;

    expect(input.placeholder).toBe(placeholder);
    expect(input.value).toBe(modelValue);
  });
});
