import React from 'react'
import { render } from '@testing-library/react'

import { Home } from 'src/components/Home'

describe('Home', () => {
  it('should render', () => {
    const { container } = render(<Home />)
    expect(container).toBeDefined()
  })
})
