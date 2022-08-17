import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import InputWrapper from '@/entites/input-wrapper';

describe('InputWrapper', () => {
  const modelValue = 'modelValue';
  const placeholder = 'placeholder';

  const input = mount(InputWrapper, { props: { modelValue, placeholder } }).find('input').element;

  it('render with props', () => {
    expect(input.placeholder).toBe(placeholder);
    expect(input.value).toBe(modelValue);
  });
});
