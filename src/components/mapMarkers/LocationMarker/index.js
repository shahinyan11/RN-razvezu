import React from 'react';
import {Text, View} from 'react-native';
import st from './styles';
import {LOCATION_STATUSES} from '@constants/status';

const MapMarker = ({containerStyle, status, number}) => {
  const isCanceled = status === LOCATION_STATUSES.CANCELED;
  const isCompleted =
    status === LOCATION_STATUSES.FINISHED ||
    status === LOCATION_STATUSES.PICKED_UP;

  return (
    <View>
      <View
        style={[
          st.container,
          isCompleted && st.completed,
          isCanceled && st.canceled,
          containerStyle,
        ]}>
        <Text style={st.text}>{number}</Text>
      </View>
      <View
        style={[
          st.triangle,
          isCompleted && st.completedTriangle,
          isCanceled && st.canceledTriangle,
        ]}
      />
      <View
        style={[
          st.circle,
          isCompleted && st.completed,
          isCanceled && st.canceled,
        ]}
      />
    </View>
  );
};

export default MapMarker;
