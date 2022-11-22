import * as React from 'react';
import {limitContext} from '../../pages/debit-card-page/debit-card-page';

const useAddWalletViewController = (onSaveClicked: () => void) => {
  const contextLimit = React.useContext(limitContext);
  const onSaveBtnClicked = () => {
    if (Number(contextLimit.limit) <= 20000) {
      // only if the user selected value is less than 20,000 it will accept otherwise we will show error msg to user
      onSaveClicked();
      contextLimit.setLimit &&
        contextLimit.setLimit(contextLimit.limit.replace(',', ''));
    }
  };
  return {onSaveBtnClicked, contextLimit};
};

export default useAddWalletViewController;
