import React from 'react';
import {STRINGS} from '../../../resources/strings';
import {limitContext} from '../../pages/debit-card-page/debit-card-page';

const useDebitCardOptionViewController = (
  setIsOpenBottomSheet: (arg: boolean) => void,
) => {
  const contextLimit = React.useContext(limitContext);
  const onSwitchClicked = (isEnabled: boolean, title: string) => {
    if (isEnabled && title == STRINGS.weekly_spending_limit) {
      // to check weather we clicked debit card limit updating switch or not
      setIsOpenBottomSheet(isEnabled); // this will open bottom sheet to add card limit
    } else if (!isEnabled && title == STRINGS.weekly_spending_limit) {
      contextLimit.setLimit && contextLimit.setLimit(''); // switch is disabled we will set the limit to empty
    }
  };
  return {onSwitchClicked};
};

export default useDebitCardOptionViewController;
