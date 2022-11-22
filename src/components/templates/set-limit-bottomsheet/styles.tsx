import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/color';

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: colors.dark_blue,
    flex: 1,
  },
  headerContainer: {height: '15%', paddingHorizontal: 16},
  bodyContainer: {
    backgroundColor: colors.white,
    height: '85%',
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    padding: 24,
  },
  buttonStyle: {width: '70%', position: 'relative'},
  bsHeaderContainer: {
    backgroundColor: colors.dark_blue,
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingTop: 12,
  },
  modalContainer:{flex:1},
  addWalletContainer:{flex:1},
  modal:{margin:0}
});
export default styles;
