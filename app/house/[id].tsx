import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import * as SQLite from 'expo-sqlite';
import { colors } from '../../constants/Colors';

interface Imovel {
  id: number;
  title: string;
  price: number;
  local: string;
  info: string;
  image: any;
}

export default function ImovelDetalhes() {
  const [imovel, setImovel] = useState<Imovel | null>(null);
  const [loading, setLoading] = useState(true);

  const { id } = useLocalSearchParams();

  useEffect(() => {
    const loadDatabase = async () => {
      const db = await SQLite.openDatabaseAsync('meudb.db');

      if (id) {
        await fetchImovelDetails(db, parseInt(id as string));
      }
    };

    loadDatabase();
  }, [id]);

  const fetchImovelDetails = async (db: any, imovelId: number) => {
    try {
      const rows = await db.getAllAsync('SELECT * FROM tabela_imoveis WHERE id = ?', [imovelId]);
      if (rows.length > 0) {
        const row = rows[0];
        const loadedImovel: Imovel = {
          id: row.id,
          title: row.nome,
          price: row.preco,
          local: row.endereco,
          info: row.descricao,
          image: imageMap[row.id] || null,
        };
        setImovel(loadedImovel);
      }
    } catch (error) {
      console.error("Erro ao buscar os detalhes do imóvel:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsApp = () => {
    const message = `Olá, estou interessado no imóvel ${imovel?.title}.`;
    const url = `whatsapp://send?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() => alert('O WhatsApp não está instalado.'));
  };

  const handleYouTubeVideo = () => {
    const videoUrl = 'https://www.youtube.com/watch?v=agWBxUxQfXk'; 
    Linking.openURL(videoUrl).catch(() => alert('Erro ao abrir o vídeo.'));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primario} />
      </View>
    );
  }

  if (!imovel) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Imóvel não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={imovel.image} style={styles.image} />
      <Text style={styles.title}>{imovel.title}</Text>
      <Text style={styles.price}>Preço: R$ {imovel.price}</Text>
      <Text style={styles.local}>Localização: {imovel.local}</Text>
      <Text style={styles.info}>{imovel.info}</Text>

      <TouchableOpacity style={styles.button} onPress={handleWhatsApp}>
        <Text style={styles.buttonText}>Contactar via WhatsApp</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleYouTubeVideo}>
        <Text style={styles.buttonText}>Ver vídeo no YouTube</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Mapeamento de IDs para imagens
const imageMap: { [key: number]: any } = {
  1: require('../../assets/images/imovel_1.jpg'),
  2: require('../../assets/images/imovel_2.jpg'),
  3: require('../../assets/images/imovel_3.jpg'),
  4: require('../../assets/images/imovel_4.jpg'),
  5: require('../../assets/images/imovel_5.jpg'),
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: colors.bg,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.escuro,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: colors.primario,
    marginBottom: 10,
  },
  local: {
    fontSize: 16,
    color: colors.escuro,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: colors.escuro,
    lineHeight: 22,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: colors.escuro,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primario,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
