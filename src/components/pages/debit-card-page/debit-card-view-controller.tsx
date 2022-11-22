import {useDispatch} from 'react-redux';
import {AppDispatch} from '../../../store/configureStore';
import {getUserDetails} from '../../../store/entities/user-details';
/**
 * custom hook is to handle logical part of the debit card view
 */
const useDebitCardViewController = () => {
  const dispatch = useDispatch<AppDispatch>();
  const callDetailsApi = () => {
    dispatch(getUserDetails()); //it will call the api to get the user details
  };
  return {callDetailsApi};
};

export default useDebitCardViewController;
