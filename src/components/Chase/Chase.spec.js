import { shallowMount } from '@vue/test-utils'
import Chase from './Chase.vue'

describe('Chase.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(Chase).element).toMatchSnapshot()
  })
})
