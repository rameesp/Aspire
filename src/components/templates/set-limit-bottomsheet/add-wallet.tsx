import * as React from 'react';
import AddWalletView from './add-wallet-view';
import useAddWalletViewController from './add-wallet-view-controller';

interface AddWalletProps {
  onSaveClicked: () => void;
}

const AddWallet: React.FC<AddWalletProps> = ({onSaveClicked}) => {
  const {onSaveBtnClicked} = useAddWalletViewController(onSaveClicked);
  return <AddWalletView onSaveClicked={onSaveBtnClicked} />;
};

export default AddWallet;
