import * as React from 'react';
import {SvgProps} from 'react-native-svg';
import {colors} from '../../../theme/color';
import {FONT_TYPE} from '../../../theme/font';
import UIRow from '../../widget/row/UIRow';
import UIText from '../../widget/text/UIText';
import styles from './styles';

interface IconTextViewProps {
  Icon: ({color}: SvgProps) => JSX.Element;
  text: string;
  textColor?: string;
  fontType?: IFontTypeProp;
}
/**
 * @param Icon icon to render on the left
 * @param text text to render
 * @param textColor text color
 * @param fontType it will decide font size and font family
 */
const IconTextView: React.FC<IconTextViewProps> = ({
  Icon,
  text,
  textColor,
  fontType,
}) => {
  return (
    <UIRow rowStyle={styles.container}>
      <Icon />
      <UIText
        style={styles.textStyle}
        FontType={fontType || FONT_TYPE.BOLD_22}
        color={textColor || colors.white}
        text={text}
      />
    </UIRow>
  );
};

export default IconTextView;
