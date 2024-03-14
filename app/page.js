import { Banner } from './components/Banner/Banner';
import { Promo } from './components/Promo/Promo';
import { CardsList } from './components/CardsList/CardsList';
import { getGamesByCategory } from "./data/data-utils";
import { getNormalizedGamesDataByCategory } from './api/api-utils';
import { endpoints } from './api/config';

export default async function Home() {

  const popularGames = await getNormalizedGamesDataByCategory(endpoints.games, 'popular')
  const newGames = await getNormalizedGamesDataByCategory(endpoints.games,'new')

  return (
  <main className="main">
    <Banner/>
    <CardsList id='popular' title='Популярное' data={popularGames}>
    </CardsList>
    <CardsList id='new' title='Новинки' data={newGames}>
    </CardsList>
    <Promo/>
  </main>
  );
}