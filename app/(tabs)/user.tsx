import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header com o ícone do usuário */}
      <View style={styles.header}>
        <Ionicons name="person-circle-outline" size={80} color="#000" />
        <Text style={styles.userText}>Usuário</Text>
      </View>

      {/* Botões de Notificações, Premium e Suporte */}
      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Ionicons name="notifications-outline" size={24} color="#000" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Notificações</Text>
            <Text style={styles.subText}>Central de notificações</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Ionicons name="settings-outline" size={24} color="#000" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Informações</Text>
            <Text style={styles.subText}>Edite suas informações</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Ionicons name="help-circle-outline" size={24} color="#000" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Suporte</Text>
            <Text style={styles.subText}>Tire suas dúvidas</Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <View style={styles.buttonContent}>
          <Ionicons name="phone-portrait-outline" size={24} color="#000" />
          <View style={styles.buttonTextContainer}>
            <Text style={styles.buttonText}>Entre em contato</Text>
            <Text style={styles.subText}>Caso queira entrar em contato</Text>
          </View>
        </View>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userText: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#fff',
    width: '90%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextContainer: {
    marginLeft: 15,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
});

export default UserScreen;
