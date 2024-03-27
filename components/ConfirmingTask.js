import { View, Text, Image, Animated, Easing } from "react-native";
import { useEffect, useState } from "react";

export default function ConfirmingTask({
  handleIsAnimationEnded,
  handleShowPickupConfirmation,
}) {
  const [spinValue, setSpinValue] = useState(new Animated.Value(0));

  useEffect(() => {
    handleShowPickupConfirmation(false);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      handleIsAnimationEnded(true);
    });
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
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
      <Text style={{ fontWeight: "bold", color: "white" }}>
        Confirmando Tareas...
      </Text>
      <View
        style={{
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "rgba(211, 208, 211, 0.60)",
          marginTop: 20,
        }}
      >
        <Animated.Image
          style={{
            width: 30,
            height: 30,

            transform: [{ rotate: spin }],
          }}
          source={require("../assets/icons/arrows.png")}
        ></Animated.Image>
      </View>
    </View>
  );
}
