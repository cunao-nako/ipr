import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

import Note from '@/entites/note';

describe('Note', () => {
  const noteData = { title: 'testTitle', text: 'TestText' };
  const wrapper = mount(Note, { props: { noteData } });

  it('render expected ui', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('title span render with prop', () => {
    const titleSpan = wrapper.find('.note-title');

    expect(titleSpan.text()).toBe(noteData.title);
  });

  it('text span render with prop', () => {
    const textSpan = wrapper.find('.note-text');

    expect(textSpan.text()).toBe(noteData.text);
  });
});
