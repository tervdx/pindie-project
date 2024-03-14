import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function TDS() {
  
  const tds = await getNormalizedGamesDataByCategory(endpoints.games, 'TDS')

  return (
    <main className={'main-inner'}>
      <CardsList id="tds" title="TDS" data={tds}/>
    </main>
  )
}