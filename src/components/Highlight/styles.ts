import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, "backgroundImage">

export const Wrapper = styled.section<WrapperProps>`
    ${({ backgroundImage }) => css`
        position: relative;
        height: 23rem;
        background-image: url(${backgroundImage});
        background-position: center center;
        background-size: cover;

        display: grid;
        grid-template-areas: 'floatImage content';
        grid-template-columns: '1.3fr 2fr';


        ${media.greaterThan("medium")`
            height: 32rem;
        `}

        &::after {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);

        }
    `}
`
export const FloatImage = styled.img`
    ${({ theme }) => css`
        z-index: ${theme.layers.base};
        max-height: 23rem;
        max-width: 100%;

        align-self: end;

        grid-area: floatImage;
    `}

    ${media.greaterThan("medium")`
            max-height: 32rem;
        `}
`

export const Content = styled.div`
    ${({ theme }) => css`
        z-index: ${theme.layers.base};
        text-align: right;
        padding: ${theme.spacings.xsmall};

        grid-area: content;

        ${media.greaterThan("medium")`
            align-self: end;
            padding: ${theme.spacings.large};
        `}
    `}
`

export const Title = styled.h2`
    ${({ theme }) => css`
        font-size:${theme.font.sizes.large};
        font-weight: ${theme.font.bold};
        color: ${theme.colors.white};

        ${media.greaterThan("medium")`
            font-weight: ${theme.font.sizes.xxlarge};
        `}
    `}
`

export const Subtitle = styled.h3`
    ${({ theme }) => css`
        font-size:${theme.font.sizes.small};
        font-weight: ${theme.font.light};
        color: ${theme.colors.white};
        margin-bottom: ${theme.spacings.small};

        ${media.greaterThan("medium")`
            font-weight: ${theme.font.sizes.large};
        `}
    `}
`

