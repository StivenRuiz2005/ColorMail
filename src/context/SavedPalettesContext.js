import React, { createContext, useState, useContext } from 'react';

const SavedPalettesContext = createContext();

export const SavedPalettesProvider = ({ children }) => {
  const [savedPalettes, setSavedPalettes] = useState([]);

  const addPalette = (palette) => {
    if (!savedPalettes.find(p => p.id === palette.id)) {
      setSavedPalettes([...savedPalettes, palette]);
    }
  };

  const removePalette = (id) => {
    setSavedPalettes(savedPalettes.filter(p => p.id !== id));
  };

  return (
    <SavedPalettesContext.Provider value={{ savedPalettes, addPalette, removePalette }}>
      {children}
    </SavedPalettesContext.Provider>
  );
};

export const useSavedPalettes = () => useContext(SavedPalettesContext);
