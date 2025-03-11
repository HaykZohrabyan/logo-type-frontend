import classes from './header.module.scss';
import { Link } from 'react-router';
import { useAppContext } from '../../../context/app-context.tsx';
import { useEffect, useState } from 'react';
import { HeaderNav } from './header-nav.tsx';
import logoSvg from '../../../assets/img/logo.svg'
import burgerSvg from '../../../assets/img/burger.svg'
import searchSvg from '../../../assets/img/search.svg'

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [headerShown, setHeaderShown] = useState<boolean>(true);
  const [menuShown, setMenuShown] = useState<boolean>(false);

  const { searchQuery, setSearchQuery } = useAppContext();

  const handleScroll = () => {
    if (window.scrollY >= 200) {
      setHeaderShown(false);
    } else {
      setHeaderShown(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${classes.header} ${!headerShown && classes.header_hide}`}>
        <div className={classes.header_inner}>
          <div className={classes.header_top}>
            <div className="container">
              <div className={classes.header_top_inner}>

                <button
                  className={classes.header_menu_btn}
                  onClick={() => setMenuShown(true)}
                >
                  <img src={burgerSvg} width="25" height="16" alt="menu"/>
                </button>

                <Link to={'/'} className={classes.header_logo}>
                  <img src={logoSvg} width="181" height="21" alt="logo"/>
                </Link>

                <div className={classes.header_search}>
                  <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search..."
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`${classes.header_search_input} ${isSearchOpen && classes.header_search_input_show}`}
                  />

                  <button
                    disabled={menuShown}
                    className={classes.header_search_button}
                    onClick={() => setIsSearchOpen((prev) => !prev)}
                  >
                    <img src={searchSvg} width="16" height="16" alt="search"/>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <HeaderNav
            menuShown={menuShown}
            setMenuShown={setMenuShown}
          />
        </div>
      </header>
    </>
  );
};
