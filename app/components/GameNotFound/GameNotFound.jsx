'use client'

import Styles from './GameNotFound.module.css';
import {NotFoundImage} from './not-found.jsx';
import { useRouter } from 'next/navigation';

export const GameNotFound = () => {

  const mainRout = useRouter()

  return (
    <div className={Styles["not-found"]}>
      <NotFoundImage />
      <div>
        <h2 className={Styles["not-found__text"]}>Бро, такой игры не существует :(</h2>
        <h3 className={Styles['mainpage-path']} onClick={() => mainRout.push('/')}>На главную</h3>
      </div>        
    </div>

  )
};