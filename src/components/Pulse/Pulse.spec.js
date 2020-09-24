import { shallowMount } from '@vue/test-utils'
import Pulse from './Pulse.vue'

describe('Pulse.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(Pulse).element).toMatchSnapshot()
  })
})
