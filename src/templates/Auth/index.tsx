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
            <S.BannerContent>
                <Logo />
                <div>
                    <Heading>All your favorites games in one place</Heading>
                    <S.SubTitle>
                        <strong>WON</strong> is the best and most complete gaming platform
                    </S.SubTitle>
                </div>
                <S.Footer>WON GAMES 2022 © Todos os Direitos Reservados</S.Footer>
            </S.BannerContent>
        </S.BannerBlock>
        <S.Content>
            <S.ContentWrapper>
                <Logo size="large" color="black" />
                <Heading color="black" lineColor="secondary" lineLeft>
                    {title}
                </Heading>
                {children}
            </S.ContentWrapper>
        </S.Content>
    </S.Wrapper>
)

export default Auth
