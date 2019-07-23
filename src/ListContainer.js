import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';

class ListContainer extends Component {
  constructor(props){
    super(props);
    this.state = { stories: [] };
  }

  componentDidMount() {
    this.displayStories();
  }

  displayStories() {
    const URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
    const storyUrlBase = 'https://hacker-news.firebaseio.com/v0/item/';

    fetch(URL)
      .then(data => data.json())
      .then(data => data.map(id => {
        const storyUrl = `${storyUrlBase}${id}.json`;
        return fetch(storyUrl).then(data => data.json())
      }))
      .then(promises => Promise.all(promises))
      .then(stories => this.setState({ stories }));
  }

  render() {
    const { stories } = this.state;
    let views = <Text>Loading.....</Text>

    if(stories && stories.length > 0){
      views = stories.map(story => <Text key={ story.id }>{ story.title } by { story.by }</Text>);
    }

    return (
      <ScrollView>
        { views }
      </ScrollView>
    );
  }
}

export default ListContainer;