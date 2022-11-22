import * as React from 'react';
import {Text, TextStyle} from 'react-native';

interface UITextProps {
  text: string;
  // Font type
  FontType: IFontTypeProp;
  // Font size
  size?: number;
  // Font color
  color?: string;

  // Max number of lines
  numberOfLines?: number;
  // Alignment of text
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  // Styling for text
  style?: TextStyle;
}

const UIText: React.FC<UITextProps> = ({
  FontType,
  color,
  numberOfLines,
  textAlign,
  style,
  text,
}: UITextProps) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        style,
        {
          fontFamily: FontType?.fontFamily,
          fontSize: FontType?.fontSize,
          color: color,
          textAlign: textAlign,
        },
      ]}>
      {text}
    </Text>
  );
};

export default UIText;
