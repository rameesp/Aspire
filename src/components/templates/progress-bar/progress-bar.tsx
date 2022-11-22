import * as React from 'react';
import {View} from 'react-native';
import ProgressBarView from './progress-bar-view';
import useProgressViewController from './progress-view-controller';

interface ProgressBarProps {
  limit: number;
  total: number;
}

const ProgressBar:React.FC<ProgressBarProps> = ({limit = 0, total = 0}) => {
  const {calculateProgress} = useProgressViewController();
  return (
    <View>
      <ProgressBarView
        limit={String(limit)}
        total={String(total)}
        progress={calculateProgress(total, limit)}
      />
    </View>
  );
};

export default ProgressBar;
