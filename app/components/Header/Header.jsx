'use client'

import { useState } from 'react';
import Styles from './Header.module.css'
import Link from 'next/link';
import { Overlay } from '../Overlay/Overlay';
import { Popup } from '../Popup/Popup';
import { AuthForm } from '../AuthForm/AuthForm';
import { usePathname } from "next/navigation";
import { useStore } from '@/app/store/app-store';

export const Header = () => {

  const [popupIsOpened, setPopupIsOpened] = useState(false);

  const authContext = useStore();

  const pathname = usePathname();

  const openPopup = () => {
    setPopupIsOpened(true)
  }

  const closePopup = () => {
    setPopupIsOpened(false)
  }

  const handleLogout = () => {
    authContext.logout();
  };

  return (
    <header className={Styles['header']}>
      <Link href="/" className={`${Styles['logo']} ${pathname === '/' && Styles["logo_active"]}`}>
        <img
          className={Styles['logo__image']}
          src="/images/logo.svg"
          alt="Логотип Pindie"
        />
      </Link>
      <nav className={Styles['menu']}>
        <ul className={Styles['menu__list']}>
          <li className={Styles['menu__item']}>
            <Link href="/categoryPage/new" className={`${Styles['menu__link']} ${pathname === '/categoryPage/new' ? Styles["menu__link_active"] : "" }`}>
              Новинки
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/categoryPage/popular" className={`${Styles['menu__link']} ${pathname === '/categoryPage/popular' ? Styles["menu__link_active"] : "" }`}>
              Популярные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/categoryPage/shooter" className={`${Styles['menu__link']} ${pathname === '/categoryPage/shooter' ? Styles["menu__link_active"] : "" }`}>
              Шутеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/categoryPage/runner" className={`${Styles['menu__link']} ${pathname === '/categoryPage/runner' ? Styles["menu__link_active"] : "" }`}>
              Ранеры
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/categoryPage/pixel" className={`${Styles['menu__link']} ${pathname === '/categoryPage/pixel' ? Styles["menu__link_active"] : "" }`}>
              Пиксельные
            </Link>
          </li>
          <li className={Styles['menu__item']}>
            <Link href="/categoryPage/TDS" className={`${Styles['menu__link']} ${pathname === '/categoryPage/TDS' ? Styles["menu__link_active"] : "" }`}>
              TDS
            </Link>
          </li>
        </ul>
        <div className={Styles['auth']}>
          {authContext.isAuth ? (
            <button className={Styles['auth__button']} onClick={handleLogout}>
            Выйти
            </button>
          ) : (
            <button className={Styles['auth__button']} onClick={openPopup}>
            Войти
            </button>
          )}
        </div>
      </nav>
      <Overlay isOpened={popupIsOpened} close={closePopup}/>
      <Popup isOpened={popupIsOpened} close={closePopup}>
        <AuthForm close={closePopup} />
      </Popup>
    </header>
  )
}
