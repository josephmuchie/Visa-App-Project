import React, { Component } from 'react';
import { Button, ThemeProvider } from 'react-native-elements';
import { View, Text } from 'react-native';

const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};

