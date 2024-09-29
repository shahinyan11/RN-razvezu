import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Markdown from 'react-native-markdown-display';

import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import Header from '@components/screenHeaders/Header';
import {IconArrowDown} from '@assets/svgs/vectors';
import st from './styles';
import ButtonContainer from '@components/buttons/ButtonContainer';
import {getFaqRequest} from '@store/app/operations';
import {useDispatch, useSelector} from 'react-redux';
import {faqSelector} from '@store/app/selectors';

const FAQ = () => {
  const dispatch = useDispatch();
  const [openQuestions, setOpenQuestions] = useState(new Set());
  const faq = useSelector(faqSelector);

  useEffect(() => {
    dispatch(getFaqRequest());
  }, []);

  const onPressQuestion = id => () => {
    if (!openQuestions.has(id)) {
      setOpenQuestions(prev => new Set(prev).add(id));
      return;
    }

    setOpenQuestions(prev => {
      const next = new Set(prev);

      next.delete(id);

      return next;
    });
  };

  return (
    <ScreenScrollContainer
      whiteContainerStyle={st.whiteContainer}
      HeaderComponent={
        <Header title={'Вопросы и ответы'} titleStyle={st.title} />
      }>
      {faq.map(({id, question, answer}) => (
        <View style={[st.faqItem, openQuestions.has(id) && st.faqItemOpen]}>
          <ButtonContainer style={st.row} onPress={onPressQuestion(id)}>
            <Text>{question}</Text>
            <IconArrowDown
              size={20}
              style={openQuestions.has(id) && st.iconOpen}
            />
          </ButtonContainer>

          {openQuestions.has(id) && <Markdown>{answer}</Markdown>}
        </View>
      ))}
    </ScreenScrollContainer>
  );
};

export default FAQ;
