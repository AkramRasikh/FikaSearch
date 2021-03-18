import React from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

const TextInputComponent = ({ onChangeText, text }) => (
  <SafeAreaView>
    <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default TextInputComponent;
