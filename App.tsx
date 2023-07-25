import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  //Tăng biến đếm
  const incrementCounter = () => {
    //Cập nhật trạng thái của counter lên 1 đơn vị.
    setCounter(prevCounter => prevCounter + 1);

    //Hoặc, có thể viết như sau:
    // let new_counter = counter + 1;
    // setCounter(new_counter);

  };
  const decrementCounter = () => {
    setCounter(prevCounter => prevCounter - 1);

    //Hoặc, có thể viết như sau:
    // let new_counter = counter - 1;
    // setCounter(new_counter);
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 30 }}>Đếm = {counter}</Text>

      <Button title="Tăng biến đếm" onPress={incrementCounter} />
      <Button title="Giảm biến đếm" onPress={decrementCounter} />
    </View>
  );
};

export default App;
