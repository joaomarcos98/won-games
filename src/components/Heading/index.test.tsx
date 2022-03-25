import { render, screen } from '@testing-library/react'

import Heading from '.'

describe('<Heading />', () => {
    it('should render the heading', () => {
        // eslint-disable-next-line react/no-children-prop
        const { container } = render(<Heading children={<h2>aaaa</h2>} />)

        expect(
            screen.getByRole('heading', { name: /Heading/i })
        ).toBeInTheDocument()

        expect(container.firstChild).toMatchSnapshot()
    })
})
