import * as React from 'react';
import useDebitCardOptionViewController from './debit-card-option-view-controller';
import DebitCardOptionView from './debit-crad-option-view';

const DebitCardOption = () => {
  const [isOpenBottomSheet, setIsOpenBottomSheet] = React.useState(false); //for opening and closing of bottom sheet to set card limit
  const {onSwitchClicked} =
    useDebitCardOptionViewController(setIsOpenBottomSheet);
  return (
    <DebitCardOptionView
      isOpenBottomSheet={isOpenBottomSheet}
      setIsOpenBottomSheet={setIsOpenBottomSheet}
      onSwitchClicked={onSwitchClicked}
    />
  );
};

export default DebitCardOption;
