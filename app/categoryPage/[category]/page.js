'use client'

import { CardsList } from "@/app/components/CardsList/CardsList";
import { endpoints } from "@/app/api/config";
import { useGetDataByCategory } from "@/app/api/api-hooks";
import { Preloader } from "@/app/components/Preloader/Preloader";
import { GameNotFound } from "@/app/components/GameNotFound/GameNotFound";
import { useEffect, useState } from "react";
import { titles } from "@/app/data/data";

export default function CategoryPage(props) {

  const gameData = useGetDataByCategory(endpoints.games, props.params.category)
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true)

  useEffect(() => {
    if (gameData) {
      setIsPreloaderVisible(false)
    }
  },[gameData])
  
  return (
    <main className="main-inner">
      {isPreloaderVisible ? (
        <Preloader/>
      ) : (
        gameData.length > 0 ? (
          <CardsList id={props.params.category} title={titles[props.params.category]} data={gameData}/>
        ) : (
          <GameNotFound/>
        )
      )}
    </main>
  )
}
