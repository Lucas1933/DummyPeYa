import NavBar from "./NavBar.js";
import OrderInformation from "./OrderInformation.js";
import RestaurantName from "./RestaurantName.js";
import ConfirmOrderButton from "./ConfirmOrderButton.js";
import { ScrollView } from "react-native";
import { useContext } from "react";
import { OrderContext } from "context/OrderContext.js";
import { useFonts } from "expo-font";
export default function Order({ navigation }) {
  const orderData = useContext(OrderContext);

  return (
    <>
      <NavBar
        handleChangeOrderDetails={() =>
          navigation.navigate("ChangeOrderDetails")
        }
      ></NavBar>
      <ScrollView nestedScrollEnabled={true}>
        <RestaurantName name={orderData.restaurantName}></RestaurantName>
        <ScrollView nestedScrollEnabled={true}>
          <OrderInformation orderDetails={orderData}></OrderInformation>
        </ScrollView>
        <ConfirmOrderButton></ConfirmOrderButton>
      </ScrollView>
    </>
  );
}
