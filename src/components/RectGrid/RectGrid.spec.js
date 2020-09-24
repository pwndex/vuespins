import { shallowMount } from '@vue/test-utils'
import RectGrid from './RectGrid.vue'

describe('RectGrid.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(RectGrid).element).toMatchSnapshot()
  })
})
