import {FlatList, StatusBar, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/ClientBottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {ChatItem, Header, SearchBar} from '../../../component';
import {CHATARRAY} from '../../../constants';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Messege'
>;

const Messege: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />
      <Header />
      <SearchBar containerStyle={{marginTop: 20, marginBottom: 8}} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={CHATARRAY}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ChatItem
            title={item.title}
            ImageUrl={item.ImageUrl}
            isActive={item.isActive}
            onPress={() => navigation.navigate('ChatDetails')}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Messege;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  contentContainerStyle: {
    marginTop: 8,
    paddingBottom: 30,
  },
});
