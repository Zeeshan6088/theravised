import {StyleSheet, View, TextInput, ViewStyle} from 'react-native';
import React from 'react';
import {appStyles, colors} from '../../screens/utilities/theme';
import {Searchicon} from '../../assets/svg';
interface Props {
  containerStyle?: ViewStyle;
  placeholder: string;
}

const SearchBar: React.FC<Props> = ({containerStyle, placeholder}) => {
  return (
    <View style={[styles.Container, containerStyle]}>
      <Searchicon style={{marginRight: 6}} width={18} height={18} />
      <TextInput
        style={[appStyles.h5, {flex: 1}]}
        textAlignVertical="center"
        placeholderTextColor={'#9E9E9E'}
        placeholder={placeholder}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    borderColor: '#CECECE',
    borderWidth: 1,
    flexDirection: 'row',
    height: 46,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
