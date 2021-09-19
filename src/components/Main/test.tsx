import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render Main', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the styles properly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ backgroundColor: '#06092b' })
  })
})
