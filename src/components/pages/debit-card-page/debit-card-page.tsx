import * as React from 'react';
import DebitCardPageView from './debit-card-page-view';
import useDebitCardViewController from './debit-card-view-controller';
interface LimitContextProps {
  limit: string;
  setLimit: React.Dispatch<React.SetStateAction<string>> | undefined;
}
export const limitContext = React.createContext<LimitContextProps>({
  limit: '',
  setLimit: undefined,
}); //context is used to update the limit in order to avoid prop drilling
const DebitCardPage: React.FC = () => {
  const {callDetailsApi} = useDebitCardViewController();
  React.useEffect(() => {
    callDetailsApi();
  }, []);
  const [limit, setLimit] = React.useState<string>('');
  return (
    <limitContext.Provider value={{limit, setLimit}}>
      <DebitCardPageView />
    </limitContext.Provider>
  );
};

export default DebitCardPage;
