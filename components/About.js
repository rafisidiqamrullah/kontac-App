import React from 'react';
import { Text, View, StyleSheet, Image, FlatList, Button } from 'react-native';

const contacts = [
  { id: '1', judul: 'alif', telpon: '0865535561', gambar: require('../assets/choper.jpg') },
  { id: '2', judul: 'elvan', telpon: '08655335681', gambar: require('../assets/usop.jpg') },
  { id: '3', judul: 'noval', telpon: '085535531', gambar: require('../assets/jimbe.jpg') },
  { id: '4', judul: 'fauzul', telpon: '0865535561', gambar: require('../assets/L.jpg') },
  { id: '5', judul: 'pascal', telpon: '085535531', gambar: require('../assets/sanji.jpg') },
  { id: '6', judul: 'rafi', telpon: '09065535091', gambar: require('../assets/zolo.jpg') },
  { id: '7', judul: 'rifki', telpon: '085535531', gambar: require('../assets/bruok.jpg') },
];

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detil informasi</Text>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Image source={item.gambar} style={styles.image} />
            <View style={styles.contactInfo}>
              <Text style={styles.contactName}>{item.judul}</Text>
              <Text style={styles.contactTel}>{item.telpon}</Text>
            </View>
          </View>
        )}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactTel: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
  },
});

export default About;
