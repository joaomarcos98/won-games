import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'

import * as S from './styles'

export type HomeTemplateProps = {
    banners: BannerProps[]
    newGames: GameCardProps[]
    mostPopularHighlight: HighlightProps
    mostPopularGames: GameCardProps[]
    upcommingGames: GameCardProps[]
    upcommingHighlight: HighlightProps
    upcommingMoreGames: GameCardProps[]
    freeGames: GameCardProps[]
    freeGameHighLight: HighlightProps
}

const Home = ({
    banners,
    newGames,
    mostPopularGames,
    mostPopularHighlight,
    freeGameHighLight,
    freeGames,
    upcommingGames,
    upcommingHighlight,
    upcommingMoreGames
}: HomeTemplateProps) => (
    <section>
        <Container>
            <Menu />
            <S.SectionBanner>
                <BannerSlider items={banners} />
            </S.SectionBanner>
        </Container>

        <S.SectionNews>
            <Container>
                <Heading lineLeft lineColor='secondary' color='black'>
                    News
                </Heading>
                <GameCardSlider items={newGames} color='white' />
            </Container>
        </S.SectionNews>

        <S.SectionMostPopular>
            <Container>
                <Heading lineLeft lineColor='secondary' >
                    Most popular
                </Heading>

                <Highlight {...mostPopularHighlight} />
                <GameCardSlider items={mostPopularGames} />
            </Container>
        </S.SectionMostPopular>

        <S.SectionUpcoming>
            <Container>
                <Heading lineLeft lineColor='secondary'>
                    Upcomming
                </Heading>

                <GameCardSlider items={upcommingGames} />
                <Highlight {...upcommingHighlight} />
                <GameCardSlider items={upcommingMoreGames} />
            </Container>
        </S.SectionUpcoming>

        <S.SectionFreeGames>
            <Container>
                <Heading lineLeft lineColor='secondary' color='white'>
                    Free games
                </Heading>

                <Highlight {...freeGameHighLight} />
                <GameCardSlider items={freeGames} />
            </Container>
        </S.SectionFreeGames>

        <S.SectionFooter>
            <Container>
                <Footer />
            </Container>
        </S.SectionFooter>
    </section>
)

export default Home
