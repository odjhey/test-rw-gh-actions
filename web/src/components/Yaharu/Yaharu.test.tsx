import { render } from '@redwoodjs/testing/web'

import Yaharu from './Yaharu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Yaharu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Yaharu />)
    }).not.toThrow()
  })
})
