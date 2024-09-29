import React from 'react';
import {Image, Text, View} from 'react-native';
import st from './styles';
import moment from 'moment';
import Loader from '@components/Loader';
import {IconFileMessage} from '@assets/svgs/other';

export default function MessageBubble({
  containerStyle,
  isOwner,
  text,
  date,
  url,
  type,
  name,
  size,
}) {
  const formattedDate = moment(date).format('hh:mm');

  return (
    <View style={[st.container, isOwner && st.ownerContainer, containerStyle]}>
      {type === 'file' && (
        <View style={st.fileView}>
          <IconFileMessage />
          <View style={st.fileInfoBox}>
            <Text style={[st.fileName, isOwner && st.ownerFileName]}>
              {name}
            </Text>
            <Text style={[st.fileSize, isOwner && st.ownerFileSize]}>
              {size} MB
            </Text>
          </View>
        </View>
      )}

      {type === 'image' && <Image style={st.image} source={{uri: url}} />}

      {!type && <Text style={[st.text, isOwner && st.ownerText]}>{text}</Text>}

      <View style={st.dateContainer}>
        {date && (
          <Text style={[st.date, isOwner && st.ownerDate]}>
            {formattedDate}
          </Text>
        )}
        {!date && <Loader size={16} containerStyle={st.loader} />}
      </View>
    </View>
  );
}
