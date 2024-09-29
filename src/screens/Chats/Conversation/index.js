import React, {useEffect, useRef, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import uuid from 'react-native-uuid';
import moment from 'moment';
import DocumentPicker from 'react-native-document-picker';
import useScreenContainer from '@hooks/useScreenContainer';
import {fetchChatByIdRequest, sendMessageRequest} from '@store/chat/operations';
import {selectUserId} from '@store/user/selectors';
import {selectCurrentChat} from '@store/chat/selectors';
import MessageInput from '@components/MessageInput';
import MessageBubble from '@components/MessageBubble';
import {ALLOWED_FILE_TYPES} from '@constants/index';
import st from './styles';
import {SvgUri} from 'react-native-svg';
import DATE_FORMATS from '@constants/dateFormats';

const Conversation = ({route}) => {
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const chat_id = route?.params?.chat_id || 1;
  const {containerStyle} = useScreenContainer();
  const userId = useSelector(selectUserId);
  const currentChat = useSelector(selectCurrentChat);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(fetchChatByIdRequest(chat_id));
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollToEnd({animated: true});
  }, [currentChat.data]);

  const handleUploadFile = () => {
    DocumentPicker.pickSingle({
      presentationStyle: 'fullScreen',
      type: ALLOWED_FILE_TYPES,
    }).then(file => {
      if (file) {
        dispatch(
          sendMessageRequest({
            chat_id,
            id: uuid.v4(),
            from_id: userId,
            type: file.type.includes('image') ? 'image' : 'file',
            file: {
              uri: file.uri,
              name: file.name,
              type: file.type,
              size: Math.round(file.size / 1000),
            },
          }),
        );
      }
    });
  };

  const handleSendMessage = () => {
    dispatch(
      sendMessageRequest({
        chat_id,
        id: uuid.v4(),
        from_id: userId,
        text: text.trim(),
      }),
    );
  };

  const renderMessage = (item, index) => {
    let isSame = false;

    if (index > 0) {
      isSame = moment(item.date).isSame(
        currentChat?.data[index - 1]?.date,
        'day',
      );
    }

    return (
      <View key={index}>
        {!isSame && (
          <Text style={st.date}>
            {moment(item.date).calendar(DATE_FORMATS.DEFAULT)}
          </Text>
        )}
        <MessageBubble isOwner={+item.from_id === +userId} {...item} />
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      <View style={st.header}>
        <SvgUri
          uri={currentChat?.avatar}
          style={st.avatar}
          width={48}
          height={48}
        />
        <View>
          <View style={st.row}>
            <Text style={st.title}>Поддержка</Text>
            <View style={st.yellowCircle} />
          </View>
          <Text style={st.text}>мы рядом 24/7</Text>
        </View>
      </View>
      <View style={st.whiteContainer}>
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          {currentChat?.data.map(renderMessage)}
        </ScrollView>

        <View style={st.bottomContainer}>
          <MessageInput
            value={text}
            placeholder="Введите текст"
            onUploadFile={handleUploadFile}
            onChangeText={setText}
            onSend={handleSendMessage}
          />
        </View>
      </View>
    </View>
  );
};

export default Conversation;
