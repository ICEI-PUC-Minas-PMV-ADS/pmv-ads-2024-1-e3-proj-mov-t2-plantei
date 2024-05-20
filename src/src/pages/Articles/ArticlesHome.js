import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavigationBarBottom from "../../components/NavigationBarBottom";
import NavigationBar from "../../components/NavigationBar";
import Theme from "../../style/Theme";
import api from "../../services/api";

export default function ArticlesHome() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [expandedArticles, setExpandedArticles] = useState([]); // Estado para controlar se cada artigo está expandido
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchArticles() {
      try {
        const response = await api.get("/articles");
        setFeaturedArticles(response.data);
        // Inicialize o estado expandido com false para cada artigo
        setExpandedArticles(new Array(response.data.length).fill(false));
      } catch (error) {
        console.error("Erro ao buscar artigos:", error);
      }
    }

    fetchArticles();
  }, []);

  const toggleArticle = (index) => {
   
    const newExpandedArticles = [...expandedArticles];
    newExpandedArticles[index] = !newExpandedArticles[index];
    setExpandedArticles(newExpandedArticles);
  };

  const navigateToArticle = (article) => {
    navigation.navigate("ArticlesView", { article });
  };

  return (
    <>
      <NavigationBar title="Guia verde" />
      <ScrollView style={styles.scroll}>
        <Text style={styles.title}>Artigos em destaque</Text>

        {featuredArticles.map((article, index) => (
          <TouchableOpacity key={index} style={styles.articleContainer} onPress={() => navigateToArticle(article)}>
            <Image
              style={{ width: '100%', height: 150, borderRadius: 12, }}
              source={{ uri: article.imagem }}
              resizeMode="cover"
            />
            <Text style={styles.articleTitle}>{article.titulo}</Text>
            <TouchableOpacity onPress={() => toggleArticle(index)}>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}

      </ScrollView>
      <NavigationBarBottom />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,

  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "left",
    fontWeight: "bold",
    color: Theme.colors.secondary,
  },
  articleContainer: {
    borderWidth: 0.2,
    borderRadius: 10,
    borderColor: Theme.colors.secondary,
    marginBottom: 15,
  },
  articleTitle: {
    fontSize: 14,
    color: Theme.colors.secondary,
    marginHorizontal: 20,
    marginVertical: 10,

  },
  articleContent: {
    fontSize: 16,
    marginHorizontal: 20,
  },
  toggleButton: {
    fontSize: 14,
    color: "blue",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  scroll: {
    padding: 30,
    marginBottom: 100,
  }
});
