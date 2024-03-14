import { View, Text, Pressable } from "react-native";

export default function ConfirmPicKup({
  orderNumber,
  orderHashtag,
  handleConfirmPickup,
}) {
  return (
    <View
      style={{
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.7)",

        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
      }}
    >
      <View
        style={{
          /*   top: 0,
          bottom: 0,
          left: 0,
          right: 0, */
          paddingVertical: 25,
          /* paddingHorizontal: 40, */
          marginHorizontal: 2,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 10,
            height: 5,
          },

          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 20, // This pr
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            marginBottom: 20,
            textAlign: "left",
            marginRight: 30,
          }}
        >
          ¿Confirmas que {"\n"} retiraste el pedido {"\n"} {orderNumber}
          {orderHashtag}?
        </Text>
        <Pressable
          style={{
            backgroundColor: "#ea034d",
            marginHorizontal: 25,
            paddingHorizontal: 60,
            paddingVertical: 15,
            marginBottom: 20,
            borderRadius: 10,
          }}
          onPress={handleConfirmPickup}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Confirmar Retiro
          </Text>
        </Pressable>
        <Text style={{ color: "#ea034d", fontWeight: "bold", fontSize: 20 }}>
          Cancelar
        </Text>
      </View>
    </View>
  );
}
