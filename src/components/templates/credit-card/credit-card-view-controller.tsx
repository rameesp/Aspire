import {useSelector} from 'react-redux';
import {getDetailsOfUser} from '../../../store/entities/user-details';

const useCreditCardViewController = () => {
  const userDetails = useSelector(getDetailsOfUser); //selector to get user details from redux after a successful api call
  return {userDetails};
};

export default useCreditCardViewController;
