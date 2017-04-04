//Import thu vien
import React from 'react';
import { Text, View } from 'react-native';

//Tao component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
      <View style={viewStyle}>
            <Text style={textStyle}> {props.content} </Text>
      </View>);
}; //refux
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
      fontSize: 20
  }
};

//export header component de cac class khac co the su dung
export default Header;
