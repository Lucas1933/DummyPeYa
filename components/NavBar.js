import { Image, StyleSheet, View, Text } from "react-native";

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <Image
        style={styles.burgerIcon}
        source={require("../assets/icons/burger-menu-svgrepo-com.png")}
      ></Image>
      <Text style={styles.navBarText}>Punto de retiro</Text>
      <Image
        style={styles.headphoneIcon}
        source={require("../assets/icons/headphones-svgrepo-com.png")}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    height: "10%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 20, // This pr
  },

  navBarText: {
    fontFamily: "Cabrion-Bold",
    textAlign: "center",
    marginHorizontal: 30,
    fontSize: 22,
    fontWeight: "bold",
  },
  burgerIcon: { width: 30, height: 30 },
  headphoneIcon: { width: 28, height: 28 },
});
