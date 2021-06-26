import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Fab from './components/Fab';

const CounterScreen = () => {
  const [state, setState] = useState(5);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter:{state}</Text>
      <Fab
        title="+1"
        onPress={() => {
          setState(state + 1);
        }}
      />
      <Fab
        title="-1"
        onPress={() => {
          setState(state - 1);
        }}
        position="bl"
      />

      {/* <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => {
          setState(state - 1);
        }}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    top: -15,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 1000,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    // textAlign: 'center',
    alignSelf: 'center',
  },
});

export default CounterScreen;
