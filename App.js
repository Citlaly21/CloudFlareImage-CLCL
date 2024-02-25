import React from 'react';
import { View } from 'react-native';
import ImagePickerExample from './image'; // Ajusta la ruta según la ubicación real de tu archivo

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImagePickerExample />
    </View>
  );
};

export default App;
