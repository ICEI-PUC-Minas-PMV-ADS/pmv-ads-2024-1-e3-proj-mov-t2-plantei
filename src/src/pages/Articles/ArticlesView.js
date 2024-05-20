import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import NavigationBar from "../../components/NavigationBar";
import Theme from "../../style/Theme";

export default function ArticleView({ route }) {
  const { article } = route.params;

  return (
    <>
      <NavigationBar title="Guia verde" />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          style={{ width: "120%", height: 200, marginHorizontal: -30, }}
          source={{ uri: article.imagem }}
          resizeMode="cover"
        />

        <Text style={styles.title}>{article.titulo}</Text>
        <Text style={styles.content}>{article.conteudo}</Text>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    padding: 30,
    paddingTop: 0,
  },

  title: {
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.colors.secondary,
  },

  content: {
    fontSize: 16,
    color: Theme.colors.secondary,
  },
});
