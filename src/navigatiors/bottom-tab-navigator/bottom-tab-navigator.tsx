import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import CreditIcon from '../../assets/icons/credit-icon';
import DebitCardIcon from '../../assets/icons/debit-card-icon';
import HomeIcon from '../../assets/icons/home-icon';
import PaymentIcon from '../../assets/icons/payment-icon';
import ProfileIcon from '../../assets/icons/profile-icon';
import CreditCardPageView from '../../components/pages/credit-page/credit-card-page-view';
import DebitCardPage from '../../components/pages/debit-card-page/debit-card-page';
import HomePageView from '../../components/pages/home-page/home-page-view';
import PaymentPageView from '../../components/pages/payment-page/payment-page-view';
import ProfilePageView from '../../components/pages/profile-page/profile-page-view';
import {colors} from '../../theme/color';

const BottomTab = createBottomTabNavigator();

// screens needed to added to bottom sheet
interface screensTypes {
  title: string;
  component: any;
  icon: (props: SvgProps) => JSX.Element;
}
const screens: screensTypes[] = [
  {title: 'Home', component: HomePageView, icon: HomeIcon},
  {title: 'Debit Card', component: DebitCardPage, icon: DebitCardIcon},
  {title: 'Payment', component: PaymentPageView, icon: PaymentIcon},
  {title: 'Credit', component: CreditCardPageView, icon: CreditIcon},
  {title: 'Profile', component: ProfilePageView, icon: ProfileIcon},
];
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator initialRouteName='Debit Card'>
      {screens.map(screen => (
        <BottomTab.Screen
          key={screen.title}
          name={screen.title}
          component={screen.component}
          options={{
            tabBarLabel: screen.title,
            tabBarIcon: ({color}) => <screen.icon color={color} />,
            tabBarActiveTintColor: colors.brand_green,
            tabBarInactiveTintColor: colors.off_white,
            headerStyle: {
              backgroundColor: colors.dark_blue,
              elevation: 0,
            },
            headerTintColor: colors.white,
            headerRight: () => <HomeIcon color={colors.brand_green} />,
            headerRightContainerStyle: {...{paddingEnd: 12}},
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
