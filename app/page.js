'use client'

import { Banner } from './components/Banner/Banner';
import { Promo } from './components/Promo/Promo';
import { endpoints } from './api/config';
import { Preloader } from "./components/Preloader/Preloader"; 
import { useGetDataByCategory } from './api/api-hooks';
import { CardsListSection } from './components/CardsListSection/CardListSection';

export default function Home() {

  const popularGames = useGetDataByCategory(endpoints.games, 'popular')
  const newGames = useGetDataByCategory(endpoints.games, 'new')

  return (
  <main className="main">
    <Banner/>
    {newGames ? (
      <CardsListSection id='popular' title='Популярное' data={newGames} type='slider'/>
    ) : (
      <Preloader/>
    )}
    {popularGames ? (
      <CardsListSection id='new' title='Новинки' data={popularGames} type='slider'/>
    ) : (
      <Preloader/>
    )}
    <Promo/>
  </main>
  );
}