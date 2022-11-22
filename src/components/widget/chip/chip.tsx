import * as React from 'react';
import {View} from 'react-native';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIText from '../text/UIText';
import styles from './styles';

interface UIChipProps {
  text: string;
}

const UIChip = ({text}: UIChipProps) => {
  return (
    <View style={styles.container}>
      <UIText
        color={colors.brand_green}
        FontType={FONT_TYPE.BOLD_12}
        text={text}
      />
    </View>
  );
};

export default UIChip;
