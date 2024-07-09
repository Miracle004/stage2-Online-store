import { Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';

function Header() {
  const searchIconUrl = './src/assets/light_search.png';
  const avatar = './src/assets/avatar.png';
  const miniCartIcon = './src/assets/cart.png';
  const WishListIcon = './src/assets/heart-liked.png';
  const logoutIcon = './src/assets/logout.png';
  const settingsIcon = './src/assets/settings.png';
  const [isProfileVisible, setProfileVisible] = useState(false);
  const profileRef = useRef(null);
  const avatarRef = useRef(null);

  const handleAvatarClick = () => {
    setProfileVisible(!isProfileVisible);
  };

  const handleClickOutside = (event) => {
    if (
      profileRef.current && !profileRef.current.contains(event.target) &&
      avatarRef.current && !avatarRef.current.contains(event.target)
    ) {
      setProfileVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header>
      <div className="logo">TechDepot</div>
      <div className="searchBar">
        <input type="search" name="searchField" id="searchField" placeholder="Search" />
        <img src={searchIconUrl} alt="Search Icon" />
      </div>
      <div className="actions">
        <Link to="cart">
          <img src={miniCartIcon} alt="Mini Cart Icon" id="minicartIcon" />
        </Link>
        <img
          src={avatar}
          alt="Avatar Icon"
          id="avatarIcon"
          onClick={handleAvatarClick}
          ref={avatarRef}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div
        className="profileInfo"
        id="profile-info"
        ref={profileRef}
        style={{ display: isProfileVisible ? 'grid' : 'none' }}
      >
        <div className="availOptions">
          <img src={WishListIcon} alt="WishList Icon" />
          <p>WishList</p>
        </div>
        <div className="availOptions">
          <img src={logoutIcon} alt="Logout Icon" />
          <p>Logout</p>
        </div>
        <div className="availOptions">
          <img src={settingsIcon} alt="Settings Icon" />
          <p>Settings</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
