import { Pressable, View, Text } from "react-native";
export default function ConfirmOrderButton() {
  return (
    <Pressable
      style={{
        backgroundColor: "#ea034d",
        marginHorizontal: 30,
        padding: 30,
        paddingVertical: 20,
        marginBottom: 30,
        borderRadius: 25,
      }}
      onPress={() => {
        console.log("not gonna show");
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
