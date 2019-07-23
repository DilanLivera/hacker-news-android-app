import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Article extends Component {
  constructor(props){
    super(props);
  }

  render(){
    let { title , by } = this.props.story;
    return(
      <View style={ styles.articleContainerStyles }>
        <Text>{ title }</Text>
        <Text style={ styles.authorStyles }>
          by
          <Text style={ styles.byStyles }> { by } </Text>
        </Text>
      </View>
    );
  }
}

const styles = {
  authorStyles: {
    fontStyle: "italic"
  },
  byStyles: {
    fontWeight: "bold"
  },
  articleContainerStyles: {
    fontSize: 15,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
}

export default Article;