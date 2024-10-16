import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  card_container: {
    width: Dimensions.get("window").width * 0.45, // Ekranın %45'i kadar genişlik
    marginHorizontal: 10, // Hem sağ hem sol margin
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 15,
    alignItems: "center", // Kartı ortalamak
    marginBottom: 10,
    paddingBottom: 10,  // Kartın alt kısmına boşluk ekle
    flexDirection: "column", // İçeriği dikeyde hizalayacak
    justifyContent: "space-between", // İçeriği eşit mesafede hizalayacak
  },

  card_image: {
    height: Dimensions.get("window").height / 4,
    width: Dimensions.get("window").width / 2,
    borderRadius: 15,
    padding: 10,
    margin: 10,
    resizeMode: "contain", // Resmin orantılı şekilde sığmasını sağla
  },

  card_title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
    letterSpacing: 0.3,
    textTransform: "uppercase",
    fontFamily: "Roboto",
  },

  card_price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },

  card_inStock: {
    padding: 5,
    fontWeight: "bold",
    fontFamily: "System",
    fontStyle: "normal",
    fontSize: 18,
    textAlign: "right",
    color: "red",
  },

  card_button: {
    backgroundColor: "#FF6F00",
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 25,
    width: "90%", 
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FF6F00",
    transform: [{ scale: 0.98 }],
  },

  card_button_text: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Consolas",
    fontStyle: "normal",
    fontSize: 18,
  },
});
