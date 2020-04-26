import React, { useContext } from 'react';
import BurgerButton from '../BurgerButton';
import { LeftSideBarContext } from '../index';
import { FaHome} from 'react-icons/fa';
import { FcHighPriority } from 'react-icons/fc';
import './style.scss';

const LeftSection = () => {
  const { isShowSidebar, setIsShowSidebar } = useContext(LeftSideBarContext);
  return (
    <div className={`LeftSideBar__LeftSection LeftSideBar__LeftSection--${isShowSidebar ? 'show' : 'hide'}`}>
      <div className="LeftSideBar__LeftSection__topWrapper">
        <BurgerButton
          onClick={() => setIsShowSidebar(false)}
        />
      </div>
      <ul className="LeftSideBar__LeftSection__menuWrapper">
        <li>
          <a
            href="https://mohit9222.github.io/Covid-19/"
          >
            Home   <FaHome />
          </a>
        </li>
        <li>
          <a
            href="#"
          >
            Important Information  <FcHighPriority />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSection;