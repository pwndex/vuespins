import { shallowMount } from '@vue/test-utils'
import Spinner from './Spinner.vue'

describe('Spinner.vue', () => {
  it('renders correctly', () => {
    expect(shallowMount(Spinner).element).toMatchSnapshot()
  })
})
