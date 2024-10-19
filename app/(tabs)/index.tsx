import React, { useEffect, useState } from 'react';
import * as SQLite from 'expo-sqlite';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { colors } from "../../constants/Colors";
import { router } from "expo-router";

interface Imovel {
  id: number;
  title: string;
  price: number;  
  local: string;  
  info: string;
  image: any;
}

// Use openDatabase para abrir o banco de dados
const db = SQLite.openDatabaseSync('meudatabase.db');

const setupDatabase = async () => {
  // Configura o banco de dados
  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS test1 (
      id INTEGER PRIMARY KEY NOT NULL,
      nome TEXT NOT NULL,
      preco INTEGER NOT NULL,
      endereco TEXT NOT NULL,
      descricao TEXT NOT NULL
    );
  `);
};

const fetchImoveis = async () => {
  return new Promise<Imovel[]>((resolve, reject) => {
    db.getAllAsync('SELECT * FROM test1').then((rows) => {
      const imoveis: Imovel[] = rows.map((row: any) => ({
        id: row.id,
        title: row.nome,
        price: row.preco,
        local: row.endereco,
        info: row.descricao,
        image: imageMap[row.id], // Mapeia a imagem com base no ID
      }));
      resolve(imoveis);
    }).catch(reject);
  });
}

// Mapeamento de IDs para imagens
const imageMap: { [key: number]: any } = {
  1: require('../../assets/images/imovel_1.jpg'),
  2: require('../../assets/images/imovel_2.jpg'),
  3: require('../../assets/images/imovel_3.jpg'),
  // Adicione mais mapeamentos conforme necessário
};

export default function Home() {
  const [imoveis, setImoveis] = useState<Imovel[]>([]);

  useEffect(() => {
    const initializeDatabase = async () => {
      await setupDatabase(); // Configura o banco de dados
      fetchImoveis().then(setImoveis).catch(console.error);
    };
    initializeDatabase();
  }, []);

  const handlePress = (imovel: Imovel) => {
    // Navegação para detalhes do imóvel
    router.push({
      pathname: "/house/[id]", 
      params: { id: imovel.id },
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/images/imagem_home.jpg")}
          style={styles.imagem}
        >
          <View style={styles.overlay}>
            <Text style={styles.textoHome}>Encontre seu lugar</Text>
          </View>
        </ImageBackground>

        {/* Exibe as propriedades */}
        {imoveis.map((imovel) => (
          <TouchableOpacity
            key={imovel.id}
            style={styles.caixaVertical}
            onPress={() => handlePress(imovel)} // Adiciona a função de navegação
          >
            <Image source={imovel.image} style={styles.imagemVertical} />
            <View style={styles.textContainer}>
              <Text style={styles.textoCaixaVertical}>{imovel.title}</Text>
              <Text style={styles.infoText}>{imovel.info}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  barra: {
    width: "90%",
    height: 7,
    backgroundColor: colors.escuro,
    marginVertical: 20,
  },
  textoHome: {
    position: "absolute",
    marginLeft: 150,
    bottom: 20,
    left: 0,
    right: 0,
    textAlign: "center",
    color: colors.branco,
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 180,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 0,
    backgroundColor: colors.bg,
  },
  imagem: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    bottom: 20,
    elevation: 5,
  },
  caixaVertical: {
    flexDirection: "row",
    width: "95%",
    height: 100,
    backgroundColor: colors.cinza,
    marginBottom: 10,
    borderRadius: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 10,
    elevation: 5,
  },
  textoCaixaVertical: {
    fontSize: 18,
    color: colors.escuro,
    marginTop: 20,
    fontWeight: "bold",
  },
  imagemVertical: {
    width: 100,
    height: "80%",
    resizeMode: "cover",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    fontSize: 13,
    marginBottom: 10,
    color: colors.escuro,
    marginTop: 5,
    lineHeight: 18,
    maxWidth: "90%",
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
});
