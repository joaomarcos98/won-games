import styled, { css } from 'styled-components'
import media from 'styled-media-query'


type MenuFullProps = {
    isOpen: boolean
}

export const Wrapper = styled.menu`
    ${({ theme }) => css`
        display: flex;
        align-items: center;
        padding: ${theme.spacings.small} 0;
        position: relative;
    `}
`

export const IconWrapper = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        width: 2.4rem;
        height: 2.4rem;
        cursor: pointer;
    `}
`
export const LogoWrapper = styled.div`
    ${media.lessThan("medium")`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    `}
`

export const MenuGroup = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-grow: 1;
        justify-content: flex-end;
        gap: ${theme.spacings.xsmall};
    `}
`

export const MenuNav = styled.div``

export const MenuLink = styled.a``

export const MenuFull = styled.nav<MenuFullProps>`
    ${({ isOpen, theme }) => css`
        background-color: ${theme.colors.white};
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;

        overflow: hidden;
        opacity: ${isOpen ? 1 : 0};
        pointer-events: ${isOpen ? "all" : "none"};

        > svg {
            position: absolute;
            top: 0;
            right: 0;
            margin: ${theme.spacings.xsmall};
            width: 2.4rem;
            height: 2.4rem;

            cursor: pointer;
        }
    `}
`
