import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import colorPalettes from '../data/colorPalettes';
import { useSavedPalettes } from '../context/SavedPalettesContext';

export default function HomeScreen() {
  const { addPalette } = useSavedPalettes();
  const navigation = useNavigation();

  const renderPalette = ({ item }) => (
    <TouchableOpacity
      style={styles.paletteCard}
      onPress={() => addPalette(item)}
    >
      <Text style={styles.paletteName}>{item.name}</Text>
      <View style={styles.colorsContainer}>
        {item.colors.map((color, index) => (
          <View
            key={index}
            style={[styles.colorBlock, { backgroundColor: color }]}
          />
        ))}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explorar Paletas</Text>
      <FlatList
        data={colorPalettes}
        keyExtractor={(item) => item.id}
        renderItem={renderPalette}
      />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Camera')}
      >
        <Ionicons name="camera" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  paletteCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  paletteName: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  colorsContainer: { flexDirection: 'row' },
  colorBlock: {
    width: 40,
    height: 40,
    borderRadius: 6,
    marginRight: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    backgroundColor: '#007AFF',
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
