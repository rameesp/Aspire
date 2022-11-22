import * as React from 'react';
import {View} from 'react-native';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIRow from '../../widget/row/UIRow';
import UISwitch from '../../widget/switch/switch-view';
import UIText from '../../widget/text/UIText';
import SetLimitBottomSheet from '../set-limit-bottomsheet/set-limit-bottom-sheet-view';
import {SvgProps} from 'react-native-svg';
import styles from './styles';
import {debit_options} from '../../../resources/constants';

interface DebitCardOptionItemViewProps {
  heading: string;
  subHeading: string;
  Icon: (Props: SvgProps) => JSX.Element;
  isSwitch: boolean;
  onSwitchClicked: (props: boolean) => void;
}

/**
 * @param props.heading heading debit card option
 * @param props.subHeading subHeading for debit card option
 * @param props.Icon icon for rendering
 * @param props.isSwitch to decide weather to show switch view or not
 * @param props.onSwitchClicked this function will happen when we enable and disable switch
 */
const DebitCardOptionItemView: React.FC<DebitCardOptionItemViewProps> = ({
  heading,
  subHeading,
  Icon,
  isSwitch,
  onSwitchClicked,
}) => {
  const [isSwitchEnable, setSwitchEnable] = React.useState(false);
  return (
    <UIRow rowStyle={styles.debitCardOptionContainer}>
      <UIRow rowStyle={styles.alignCenter}>
        <Icon />
        <View style={styles.optionTextContainer}>
          <UIText
            color={colors.dark_blue}
            FontType={FONT_TYPE.MEDIUM_14}
            text={heading}
          />
          <UIText
            color={colors.off_white}
            FontType={FONT_TYPE.REGULAR_13}
            text={subHeading}
          />
        </View>
      </UIRow>
      {isSwitch ? (
        <UISwitch
          isEnabled={isSwitchEnable}
          setSwitchEnabled={setSwitchEnable}
          onSwitchEnabled={onSwitchClicked}
        />
      ) : (
        <></>
      )}
    </UIRow>
  );
};

interface DebitCardOptionViewProps {
  isOpenBottomSheet: boolean;
  setIsOpenBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  onSwitchClicked: (enabled: boolean, heading: string) => void;
}
/**
 * @param isOpenBottomSheet boolean to control card limit bottom sheet
 * @param setIsOpenBottomSheet state function to control @param  isOpenBottomSheet
 * @param onSwitchClicked  feedback to clicking switch in the debit card option
 */
const DebitCardOptionView: React.FC<DebitCardOptionViewProps> = ({
  isOpenBottomSheet,
  setIsOpenBottomSheet,
  onSwitchClicked,
}) => {
  return (
    <>
      <View style={{paddingHorizontal: 16}}>
        {debit_options.map(item => (
          <DebitCardOptionItemView
            key={item.heading}
            heading={item.heading}
            subHeading={item.subHeading}
            Icon={item.Icon}
            isSwitch={item.isSwitch}
            onSwitchClicked={enabled => onSwitchClicked(enabled, item.heading)}
          />
        ))}
      </View>
      <SetLimitBottomSheet
        setIsModalVisible={setIsOpenBottomSheet}
        isModalVisible={isOpenBottomSheet}
      />
    </>
  );
};

export default DebitCardOptionView;
