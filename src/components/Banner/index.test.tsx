import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper/renderWithTheme'

import Banner from '.'

const props = {
    img: 'https://avatars.githubusercontent.com/u/72817686?v=4',
    title: 'any title',
    subtitle: '<strong>any subtitle<strong>',
    buttonLabel: 'any label',
    buttonLink: 'any ref'
}

describe('<Banner />', () => {
    it('should render the heading', () => {
        const { container } = renderWithTheme(<Banner {...props} />)

        expect(
            screen.getByRole('heading', { name: /any title/i })
        ).toBeInTheDocument()
        expect(
            screen.getByRole('heading', { name: /any subtitle/i })
        ).toBeInTheDocument()
        expect(screen.getByRole('img', { name: 'any title' })).toHaveAttribute(
            'src',
            'https://avatars.githubusercontent.com/u/72817686?v=4'
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('should render a Ribbon', () => {
        renderWithTheme(
            <Banner
                {...props}
                ribbon="My Ribbon"
                ribbonSize="small"
                ribbonColor="secondary"
            />
        )

        const ribbon = screen.getByText(/my ribbon/i)

        expect(ribbon).toBeInTheDocument()
        expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
        expect(ribbon).toHaveStyle({
            height: '2.6rem',
            fontSize: '1.2rem'
        })
    })
})
