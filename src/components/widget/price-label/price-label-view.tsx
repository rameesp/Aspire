import * as React from 'react';
import {View} from 'react-native';
import {STRINGS} from '../../../resources/strings';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIText from '../text/UIText';
import styles from './styles';

const PriceViewLabel = () => {
  return (
    <View style={styles.container}>
      <UIText
        color={colors.white}
        FontType={FONT_TYPE.BOLD_12}
        text={STRINGS.s_dollar}
      />
    </View>
  );
};

export default PriceViewLabel;
