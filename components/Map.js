import { View, Text, Image, StyleSheet } from "react-native";
import MapFooter from "./MapFooter";
export default function Map({ clientName }) {
  return (
    <View>
      <Image
        style={{ height: "100%" }}
        source={require("../assets/icons/map-background.png")}
      ></Image>
      <View
        style={{
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "rgba(0,0,0,0)",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
        }}
      >
        {/* TOP ELEMENTS */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* BURGER MENU AND ROTATING ARROWS */}
          <View style={{ justifyContent: "space-between", paddingTop: 30 }}>
            <View style={styles.iconsContainer}>
              <Image
                style={styles.icons}
                source={require("../assets/icons/burger-menu-svgrepo-com.png")}
              ></Image>
            </View>

            <View style={styles.iconsContainer}>
              <Image
                style={styles.icons}
                source={require("../assets/icons/red-arrows.png")}
              ></Image>
            </View>
          </View>

          {/* STATE */}
          <View
            style={{
              backgroundColor: "white",
              elevation: 21,
              borderRadius: 50,
              paddingHorizontal: 25,
              paddingVertical: 1,
              marginTop: 40,
            }}
          >
            <View
              style={{
                height: 15,
                width: 15,
                borderRadius: 100,
                borderStyle: "solid",
                borderColor: "white",
                borderWidth: 2,
                backgroundColor: "green",
                position: "absolute",
                right: 0,
              }}
            ></View>
            <Text
              style={{ textAlign: "center", color: "grey", marginBottom: 3 }}
            >
              Estado
            </Text>
            <Text
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 18 }}
            >
              Repartiendo
            </Text>
          </View>

          {/* HEADPHONES AND CHAT */}
          <View style={{ paddingTop: 30 }}>
            <View style={styles.iconsContainer}>
              <Image
                style={styles.icons}
                source={require("../assets/icons/headphones.png")}
              ></Image>
            </View>

            <View style={styles.iconsContainer}>
              <Image
                style={styles.icons}
                source={require("../assets/icons/chat.png")}
              ></Image>
            </View>
          </View>
        </View>
        <View
          style={{
            width: "100%",

            alignItems: "flex-end",
            justifyContent: "flex-start",

            paddingRight: 30,
            paddingBottom: 100,
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../assets/icons/compass.png")}
          ></Image>
        </View>
        {/* BOTTOM ELEMENTS */}
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 100,
              borderStyle: "solid",
              borderColor: "white",
              borderWidth: 2,
              backgroundColor: "#4890e5",
            }}
          ></View>
          <Image
            style={{ height: 60, width: 60 }}
            source={require("../assets/icons/client.png")}
          ></Image>
        </View>
        <MapFooter clientName={clientName}></MapFooter>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  icons: { height: 30, width: 30, margin: 10 },
  iconsContainer: {
    borderRadius: 100,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 21,
    marginVertical: 10,
  },
});
