import { shallowMount } from '@vue/test-utils'
import Square from './Square.vue'

describe('Square.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(Square).element).toMatchSnapshot()
  })
})
