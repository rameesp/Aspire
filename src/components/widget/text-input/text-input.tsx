import * as React from 'react';
import {TextInput} from 'react-native';
import {colors} from '../../../theme/color';
import UIRow from '../row/UIRow';
import styles from './styles';

interface UITextInputProps {
  onChangeNumber: (number: string) => void;
  Icon: () => JSX.Element;
  value: string;
}

const UITextInput: React.FC<UITextInputProps> = ({
  onChangeNumber,
  Icon,
  value,
}) => {
  return (
    <UIRow rowStyle={styles.container}>
      <Icon />
      <TextInput
        value={value}
        onChangeText={onChangeNumber}
        maxLength={6}
        keyboardType="numeric"
        style={styles.textInput}
      />
    </UIRow>
  );
};

export default UITextInput;
