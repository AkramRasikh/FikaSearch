import React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

const SearchInput = ({ onSearchText, searchText }) => (
  <SafeAreaView>
    <TextInput
      style={styles.input}
      onChangeText={onSearchText}
      value={searchText}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default SearchInput;
