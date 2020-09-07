import { shallowMount } from '@vue/test-utils'
import CubeGrid from './CubeGrid.vue'

describe('CubeGrid.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(CubeGrid).element).toMatchSnapshot()
  })
})
