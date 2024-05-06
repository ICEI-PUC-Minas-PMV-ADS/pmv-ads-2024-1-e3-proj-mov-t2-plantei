import { View, StyleSheet, Text, Image, ScrollView } from "react-native";

import NavigationBarBottom from "../components/NavigationBarBottom";
import NavigationBar from "../components/NavigationBar";
import Theme from "../style/Theme";

export default function ArticlesHome() {
  // Suponha que você tenha uma lista de artigos em destaque com URLs das imagens
  const featuredArticles = [
    {
      title: "Descubra 10 Plantas Brasileiras Irresistíveis para sua Casa",
      
      imageUrl: require("../../assets/PLANTAS.png"), // Caminho relativo para a imagem
    },
    {
      title: "Dicas e Truques para Rega, Adubação e Troca de Vaso",

      imageUrl: require("../../assets/PLANTAS2.png"), // Caminho relativo para a imagem
    },
    {
      title: "Dicas e Truques para Rega, Adubação e Troca de Vaso",

      imageUrl: require("../../assets/PLANTAS3.png"), // Caminho relativo para a imagem
    },
    
  ];

  return (
    <>
      <NavigationBar title="Guia verde" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Artigos em destaque</Text>
        {/* Mapeie a lista de artigos em destaque e renderize cada um */}
        {featuredArticles.map((article, index) => (
          <View key={index} style={styles.articleContainer}>
            <Image
              source={article.imageUrl}
              style={styles.articleImage}
              resizeMode="cover" // Ajusta a imagem para cobrir toda a área
            />
            <Text style={styles.articleTitle}>{article.title}</Text>
            <Text style={styles.articleContent}>{article.content}</Text>
          </View>
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
    color:Theme.colors.secondary,
  },
  articleContainer: {
    borderWidth: 0.2,
    borderRadius:10,
    borderColor: Theme.colors.secondary,
    
    marginBottom: 10,
  },
  articleImage: {
    width: "100%",
    borderRadius:10,
    marginBottom: 15,
  },
  articleTitle: {
    fontSize: 14,
    color:Theme.colors.secondary,
    marginHorizontal:20,
  },
  articleContent: {
    fontSize: 16,
  },
});