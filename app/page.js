'use client'

import { Banner } from './components/Banner/Banner';
import { Promo } from './components/Promo/Promo';
import { CardsList } from './components/CardsList/CardsList';
import { endpoints } from './api/config';
import { Preloader } from "./components/Preloader/Preloader"; 
import { useGetDataByCategory } from './api/api-hooks';

export default function Home() {

  const popularGames = useGetDataByCategory(endpoints.games, 'popular')
  const newGames = useGetDataByCategory(endpoints.games, 'new')

  return (
  <main className="main">
    <Banner/>
    {newGames ? (
      <CardsList id='popular' title='Популярное' data={newGames}/>
    ) : (
      <Preloader/>
    )}
    {popularGames ? (
      <CardsList id='new' title='Новинки' data={popularGames}/>
    ) : (
      <Preloader/>
    )}
    <Promo/>
  </main>
  );
}