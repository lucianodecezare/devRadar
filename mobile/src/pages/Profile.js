import React from 'react';

import { WebView } from 'react-native-webview';

function Profile({ navigation }) {
  const github = navigation.getParam('github');

  return <WebView source={{ uri: `https://github.com/${github}` }} style={{ flex: 1 }} />;
}

export { Profile };
