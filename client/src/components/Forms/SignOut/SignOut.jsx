import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../../Redux/actions/userAction';

function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(signOut());
    navigate('/');
  }, []);

  return null;
}

export default SignOut;
