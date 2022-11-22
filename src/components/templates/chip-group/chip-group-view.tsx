import * as React from 'react';
import {Pressable} from 'react-native';
import UIChip from '../../widget/chip/chip';
import UIRow from '../../widget/row/UIRow';
import styles from './styles';

interface ChipGroupProps {
  chips: string[];
  onChipPress: (limit: string) => void;
}

/**
 * @param chips array of items to be shown 
 * @param onChipPress feedback to each click on chip, it will return limit that we selected on chip
 */
const ChipGroup: React.FC<ChipGroupProps> = ({chips, onChipPress}) => {
  return (
    <UIRow rowStyle={styles.container}>
      {chips.map(item => (
        <Pressable
          key={item}
          onPress={() => onChipPress(item.replace('S$', ''))}>
          <UIChip text={item} />
        </Pressable>
      ))}
    </UIRow>
  );
};

export default ChipGroup;
