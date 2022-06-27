import Heading from 'components/Heading'
import Logo from 'components/Logo'
import { ReactNode } from 'react'
import * as S from './styles'

type AuthProps = {
    title: string
    children: ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
    <S.Wrapper>
        <S.BannerBlock>
            <Logo />
            <Heading>All your favorites games in one place</Heading>
            <S.SubTitle>
                <strong>WON</strong>
                is the best and most complete gaming platform
            </S.SubTitle>
            <S.Footer>WON GAMES 2022 © Todos os Direitos Reservados</S.Footer>
        </S.BannerBlock>
        <S.Content>
            <Logo size="large" color="black" />
            <Heading color="black" lineColor="secondary" lineLeft>
                {title}
            </Heading>
            {children}
        </S.Content>
    </S.Wrapper>
)

export default Auth
