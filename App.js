import { useFonts } from "expo-font";
import NavBar from "./components/NavBar.js";
import OrderInformation from "./components/OrderInformation.js";
import RestaurantName from "./components/RestaurantName.js";
import ConfirmOrderButton from "./components/ConfirmOrderButton.js";
import { StyleSheet, ScrollView } from "react-native";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Cabrion-Bold": require("./assets/fonts/Cabrion-Bold.ttf"),
  });

  return (
    <>
      <NavBar></NavBar>

      <ScrollView nestedScrollEnabled={true}>
        <RestaurantName></RestaurantName>
        <ScrollView nestedScrollEnabled={true} style={{ paddingBottom: 20 }}>
          <OrderInformation></OrderInformation>
        </ScrollView>
        <ConfirmOrderButton></ConfirmOrderButton>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({});
