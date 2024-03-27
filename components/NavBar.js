import { Image, StyleSheet, View, Text, Pressable } from "react-native";

export default function NavBar({ handleChangeOrderDetails }) {
  return (
    <View style={styles.navBar}>
      <Image
        style={styles.burgerIcon}
        source={require("../assets/icons/burger-menu-svgrepo-com.png")}
      ></Image>
      <Text style={styles.navBarText}>Punto de retiro</Text>
      <Pressable onPress={handleChangeOrderDetails}>
        <Image
          style={styles.headphoneIcon}
          source={require("../assets/icons/headphones.png")}
        ></Image>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    height: "8%",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 21,
    zIndex: 10, // This pr
  },

  navBarText: {
    textAlign: "center",
    marginHorizontal: 30,
    fontSize: 22,
    fontWeight: "bold",
  },
  burgerIcon: { width: 27, height: 27 },
  headphoneIcon: { width: 25, height: 25 },
});
