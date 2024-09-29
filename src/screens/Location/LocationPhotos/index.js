import React from 'react';
import InstaStory from 'react-native-insta-story';

import st from './styles';
import {TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const LocationPhotos = ({data}) => {
  return (
    <InstaStory
      data={data}
      duration={10}
      style={st.container}
      avatarSize={scaledSize(100)}
      avatarTextStyle={st.avatarText}
      avatarWrapperStyle={st.avatarWrapper}
      avatarImageStyle={st.avatarImage}
      pressedAvatarTextColor={TEXT_COLORS.WHITE}
      unPressedAvatarTextColor={TEXT_COLORS.WHITE}
      renderTextComponent={() => null}
      storyAvatarImageStyle={{display: 'none'}}
    />
  );
};

export default LocationPhotos;
