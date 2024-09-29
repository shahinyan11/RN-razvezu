import React, {useEffect, useRef, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

import {imgEmptyData} from '@assets/images';
import useScreenContainer from '@hooks/useScreenContainer';
import {selectAppStore} from '@store/app/selectors';
import {fetchCities} from '@store/app/operations';
import {resetCities} from '@store/app';
import SearchInput from '@components/SearchInput';
import Checkbox from '@components/Checkbox';

import st from './styles';

const CountriesModal = ({route}) => {
  const {onSelect, selected} = route.params;
  const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {containerStyle} = useScreenContainer();
  const [searchText, setSearchText] = useState('');
  const {cities, citiesPagination} = useSelector(selectAppStore);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const fetchMoreData = () => {
    if (citiesPagination.page <= citiesPagination.last_page) {
      dispatch(fetchCities(searchText));
    }
  };

  const handleChangeText = val => {
    setSearchText(val);
    dispatch(resetCities());
    dispatch(fetchCities(val));
  };

  const handleSelect = city => () => {
    onSelect(city);
    navigation.goBack();
  };

  const renderItem = ({item}) => (
    <View key={item.city_id} style={st.checkboxContainer}>
      <Checkbox
        text={item.name}
        textStyle={st.text}
        isChecked={selected === item.city_id}
        onPress={handleSelect(item)}
      />
    </View>
  );

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        topInset={containerStyle.paddingTop}
        snapPoints={['100%']}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        enablePanDownToClose={true}>
        <View style={st.content}>
          <SearchInput
            value={searchText}
            containerStyle={st.searchInput}
            onChangeText={handleChangeText}
          />
          <BottomSheetFlatList
            data={cities}
            renderItem={renderItem}
            contentContainerStyle={st.scrollContainer}
            onEndReachedThreshold={0.2}
            onEndReached={fetchMoreData}
            ListEmptyComponent={() => (
              <View style={st.emptyView}>
                <Image source={imgEmptyData} />
                <Text style={st.emptyText}>
                  Ничего не нашлось по вашему запросу, попробуйте снова
                </Text>
              </View>
            )}
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default CountriesModal;
