import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function withNavigation(Component) {
  return (props) => <Component {...props} navigation={useNavigation()} />
}
