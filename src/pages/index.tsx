import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMocks from 'components/BannerSlider/mock'
import highLightMocks from 'components/Highlight/mock'
import GamesMocks from 'components/GameCardSlider/mock'

export default function Index(props: HomeTemplateProps) {
    return <Home {...props} />
}

export function getServerSideProps() {
    return {
        props: {
            banners: bannersMocks,
            newGames: GamesMocks,
            mostPopularHighlight: highLightMocks,
            mostPopularGames: GamesMocks,
            upcommingGames: GamesMocks,
            upcommingHighlight: highLightMocks,
            upcommingMoreGames: GamesMocks,
            freeGames: GamesMocks,
            freeGameHighLight: highLightMocks
        }
    }
}
