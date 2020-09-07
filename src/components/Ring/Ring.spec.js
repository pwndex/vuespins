import { shallowMount } from '@vue/test-utils'
import Ring from './Ring.vue'

describe('Ring.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(Ring).element).toMatchSnapshot()
  })
})
