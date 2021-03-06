import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
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
                <Link href='/'>
                    <a>
                        <Logo id="banner" size="normal" />
                    </a>
                </Link>
                <div>
                    <Heading size="huge">
                        All your favorites games <br /> in one place
                    </Heading>
                    <S.SubTitle>
                        <strong>WON</strong> is the best and most complete
                        gaming platform
                    </S.SubTitle>
                </div>
                <S.Footer>
                    WON GAMES 2022 © Todos os Direitos Reservados
                </S.Footer>
            </S.BannerContent>
        </S.BannerBlock>
        <S.Content>
            <S.ContentWrapper>
                <Link href='/'>
                    <a>
                        <Logo size="large" color="black" id="content" />
                    </a>
                </Link>
                <Heading color="black" lineColor="secondary" lineLeft>
                    {title}
                </Heading>
                {children}
            </S.ContentWrapper>
        </S.Content>
    </S.Wrapper>
)

export default Auth
