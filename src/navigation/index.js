import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import useScreen from '@hooks/useScreen';
import {MAIN_COLORS} from '@constants/styles/colors';
import {USER_STATUS} from '@constants/user';
import {isIos} from '@constants/device';
import {bottomSheetSelector} from '@store/modal/selectors';
import {selectUserStatus} from '@store/user/selectors';
import {selectAuthToken} from '@store/auth/selectors';
import {openBottomSheet} from '@store/modal';
import BackButton from '@components/buttons/BackButton';
import {defaultStackOptions, modalScreenOptions} from '@navigation/options';
import VerificationStack from '@navigation/navigators/VerificationStack';
import FillUserInfoStack from '@navigation/navigators/FillUserInfoStack';
import DepotsStack from '@navigation/navigators/DepotsStack';
import WalletStack from '@navigation/navigators/WalletStack';
import ChatStack from '@navigation/navigators/ChatStack';
import SelfEmploymentWalletModal from '@screens/modalScreens/SelfEmploymentWalletModal';
import ConfirmDeliveryModal from '@screens/modalScreens/ConfirmDeliveryModal';
import SlotScheduleModal from '@screens/modalScreens/SlotScheduleModal';
import InviteFriendModal from '@screens/modalScreens/InviteFriendModal';
import OrderCancelModal from '@screens/modalScreens/OrderCancelModal';
import WithdrawalModal from '@screens/modalScreens/WithdrawalModal';
import AttachCardModal from '@screens/modalScreens/AttachCardModal';
import TakePhotoModal from '@screens/modalScreens/TakePhotoModal';
import CountriesModal from '@screens/modalScreens/CountriesModal';
import SignatureModal from '@screens/modalScreens/SignatureModal';
import SlotInfoModal from '@screens/modalScreens/SlotInfoModal';
import UserInfoModal from '@screens/modalScreens/UserInfoModal';
import ExploreModal from '@screens/modalScreens/ExploreModal';
import PhoneVerification from '@screens/PhoneVerification';
import LocationDepot from '@screens/LocationDepot';
import RouteDetails from '@screens/RouteDetails';
import Credentials from '@screens/Credentials';
import Information from '@screens/Information';
import ChooseSlot from '@screens/ChooseSlote';
import CityTariff from '@screens/CityTariff';
import Calendar from '@screens/Calendar';
import Location from '@screens/Location';
import SignIn from '@screens/SignIn';
import Map from '@screens/Map';
import FAQ from '@screens/FAQ';
import AppInfo from '@screens/AppInfo';
import IE from '@screens/IE';
import {navigationRef} from './RootNavigation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const dispatch = useDispatch();
  const status = useSelector(selectUserStatus);
  const token = useSelector(selectAuthToken);
  const {type} = useSelector(bottomSheetSelector);
  const prevRoute = useRef();

  useScreen({status});

  const onStateChange = state => {
    if (USER_STATUS.COURIER_UNVERIFIED === status) {
      const currentRoute = navigationRef.getCurrentRoute().name;

      if (prevRoute.current !== 'IE' && currentRoute !== 'IE' && !type) {
        dispatch(openBottomSheet({type: 'LEGAL_FORM'}));
      }

      prevRoute.current = currentRoute;
    }
  };

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={defaultStackOptions}>
        {!token && (
          // Auth Screens
          <Stack.Group>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PhoneVerification"
              component={PhoneVerification}
            />
          </Stack.Group>
        )}

        {Boolean(token) && (
          // Main Screens
          <Stack.Group>
            {USER_STATUS.TEXT_DOCS_FILLING === status && (
              <Stack.Screen
                name="FillUserInfoStack"
                component={FillUserInfoStack}
                options={{headerShown: false}}
              />
            )}

            <Stack.Screen
              name="DepotsStack"
              component={DepotsStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ChatStack"
              component={ChatStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="WalletStack"
              component={WalletStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Information"
              component={Information}
              options={{
                headerShown: false,
                contentStyle: {backgroundColor: MAIN_COLORS.GREY_40},
                headerStyle: {backgroundColor: MAIN_COLORS.GREY_40},
              }}
            />
            <Stack.Screen
              name="CityTariff"
              component={CityTariff}
              options={{
                headerTransparent: true,
                contentStyle: {backgroundColor: MAIN_COLORS.GREY_40},
              }}
            />
            <Stack.Screen
              name="VerificationStack"
              component={VerificationStack}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Map"
              component={Map}
              options={{
                headerShown: false,
                contentStyle: {backgroundColor: MAIN_COLORS.WHITE},
              }}
            />
            <Stack.Screen
              name="Credentials"
              component={Credentials}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Location"
              component={Location}
              options={{
                headerShown: false,
                contentStyle: {backgroundColor: MAIN_COLORS.BLACK},
              }}
            />
            <Stack.Screen
              name="LocationDepot"
              component={LocationDepot}
              options={{
                headerShown: false,
                contentStyle: {backgroundColor: MAIN_COLORS.BLACK},
              }}
            />
            <Stack.Screen
              name="ChooseSlot"
              component={ChooseSlot}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RouteDetails"
              component={RouteDetails}
              options={{
                contentStyle: {backgroundColor: MAIN_COLORS.WHITE},
                headerLeft: () => <BackButton color={MAIN_COLORS.DARK} />,
              }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{
                headerShown: false,
                // contentStyle: {backgroundColor: MAIN_COLORS.WHITE},
              }}
            />
            <Stack.Screen
              name="FAQ"
              component={FAQ}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AppInfo"
              component={AppInfo}
              options={{headerShown: false}}
            />
            <Stack.Screen name="IE" component={IE} />
          </Stack.Group>
        )}

        {/* Modal Screens */}
        <Stack.Group screenOptions={modalScreenOptions}>
          <Stack.Screen name="UserInfoModal" component={UserInfoModal} />
          <Stack.Screen name="SlotInfoModal" component={SlotInfoModal} />
          <Stack.Screen name="TakePhotoModal" component={TakePhotoModal} />
          <Stack.Screen name="CountriesModal" component={CountriesModal} />
          <Stack.Screen name="SignatureModal" component={SignatureModal} />
          <Stack.Screen name="WithdrawalModal" component={WithdrawalModal} />
          <Stack.Screen name="OrderCancelModal" component={OrderCancelModal} />
          <Stack.Screen name="AttachCardModal" component={AttachCardModal} />
          <Stack.Screen
            name="SlotScheduleModal"
            component={SlotScheduleModal}
            options={isIos ? {presentation: undefined} : null}
          />

          <Stack.Screen
            name="ConfirmDeliveryModal"
            component={ConfirmDeliveryModal}
          />
          <Stack.Screen
            name="SelfEmploymentWalletModal"
            component={SelfEmploymentWalletModal}
          />
          <Stack.Screen name="ExploreModal" component={ExploreModal} />
          <Stack.Screen
            name="InviteFriendModal"
            component={InviteFriendModal}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
