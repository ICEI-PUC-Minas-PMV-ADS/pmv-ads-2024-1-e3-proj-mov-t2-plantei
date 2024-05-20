import React from "react";
import { View, StyleSheet, Text, Image, ScrollView, Dimensions } from "react-native";

import NavigationBar from "../../components/NavigationBar";
import Theme from "../../style/Theme";

export default function ArticlesView() {
  const screenWidth = Dimensions.get('window').width;

  return (
    <>
      <NavigationBar title="Guia verde" />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../../../assets/PLANTAS.png")}
          style={[styles.articleImage, { width: '140%' }]} 
          resizeMode="cover"
        />
        <Text style={styles.title}>Descubra 10 Plantas Brasileiras Irresistíveis para sua Casa</Text>
        <Text style={styles.subtitle}>
          A rica biodiversidade do Brasil se estende para o mundo das plantas, oferecendo uma variedade incrível de espécies para decorar e dar vida à sua casa. Descubra 10 plantas brasileiras irresistíveis que combinam beleza natural com características únicas, elevando o estilo da sua decoração e criando um ambiente mais verde e relaxante.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.topic}>1. Costela-de-Adão (Monstera deliciosa):</Text>{"\n"}
          - Folhas grandes e fenestradas, criando um visual único e elegante.{"\n"}
          - Fácil de cuidar, ideal para iniciantes na jardinagem.{"\n"}
          - Prefere ambientes internos com luz indireta e solo úmido.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.topic}>2. Jiboia (Epipremnum aureum):</Text>{"\n"}
          - Folhas verde-escuras com bordas douradas, perfeitas para cestos suspensos ou como trepadeira.{"\n"}
          - Adaptável a diferentes condições de luminosidade e solo.{"\n"}
          - Purifica o ar, tornando o ambiente mais saudável.
        </Text>
      </ScrollView> 
      
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 50,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: "bold",
    color: Theme.colors.secondary,
    marginVertical:20,
  },
  subtitle: {
    marginBottom: 20,
    color: Theme.colors.secondary,
    fontSize: 15,
    lineHeight: 24,
  },
  articleImage: {
    height: 200,
    marginHorizontal:-60,
    
  },  
  paragraph: {
    marginBottom: 20,
    color: Theme.colors.secondary,
    fontSize: 15,
    lineHeight: 24,
  },
  topic: {
    fontWeight: "bold",
  },
});
