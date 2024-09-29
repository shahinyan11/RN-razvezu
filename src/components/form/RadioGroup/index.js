import React from 'react';
import {Text, View} from 'react-native';

import st from './styles';
import {useField} from 'formik';
import Checkbox from '@components/Checkbox';

const RadioGroup = ({name, containerStyle}) => {
  const [_, meta, helper] = useField(name);
  const {value} = meta;

  const handleSelect = selected => () => {
    const newValue = value !== selected ? selected : undefined;
    helper.setValue(newValue);
  };

  const hasError = meta.touched && meta.error;

  return (
    <View style={[st.container, containerStyle]}>
      <View style={st.row}>
        {['мужской', 'женский'].map(item => (
          <View
            key={item}
            style={[st.itemContainer, hasError && st.errorContainer]}>
            <Checkbox
              text={item}
              textStyle={st.text}
              onPress={handleSelect(item)}
              isChecked={value === item}
            />
          </View>
        ))}
      </View>
      {hasError && <Text style={st.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default RadioGroup;
