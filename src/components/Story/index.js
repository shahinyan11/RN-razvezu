import React from 'react';
import {Linking, View} from 'react-native';
import InstaStory from 'react-native-insta-story';

import {TEXT_COLORS} from '@constants/styles/colors';
import ButtonContainer from '@components/buttons/ButtonContainer';
import {IconClose} from '@assets/svgs/action';
import Button from '@components/buttons/Button';

import {useDispatch, useSelector} from 'react-redux';
import {storiesSelector} from '@store/user/selectors';
import st from './styles';
import {storySeenRequest} from '@store/user/operations';

const Story = () => {
  const dispatch = useDispatch();
  const stories = useSelector(storiesSelector);

  const updateSeenStories = ({story: {story_id}}) => {
    dispatch(storySeenRequest(story_id));
  };

  const renderButton = ({item}) => {
    if (!item.customProps.link) {
      return null;
    }

    return (
      <Button
        onPress={() => Linking.openURL(item.customProps.link)}
        text={item.customProps.buttonText}
        containerStyle={st.button}
      />
    );
  };

  return (
    <View style={st.container}>
      {stories.length > 0 && (
        <InstaStory
          data={[...stories]}
          duration={10}
          avatarSize={50}
          onStorySeen={updateSeenStories}
          pressedAvatarTextColor={TEXT_COLORS.WHITE_05}
          unPressedAvatarTextColor={TEXT_COLORS.WHITE}
          renderCloseComponent={({onPress}) => (
            <ButtonContainer onPress={onPress}>
              <IconClose />
            </ButtonContainer>
          )}
          renderSwipeUpComponent={renderButton}
        />
      )}
    </View>
  );
};

export default Story;
