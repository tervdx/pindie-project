import { getNormalizedGamesDataByCategory } from "../api/api-utils";
import { endpoints } from "../api/config";
import { CardsList } from "../components/CardsList/CardsList";

export default async function Runners() {
  
  const runners = await getNormalizedGamesDataByCategory(endpoints.games, 'runner')

  return (
    <main className={'main-inner'}>
      <CardsList id="runners" title="Ранеры" data={runners}/>
    </main>
  )
}