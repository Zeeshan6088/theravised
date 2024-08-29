import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomNavigation';
import {colors, fonts} from '../screens/utilities/theme';
import {BackArrow} from '../assets/svg';
import {ChangePassword, EditProfile, PhysioProfile} from '../screens/tabs';

export type HomeStackParamsList = {
  BottomTabs: undefined;
  PhysioProfile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
};
const HomeStackNavigator = () => {
  const HomeStack = createNativeStackNavigator<HomeStackParamsList>();

  return (
    <HomeStack.Navigator
      screenOptions={({navigation}) => ({
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: 'center',

        headerLeft: () => (
          <TouchableOpacity
            style={{width: 25}}
            onPress={() => navigation.goBack()}
            hitSlop={styles.hitSlop}>
            <BackArrow />
          </TouchableOpacity>
        ),

        headerStyle: styles.containerStyle,
        headerTitleStyle: styles.titleStyle,
      })}>
      <HomeStack.Screen name="BottomTabs" component={BottomTabsNavigator} />

      <HomeStack.Screen
        name="PhysioProfile"
        component={PhysioProfile}
        options={{headerTitle: '', headerShown: false}}
      />

      <HomeStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerTitle: 'EditProfile', headerShown: true}}
      />
      <HomeStack.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{headerTitle: 'ChangePassword', headerShown: true}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

const styles = StyleSheet.create({
  hitSlop: {
    left: 10,
    right: 10,
    bottom: 10,
    top: 10,
  },
  titleStyle: {
    color: colors.black,
    fontSize: 16,
    fontFamily: fonts.MontserratSemiBold,
    lineHeight: 28,
  },
  containerStyle: {
    backgroundColor: colors.bgcolor,
  },
});
