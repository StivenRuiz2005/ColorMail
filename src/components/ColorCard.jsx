// src/components/ColorCard.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Proptypes from 'prop-types';

const ColorCard = ({ color }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.colorBox, { backgroundColor: color.hex }]} />
      <View style={styles.info}>
        <Text style={styles.name}>{color.name}</Text>
        <Text style={styles.code}>{color.hex}</Text>
        <Text style={styles.code}>{color.rgb}</Text>
      </View>
    </View>
  );
};

ColorCard.propTypes = {
  color: Proptypes.shape({
    id: Proptypes.string.isRequired,
    name: Proptypes.string.isRequired,
    hex: Proptypes.string.isRequired,
    rgb: Proptypes.string.isRequired,
  }).isRequired,
};

export default ColorCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    elevation: 2,
  },
  colorBox: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  code: {
    color: '#555',
  },
});
