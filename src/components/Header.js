
import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { viewStyle, headerText } = styles;
  return (
    <View style={viewStyle}>
      <Text style={headerText}>React Project</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    height: 60,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 15 },
    opacity: 0.5
  },
  headerText: {
    fontSize: 20
  }
};


export { Header };
