import React from 'react';
import { View } from 'react-native';

const styles = {
  container: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  },
};

const CardSection = props => <View style={styles.container}>{props.children}</View>;

export default CardSection;
