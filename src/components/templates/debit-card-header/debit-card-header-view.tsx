import * as React from 'react';
import {View} from 'react-native';
import {STRINGS} from '../../../resources/strings';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIText from '../../widget/text/UIText';
import styles from './styles';

const DebitCardHeaderView: React.FC = () => {
  return (
    <View style={styles.container}>
      <UIText
        color={colors.white}
        FontType={FONT_TYPE.MEDIUM_14}
        text={STRINGS.available_balance}
      />
      <UIText
        color={colors.white}
        FontType={FONT_TYPE.BOLD_24}
        text={STRINGS.available_limit}
      />
    </View>
  );
};

export default DebitCardHeaderView;
