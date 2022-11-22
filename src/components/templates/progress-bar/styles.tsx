import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../theme/color';
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  progressBarContainer: {
    height: 15,
    width: windowWidth - 32,
    backgroundColor: colors.off_white,
    borderRadius: 24,
  },
  labelContainer: {justifyContent: 'space-between', width: windowWidth - 32,},
  container: {
    width: '100%',
    alignItems:"center"
  },
});
export default styles;
