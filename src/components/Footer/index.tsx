import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as S from './styles'

const Footer = () => (
    <S.Wrapper>
        <Logo color='black' />
        <S.Content>
            <S.Column>
                <Heading
                    color='black'
                    size='small'
                    lineBottom
                    lineColor='secondary'
                >
                    Contact
                </Heading>
                <a href="mailto:sac@wongames.com">sac@wongames.com</a>
            </S.Column>

            <S.Column>
                <Heading
                    color='black'
                    size='small'
                    lineBottom
                    lineColor='secondary'
                >
                    Follow us
                </Heading>
                <nav aria-labelledby='social media'>
                    <a
                        href="https://instagram.com/won-games"
                        target="_blank"
                        rel="noopenner, noreferrer"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://instagram.com/won-games"
                        target="_blank"
                        rel="noopenner, noreferrer"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://youtube.com/won-games"
                        target="_blank"
                        rel="noopenner, noreferrer"
                    >
                        Youtube
                    </a>
                    <a
                        href="https://Facebook.com/won-games"
                        target="_blank"
                        rel="noopenner, noreferrer"
                    >
                        Facebook
                    </a>
                </nav>
                <a href="mailto:sac@wongames.com">sac@wongames.con</a>
            </S.Column>
            <S.Column>
                <Heading
                    color='black'
                    size='small'
                    lineBottom
                    lineColor='secondary'
                >
                    Links
                </Heading>
                <nav aria-labelledby='footer resources'>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    <Link href="/games">
                        <a>Store</a>
                    </Link>
                    <Link href="/search" >
                        <a>Buscar</a>
                    </Link>
                </nav>
            </S.Column>
            <S.Column>
                <Heading
                    color='black'
                    size='small'
                    lineBottom
                    lineColor='secondary'
                >
                    Location
                </Heading>
                <span>Lorem ipsu dolor sit.</span>
                <span>Lorem ipsu.</span>
                <span>Lorem ipsu dolor.</span>
            </S.Column>
        </S.Content>
        <S.Copyright>Won games 2020 &copy; All rights reserved. </S.Copyright>
    </S.Wrapper>
)

export default Footer
