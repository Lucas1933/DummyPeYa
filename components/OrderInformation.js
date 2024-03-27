import { Image, StyleSheet, View, Text } from "react-native";
export default function OrderInformation({ orderDetails }) {
  const { number, hashtag, clientName, items } = orderDetails;
  return (
    <View style={styles.orderContainer}>
      <View style={{ marginHorizontal: 20 }}>
        <Text style={{ fontWeight: "300", color: "black" }}>
          Detalles de la orden
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 20, marginVertical: 7 }}>
          {number + " " + hashtag}
        </Text>
        <Text style={{ fontSize: 15, fontWeight: "400" }}>{clientName}</Text>

        <View
          style={{
            marginVertical: 15,
            marginBottom: 25,
            borderRadius: 8,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "grey",
            paddingVertical: 7,
          }}
        >
          <Image
            style={{ height: 15, width: 15, marginRight: 5 }}
            source={require("../assets/icons/clock.png")}
          ></Image>
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Demorado desde 2m
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: "#ea034d",
          fontSize: 18,
          fontWeight: "bold",
          marginHorizontal: 20,
        }}
      >
        Esconder el elemento del pedi...
      </Text>

      {items.map((eachItem, index) => (
        <View
          style={{
            marginHorizontal: 15,
            marginTop: 30,
            paddingBottom: 20,
            marginBottom: 15,
            flexDirection: "row",
            borderStyle: "solid",
            borderLeftWidth: 2,
            borderColor: "rgba(211, 208, 211, 0.79)",
            justifyContent: "space-evenly",
          }}
          key={index}
        >
          <Text style={{ fontWeight: "bold" }}>{eachItem.quantity}</Text>
          <View
            style={{
              flexDirection: "row",

              width: 50,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "justify",

                flexWrap: "wrap",
              }}
            >
              {eachItem.name}
            </Text>
          </View>

          <Text>{eachItem.price + ",00 $"}</Text>
        </View>
      ))}

      <View
        style={{
          borderStyle: "solid",
          marginLeft: 15,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingVertical: 10,
          borderColor: "rgba(211, 208, 211, 0.79)",
        }}
      >
        <Text style={{ fontWeight: "300" }}>Pago</Text>
        <Text style={{ marginTop: 7, marginBottom: 15, fontSize: 16 }}>
          No pagar en el local
        </Text>
      </View>

      <View
        style={{
          flexDirection: "column",
          aligContent: "center",
          justifyContent: "center",
          flex: 1,
          borderStyle: "solid",
          borderWidth: 2,
          borderColor: "rgba(211, 208, 211, 0.79)",
          borderRadius: 20,
          marginHorizontal: 20,
          marginTop: 10,
          paddingVertical: 20,
        }}
      >
        <Text style={{ textAlign: "center", marginBottom: 20, fontSize: 19 }}>
          ¿Como es la experiencia de retiro?
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 60, height: 60, marginRight: 50 }}
            source={require("../assets/icons/sad.png")}
          ></Image>
          <Image
            style={{ width: 60, height: 60 }}
            source={require("../assets/icons/happy.png")}
          ></Image>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderContainer: {
    height: "90%",
    marginTop: 20,
    marginHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 100,

    borderRadius: 30,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5,
    },

    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 20, // This pr
    zIndex: 5,
  },
});
