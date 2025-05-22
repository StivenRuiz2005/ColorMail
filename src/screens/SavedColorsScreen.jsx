import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSavedPalettes } from '../context/SavedPalettesContext';


export default function SavedColorScreen() {
  const { savedPalettes ,removePalette } = useSavedPalettes();  

  const renderPalette = ({ item }) => (
    <TouchableOpacity
      style={styles.paletteCard}
      onLongPress={() => removePalette(item.id)}
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
      <Text style={styles.title}>Paletas Guardadas</Text>
      <FlatList
        data={savedPalettes}
        keyExtractor={(item) => item.id}
        renderItem={renderPalette}
        ListEmptyComponent={<Text>No hay paletas guardadas.</Text>}
      />
      <Text style={styles.instruction}>Presiona largo para eliminar una paleta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  paletteCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
  },
  paletteName: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  colorsContainer: { flexDirection: 'row' },
  colorBlock: {
    width: 40,
    height: 40,
    borderRadius: 4,
    marginRight: 10,
  },
  instruction: { marginTop: 10, fontStyle: 'italic', color: 'gray' },
});
