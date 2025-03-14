import classes from './header.module.scss';
import { Link, useNavigate } from 'react-router';
import chevronRight from '../../../assets/img/chevron-right.svg';
import chevronDown from '../../../assets/img/chevron-down.svg';

interface NavItemProps {
  label: string;
  path?: string;
  items?: {
    label: string
  }[];
}

export const NavItem = ({ label, path, items }: NavItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className={classes.header_nav_item}
      onClick={() => navigate(path!)}
    >
      <button className={classes.header_nav_item_button}>
        {label}

        {items?.length && (
          <img src={chevronDown} width="10" height="6" alt=""/>
        )}
      </button>

      {items?.length && (
        <div className={classes.header_nav_item_content}>
          {items.map((item, index) => (
            <Link key={index} to="#" className={classes.header_nav_item_link}>
              {item.label}

              <img src={chevronRight} width="8" height="5" alt=""/>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
