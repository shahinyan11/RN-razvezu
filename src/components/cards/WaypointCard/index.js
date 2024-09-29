import React, {useMemo} from 'react';
import {Text, View} from 'react-native';

import st from './styles';
import {useNavigation} from '@react-navigation/native';
import {IconCheck} from '@assets/svgs/vectors';
import {MAIN_COLORS} from '@constants/styles/colors';
import {ACTIVE_OPACITY} from '@constants/index';
import ButtonContainer from '@components/buttons/ButtonContainer';
import {LOCATION_STATUSES} from '@constants/status';
import {IconWarehouses} from '@assets/svgs/tabBar';

const WaypointCard = ({
  containerStyle,
  location,
  index,
  disabled,
  disableOnPress,
  onLongPress = null,
}) => {
  const {
    status,
    address,
    time_interval_start,
    time_interval_finish,
    arrival,
    number,
    type,
    name_client,
    queue,
  } = location;
  const navigation = useNavigation();

  const handlePress = () => {
    if (!disableOnPress) {
      const route =
        location.location_type === 'depot' ? 'LocationDepot' : 'Location';

      navigation.navigate(route, {location_id: location.location_id});
    }
  };

  const isCanceled = status === LOCATION_STATUSES.CANCELED;
  const isCompleted =
    status === LOCATION_STATUSES.FINISHED ||
    status === LOCATION_STATUSES.PICKED_UP ||
    status === LOCATION_STATUSES.SHIPPED;

  const isDepot = useMemo(() => location.location_type === 'depot', [location]);

  return (
    <ButtonContainer
      onPress={handlePress}
      onLongPress={onLongPress}
      style={[st.container, containerStyle]}
      disabled={disabled}>
      <View
        style={[st.box, isCompleted && st.completed, isCanceled && st.canceled]}
        activeOpacity={ACTIVE_OPACITY}>
        {isDepot && <IconWarehouses size={30} />}
        {!isDepot && status && <IconCheck color={MAIN_COLORS.WHITE} />}
        {!isDepot && !status && <Text>{index > 9 ? index : `0${index}`}</Text>}
      </View>
      <View style={st.textsBox}>
        <Text style={st.address}>{address}</Text>
        <Text style={st.smallText}>
          {type && `${type === 'delivery' ? 'Доставка' : 'Забор'} `}
          {`\u2022 С ${time_interval_start} до ${time_interval_finish} `}
          {arrival && `\u2022 ${arrival} `}
          {number && `\u2022 ${number} `}
          {name_client && `\u2022 ${name_client}`}
        </Text>
      </View>
    </ButtonContainer>
  );
};
export default WaypointCard;
