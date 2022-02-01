import React, {useEffect, useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';

import {Routes} from './routes';

export default function Index() {
  const isDarkMode = useColorScheme() === 'dark';
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSignedIn(!signedIn);
    }, 2000);
  }, []);
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Routes signedIn={signedIn} />
    </>
  );
}
