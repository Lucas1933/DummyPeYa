import { Image, Text, View, StyleSheet } from "react-native";

export default function RestaurantName() {
  return (
    <View style={styles.restaurantNameContainer}>
      <Text style={styles.restaurantNameText}>
        Doña Lola Rotiseria - Pal...
      </Text>
      <Image
        style={styles.dotsIcon}
        source={require("../assets/icons/dots-3-horizontal-svgrepo-com.png")}
      ></Image>
      <Image
        style={styles.mapIcon}
        source={require("../assets/icons/map-svgrepo-com.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantNameContainer: {
    flexDirection: "row",
    height: "6%",

    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    top: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 20, // This pr
    zIndex: 4,
  },
  restaurantNameText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
    marginTop: 5,
    paddingBottom: 10,
  },

  dotsIcon: { width: 30, height: 30, marginHorizontal: 10 },
  mapIcon: { width: 28, height: 28, marginHorizontal: 10 },
});
