import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Linking } from "react-native";

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    Linking.openURL(`${data}`);
  };

  if (hasPermission === null) {
    return <Text>Pedindo permissão para abrir a câmera</Text>;
  }
  if (hasPermission === false) {
    return <Text>Não tem acesso para utilizar a camera</Text>;
  }

  return (
    <View>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          width: "100%",
          height: "100%",}}
      />
      {scanned && 
      <Button title={'Ler novamente'} onPress={() => setScanned(false)} />}
    </View>
  );
}