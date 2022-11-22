import * as React from 'react';
import {View, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import BackIcon from '../../../assets/icons/back-icon';
import HomeIcon from '../../../assets/icons/home-icon';
import {colors} from '../../../theme/color';
import {limitContext} from '../../pages/debit-card-page/debit-card-page';
import UIRow from '../../widget/row/UIRow';
import AddWallet from './add-wallet';
import styles from './styles';

interface SetLimitBottomSheetProps {
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * @param isModalVisible  to control bottom sheet visibility
 * @param setIsModalVisible  to control @param isModalVisible state variable
 */
const SetLimitBottomSheet = ({
  isModalVisible,
  setIsModalVisible,
}: SetLimitBottomSheetProps) => {
  const contextLimit = React.useContext(limitContext);
  const Header = () => {
    return (
      <UIRow rowStyle={styles.bsHeaderContainer}>
        <Pressable
          onPress={() => {
            setIsModalVisible(false);
          }}>
          <BackIcon />
        </Pressable>
        <HomeIcon color={colors.brand_green} />
      </UIRow>
    );
  };
  return (
    <View style={styles.modalContainer}>
      <Modal
        style={styles.modal}
        onModalShow={() => {
          contextLimit.setLimit && contextLimit.setLimit('');
        }}
        isVisible={isModalVisible}>
        <Header />
        <View style={styles.addWalletContainer}>
          <AddWallet onSaveClicked={() => setIsModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default SetLimitBottomSheet;
