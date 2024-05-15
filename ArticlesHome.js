import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import NavigationBar from "../../components/NavigationBar";
import Theme from "../../style/Theme";
import articlesData from "../../../db/db.json";

export default function ArticlesHome() {
  return (
    <>
      <NavigationBar title="Guia verde" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Artigos em destaque</Text>
        {articlesData.articles.map((article) => (
          <View key={article.id} style={styles.articleContainer}>
            
            <Image
              source={{ uri: article.imagem }}
              style={styles.articleImage}
              resizeMode="cover"
            />
            <Text style={styles.articleTitle}>{article.titulo}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 40,
    textAlign: "left",
    fontWeight: "bold",
    color: Theme.colors.secondary,
  },
  articleContainer: {
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: Theme.colors.secondary,
    marginBottom: 20,
  },
  articleImage: {
    height: 200,
    width: "100%",
    borderRadius: 10,
    marginBottom: 15,
  },
  articleTitle: {
    fontSize: 16,
    
    color: Theme.colors.secondary,
    marginHorizontal: 20,

    marginBottom:15,
  },
});
