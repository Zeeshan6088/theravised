import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {BottomTabParamlist} from '../../../navigation/BottomNavigation';
import {HomeStackParamsList} from '../../../navigation/HomeNavigation';
import {colors} from '../../utilities/theme';
import {ProgramComponent, ProgramItem, SearchBar} from '../../../component';
import {CHECKOUT_ARRAY} from '../../../constants';

type Props = NativeStackScreenProps<
  BottomTabParamlist & HomeStackParamsList,
  'Programs'
>;

const Programs: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.bgcolor} barStyle={'dark-content'} />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={CHECKOUT_ARRAY}
        keyExtractor={item => item.ImageUrl}
        renderItem={({item}) => <ProgramComponent ImageUrl={item.ImageUrl} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

export default Programs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcolor,
    paddingHorizontal: 22,
    paddingTop: 18,
  },
  contentContainerStyle: {
    gap: 15,
    paddingBottom: 30,
  },
});
