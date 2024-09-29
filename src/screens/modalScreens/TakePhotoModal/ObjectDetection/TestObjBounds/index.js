import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TestObjBounds = ({data}) => {
  return (
    <>
      {data?.map(({top, left, width, height, labels}) => {
        return (
          <View style={[st.detectionFrame, {top, left, width, height}]}>
            <Text style={st.detectionFrameLabel}>
              {labels
                .map(label => `${label.label} (${label.confidence})`)
                .join(',')}
            </Text>
          </View>
        );
      })}
    </>
  );
};

export default TestObjBounds;

const st = StyleSheet.create({
  detectionFrame: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#00ff00',
    zIndex: 9,
  },
  detectionFrameLabel: {
    backgroundColor: 'rgba(0, 255, 0, 0.25)',
  },
});
