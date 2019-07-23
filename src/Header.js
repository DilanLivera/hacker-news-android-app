import React from 'react';
import {
  Text,
  View
} from 'react-native';


const Header = ({ headerText }) => {
  const { viewStyles, textStyles } = styles;
  return (
    <View style={ viewStyles }>
      <Text style={ textStyles }>{ headerText }</Text>
    </View>
  );
};

const styles = {
  viewStyles: {
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 5,
    position: 'relative'
  },
  textStyles: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Arvo',
    fontWeight: 'bold',
    letterSpacing: 4,
    textShadowOffset: { width: 5, height: 3 },
    textShadowRadius: 1,
    textShadowColor: '#999',
  }
}

export default Header;
