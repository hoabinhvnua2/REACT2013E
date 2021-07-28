import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from 'redux';
import userActions from '../constants/User';
import { userSclector } from "../selectors/User";

export const useUser = () => {
    const user = useSelector(userSclector);
    const dispatch = useDispatch();
    const action = useMemo(
      () => bindActionCreators(userActions, dispatch),
      [dispatch]
    );
  
    return useMemo(() => ({
      user, action
    }), [user, action])
  };
  