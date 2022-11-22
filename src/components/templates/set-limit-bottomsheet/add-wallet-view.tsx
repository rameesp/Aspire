import * as React from 'react';
import {View} from 'react-native';
import AddWalletIcon from '../../../assets/icons/add-wallet-icon';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import ChipGroup from '../chip-group/chip-group-view';

import IconTextView from '../icon-text/icon-text';
import UIButton from '../../widget/button/button-view';
import UITextInput from '../../widget/text-input/text-input';
import UIText from '../../widget/text/UIText';
import styles from './styles';
import {STRINGS} from '../../../resources/strings';
import {chips} from '../../../resources/constants';
import {limitContext} from '../../pages/debit-card-page/debit-card-page';
import PriceViewLabel from '../../widget/price-label/price-label-view';

interface IAddWalletViewProps {
  onSaveClicked: () => void;
}

/**
 * @param onSaveClicked handling click of save button
 */
const AddWalletView: React.FC<IAddWalletViewProps> = ({onSaveClicked}) => {
  const contextLimit = React.useContext(limitContext);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <UIText
          color={colors.white}
          FontType={FONT_TYPE.BOLD_22}
          text={STRINGS.spending_limit}
        />
      </View>
      <View style={styles.bodyContainer}>
        <IconTextView
          fontType={FONT_TYPE.REGULAR_13}
          textColor={colors.dark_blue}
          Icon={AddWalletIcon}
          text={STRINGS.weekly_debit_label}
        />
        <UITextInput
          value={String(contextLimit.limit)}
          onChangeNumber={val =>
            contextLimit.setLimit && contextLimit.setLimit(val)
          }
          Icon={PriceViewLabel}
        />
        <UIText
          color={colors.off_white}
          FontType={FONT_TYPE.REGULAR_13}
          text={STRINGS.weekly_spending_info}
        />
        <ChipGroup
          onChipPress={limit => {
            contextLimit.setLimit &&
              contextLimit.setLimit(limit.replace(',', ''));
          }}
          chips={chips}
        />
        <View style={styles.buttonContainer}>
          {Number(contextLimit.limit) > 20000 && (
            <UIText
              color={colors.error}
              FontType={FONT_TYPE.BOLD_12}
              text={STRINGS.adding_limit_error_msg}
            />
          )}
          <UIButton onPress={onSaveClicked} buttonStyle={styles.buttonStyle}>
            <UIText
              color={colors.white}
              FontType={FONT_TYPE.BOLD_12}
              text={
                Number(contextLimit.limit) > 0 ? STRINGS.save : STRINGS.EXIT
              }
            />
          </UIButton>
        </View>
      </View>
    </View>
  );
};

export default AddWalletView;
