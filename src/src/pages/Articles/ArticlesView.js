import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import NavigationBar from "../../components/NavigationBar";
import Theme from "../../style/Theme";

export default function ArticleView({ route }) {
  const { article } = route.params;

  return (
    <View style={styles.container}>
      <NavigationBar title="Guia verde" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          style={{ width: "120%", height: 200, marginHorizontal:-10, }}
          source={{ uri: article.imagem }}
          resizeMode="cover"
        />

        <Text style={styles.title}>{article.titulo}</Text>
        <Text style={styles.content}>{article.conteudo}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollViewContent: {
    paddingHorizontal: 10, 
    paddingVertical: 50, 
  },
  title: {
    fontSize: 20,
    marginBottom: 20, 
    fontWeight: "bold",
    color: Theme.colors.secondary,
    padding: 30,
    marginVertical:-10,
  },
  content: {
    fontSize: 16,
    color: Theme.colors.secondary,
    padding: 30,
    marginVertical:-60,
  },
});
