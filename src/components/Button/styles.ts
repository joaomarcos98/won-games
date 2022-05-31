import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from "."

type WrapperProps = {
    withIcon: boolean;
} & Omit<ButtonProps, "children">

const wrapperModifiers = {
    small: (theme: DefaultTheme) => css`
        height: 3rem;
        font-size: ${theme.font.sizes.xsmall};
    `,
    medium: (theme: DefaultTheme) => css`
        height: 4rem;
        font-size: ${theme.font.sizes.small};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
        `,
    large: (theme: DefaultTheme) => css`
        height: 5rem;
        font-size: ${theme.font.sizes.medium};
        padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
    `,
    fullWidth: () => css`
        width: 100%;
    `,
    withIcon: (theme: DefaultTheme) => css`
        display: inline-flex;
        align-items: center;
        justify-content: center;

        svg{
            width: 1.5rem;

            & + span {
                margin-left: ${theme.spacings.xxsmall};
            }
        }
    `
}

export const Wrapper = styled.button<WrapperProps>`
    ${({ theme, size, fullWidth, withIcon }) => css`
        background: linear-gradient(180deg, #FF5F5F 0%, #F062C0 50% );
        color: ${theme.colors.white};
        border: none;
        border-radius: ${theme.border.radius};
        padding: ${theme.spacings.xxsmall};

        cursor: pointer;

        ${!!size && wrapperModifiers[size](theme)}

        ${!!fullWidth && wrapperModifiers.fullWidth()}

        ${!!withIcon && wrapperModifiers.withIcon(theme)}

    `}

`
