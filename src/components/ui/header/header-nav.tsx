import classes from './header.module.scss';
import { Link } from 'react-router';
import { NavItem } from './nav-item.tsx';
import { createPortal } from 'react-dom';
import logoSvg from '../../../assets/img/logo.svg';
import closeSvg from '../../../assets/img/close.svg';

interface HeaderNavProps {
  menuShown: boolean;
  setMenuShown: (menuShown: boolean) => void;
}

export const HeaderNav = ({ menuShown, setMenuShown }: HeaderNavProps) => {
  return (
    <>
      <nav className={`${classes.header_nav} ${menuShown && classes.header_nav_show}`}>
        <div className={classes.header_nav_head}>
          <Link to="/" className={classes.header_logo}>
            <img src={logoSvg} width="161" height="24" alt="logo"/>
          </Link>

          <button
            className={classes.header_nav_close}
            onClick={() => setMenuShown(false)}
          >
            <img src={closeSvg} width="18" height="18" alt=""/>
          </button>
        </div>
        <div className="container">
          <div className={classes.header_nav_inner}>
            <NavItem
              label="Demos"
              items={[
                { label: 'Demos Header' },
                { label: 'Demos Layout' },
                { label: 'Share Buttons' },
                { label: 'Gallery Demos' },
                { label: 'Video Demos' }
              ]}
            />
            <NavItem
              label="Post"
              items={[
                { label: 'Post Header' },
                { label: 'Post Layout' },
                { label: 'Share Buttons' },
                { label: 'Gallery Post' },
                { label: 'Video Demos' }
              ]}
            />
            <NavItem
              label="Features"
              items={[
                { label: 'Features Header' },
                { label: 'Features Layout' },
                { label: 'Share Buttons' },
                { label: 'Gallery Features' },
                { label: 'Video Demos' }
              ]}
            />
            <NavItem
              label="Categories"
              items={[
                { label: 'Categories Header' },
                { label: 'Categories Layout' },
                { label: 'Share Buttons' },
                { label: 'Gallery Categories' },
                { label: 'Video Demos' }
              ]}
            />
            <NavItem
              label="Shop"
              items={[
                { label: 'Shop Header' },
                { label: 'Shop Layout' },
                { label: 'Share Buttons' },
                { label: 'Gallery Shop' },
                { label: 'Video Demos' }
              ]}
            />
            <NavItem label="Buy Now"/>
          </div>
        </div>
      </nav>

      {menuShown && createPortal(
        <div
          className={classes.header_backdrop}
          onClick={() => setMenuShown(false)}
        />,
        document.body
      )}
    </>
  );
};
