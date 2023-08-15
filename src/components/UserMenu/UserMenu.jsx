import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/auth/authOperations';
import { selectUserData } from 'redux/auth/authSelectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  //   const selectedToken = useSelector(selectToken);
  const userData = useSelector(selectUserData);

  //   console.log(userData.name);
  return (
    <div className="logout">
      <p>{userData.name}</p>
      <button
        onClick={() => {
          dispatch(logoutThunk());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
