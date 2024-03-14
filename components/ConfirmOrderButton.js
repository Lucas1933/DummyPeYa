import { Pressable, View, Text } from "react-native";
export default function ConfirmOrderButton() {
  return (
    <Pressable
      style={{
        backgroundColor: "#ea034d",
        marginHorizontal: 15,
        paddingHorizontal: 50,
        paddingVertical: 20,
        marginBottom: 20,
        borderRadius: 20,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          fontSize: 25,
        }}
      >
        Confirmar Retiro
      </Text>
    </Pressable>
  );
}
