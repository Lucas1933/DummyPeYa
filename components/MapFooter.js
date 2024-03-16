import { View, Text } from "react-native";
export default function MapFooter({ clientName }) {
  return (
    <View
      style={{
        width: "100%",
        height: "50%",

        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: "25%",
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          paddingTop: 10,
          paddingBottom: 30,
        }}
      >
        <View
          style={{
            width: "%100",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "12%",
              height: "25%",
              borderRadius: 50,
              backgroundColor: "grey",
            }}
          ></View>
        </View>
        <View style={{ justifyContent: "flex-end" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              marginLeft: 10,
            }}
          >
            {clientName}
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 17 }}>
              Ir a la direccion del cliente
            </Text>
            <View
              style={{
                paddingHorizontal: 4,
                paddingVertical: 4,
                marginHorizontal: 6,
                marginBottom: 5,
                borderRadius: 100,
                backgroundColor: "black",
              }}
            ></View>
            <Text style={{ fontSize: 15 }}>Llegada en 11 ...</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderTopColor: "rgba(211, 208, 211, 0.79)",
          borderTopWidth: 2,
          height: "25%",
          justifyContent: "center",
          elevation: 5,
          backgroundColor: "white",
          zIndex: 10,
        }}
      >
        <View
          style={{
            backgroundColor: "#ea034d",
            marginHorizontal: 15,
            paddingHorizontal: 30,
            paddingVertical: 18,
            marginBottom: 10,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Continuar con la entrega
          </Text>
        </View>
      </View>
    </View>
  );
}
