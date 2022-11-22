import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

const useProgressViewController = () => {
  const calculateProgress = (total: number, value: number) => {
    return (value / total) * (windowWidth - 32); //calculating by dividing the selected limit with total and by multiplying with progress bar width it will give the progress width
  };
  return {calculateProgress};
};

export default useProgressViewController;
