import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './card';
import CardSection from './card_section';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
        <Text>{props.album.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
