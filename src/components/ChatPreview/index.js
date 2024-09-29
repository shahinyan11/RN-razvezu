import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import st from './styles';
import {imgChatIcon} from '@assets/images';
import moment from 'moment';
import {ACTIVE_OPACITY} from '@constants/index';

export default function ChatPreview({containerStyle, data, onPress}) {
  const date = moment(data.last_message.date).format('DD MMM.');
  return (
    <TouchableOpacity
      style={[st.container, containerStyle]}
      onPress={onPress}
      activeOpacity={ACTIVE_OPACITY}>
      <Image source={imgChatIcon} style={st.preview} />
      <View style={st.textContainer}>
        <View style={st.row}>
          <Text numberOfLines={1} style={st.name}>
            {data?.name}
          </Text>
          <Text style={st.date}>{date}</Text>
        </View>
        <View style={st.row}>
          <Text numberOfLines={1} style={st.text}>
            {data?.last_message.text}
          </Text>
          <View style={st.unread}>
            <Text style={st.count}>{data.unread_count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
