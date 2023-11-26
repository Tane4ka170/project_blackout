import {
  selectEmail,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const email = useSelector(selectEmail);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    email,
  };
};
