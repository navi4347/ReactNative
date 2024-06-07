import * as React from 'react';
import { Appbar } from 'react-native-paper';


const TopAppBar = () => (
  <Appbar.Header style={{ backgroundColor: '#0296F0' }}>
      <Appbar.Content title='SWASTHA' titleStyle={{ color: 'white' }} />
      <Appbar.Action icon="bell-outline" onPress={() => {}} color='white' />
    </Appbar.Header>
);

export default TopAppBar;