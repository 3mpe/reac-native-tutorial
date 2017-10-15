import React from 'react';
import { View } from 'react-native';

const CardItem = (props) => {
  const { subContainerStyle } = style;
  return (
    <View style={subContainerStyle}>
     {props.children}
    </View>
  );
};

const style = {
  subContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardItem };
