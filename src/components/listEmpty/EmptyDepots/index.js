import {imgEmptyDepots} from '@assets/images';
import {Image, Text, View} from 'react-native';

import st from './styles';

const EmptyDepots = () => {
  return (
    <View style={st.container}>
      <Image source={imgEmptyDepots} style={st.img} />
      <Text style={st.text}>На данный момент нет доступных складов</Text>
    </View>
  );
};

export default EmptyDepots;
