import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchChatsRequest} from '@store/chat/operations';
import st from './styles';
import {selectChats} from '@store/chat/selectors';
import ChatPreview from '@components/ChatPreview';
import Header from '@components/screenHeaders/Header';
import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';

const Chats = ({navigation}) => {
  const dispatch = useDispatch();
  const chats = useSelector(selectChats);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(fetchChatsRequest());
  };

  const handlePress = chat_id => () => {
    navigation.navigate('Conversation', {chat_id});
  };

  return (
    <ScreenScrollContainer
      HeaderComponent={<Header title="Чаты" showBackIcon={false} />}
      whiteContainerStyle={st.whiteContainer}
      onRefresh={getData}>
      {chats.map(item => (
        <ChatPreview
          key={item.chat_id}
          data={item}
          onPress={handlePress(item.chat_id)}
        />
      ))}
    </ScreenScrollContainer>
  );
};

export default Chats;
