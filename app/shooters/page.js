import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function Shooters() {
  
  const shooters = await getNormalizedGamesDataByCategory(endpoints.games, 'shooter')

  return (
    <main className={'main-inner'}>
      <CardsList id="shooters" title="Шутеры" data={shooters}/>
    </main>
  )
}