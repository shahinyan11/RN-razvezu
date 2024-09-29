import React from 'react';
import {StyleSheet, View} from 'react-native';

const TestFaceBounds = ({data, isFront, adjustRect}) => {
  return (
    <>
      {data?.map(({bounds}, index) => {
        const {left, ...others} = adjustRect(bounds);

        return (
          <View
            key={index}
            style={[
              st.boundingBox,
              {...others, [isFront ? 'right' : 'left']: left},
            ]}
          />
        );
      })}
    </>
  );
};

export default TestFaceBounds;

const st = StyleSheet.create({
  boundingBox: {
    position: 'absolute',
    borderColor: 'green',
    borderWidth: 1,
  },
});
