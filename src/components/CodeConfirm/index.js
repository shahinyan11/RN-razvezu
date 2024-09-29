import React from 'react';
import {Text, View} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import st from './styles';

const CodeConfirm = ({
  cellCount = 4,
  containerStyle,
  autoFocus = true,
  onChangeText,
  value,
}) => {
  const ref = useBlurOnFulfill({value, cellCount});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    onChangeText,
  });

  return (
    <CodeField
      {...props}
      ref={ref}
      // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
      value={value}
      autoFocus={autoFocus}
      onChangeText={onChangeText}
      cellCount={cellCount}
      rootStyle={containerStyle}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({index, symbol, isFocused}) => (
        <View key={index} style={st.cell}>
          <Text style={st.text} onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        </View>
      )}
    />
  );
};

export default CodeConfirm;
