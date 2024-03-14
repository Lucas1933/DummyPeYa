import Order from "components/Order";
import { OrderContext } from "context/OrderContext";
import { OrderChangeDataContext } from "context/OrderChangeDataContext";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import ChangeOrderDetails from "components/ChangeOrderDetails";

export default function App() {
  const Stack = createNativeStackNavigator();
  const [orderData, setOrderData] = useState({
    restaurantName: "restaurant name here",
    number: "202020202",
    hashtag: "(#6628)",
    clientName: "Jhon Doe",
    items: [],
  });
  return (
    <OrderContext.Provider value={orderData}>
      <OrderChangeDataContext.Provider value={setOrderData}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Order"
              component={Order}
            />
            <Stack.Screen
              name="ChangeOrderDetails"
              component={ChangeOrderDetails}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </OrderChangeDataContext.Provider>
    </OrderContext.Provider>
  );
}

const styles = StyleSheet.create({});
