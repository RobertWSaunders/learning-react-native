import React, {Component} from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

export default class ListItem extends Component {

  renderDescription() {
    if (this.props.library.id === this.props.selectedLibraryId) {
      return (
        <Text>{this.props.library.description}</Text>
      );
    }
  }

  redner() {

    const { title, id } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress{() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = (state) => {
  return {
    selectedLibraryId: state.selectedLibraryId
  };
};

export default connect(mapStateToProps, actions)(ListItem);
