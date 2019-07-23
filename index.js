import React from 'react';
import { AppRegistry, View, Text } from 'react-native';
import Header from './src/Header';
import ListContainer from './src/ListContainer';

const App = () => {
    return (
        <View>
          <Header headerText={ 'Hacker News' }/>
          <ListContainer />
        </View>
    );
  };
  

AppRegistry.registerComponent("hacker_news_app", () => App);
