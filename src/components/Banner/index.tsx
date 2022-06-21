import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSize } from 'components/Ribbon'
import { ReactNode } from 'react'
import * as S from './styles'

export type BannerProps = {
    img: string
    title: string
    subtitle: string
    buttonLink: string
    buttonLabel: string
    ribbon?: ReactNode
    ribbonSize?: RibbonSize
    ribbonColor?: RibbonColors
}

const Banner = ({
    img,
    title,
    subtitle,
    buttonLink,
    buttonLabel,
    ribbon,
    ribbonSize,
    ribbonColor
}: BannerProps) => (
    <S.Wrapper>
        {!!ribbon && (
            <Ribbon size={ribbonSize} color={ribbonColor}>
                {ribbon}
            </Ribbon>
        )}
        <S.Image src={img} role="img" aria-label={title} />
        <S.Caption>
            <S.Title>{title}</S.Title>
            <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
            <Button as="a" href={buttonLink} size="large">
                {buttonLabel}
            </Button>
        </S.Caption>
    </S.Wrapper>
)

export default Banner
