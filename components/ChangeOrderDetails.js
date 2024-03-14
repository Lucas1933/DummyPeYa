import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { OrderChangeDataContext } from "context/OrderChangeDataContext";
import { useContext, useState } from "react";
import { OrderContext } from "context/OrderContext";
export default function ChangeOrderDetails() {
  const handleChangeOrderData = useContext(OrderChangeDataContext);
  const orderData = useContext(OrderContext);
  const [restaurantName, setRestaurantName] = useState(
    orderData.restaurantName
  );
  const [orderNumber, setOrderNumber] = useState(orderData.number);
  const [orderHashtag, setOrderHashtag] = useState(orderData.hashtag);
  const [clientName, setClientName] = useState(orderData.clientName);
  const [items, setItems] = useState([{}]);
  const [orderIsReady, setOrderIsReady] = useState(false);

  const handleChangeOrderDetails = () => {
    const orderDetails = {
      restaurantName,
      number: orderNumber,
      hashtag: orderHashtag,
      clientName,
      items: [{ quantity: 1, name: "pastel de papa", price: 50000 }],
    };
    handleChangeOrderData(orderDetails);
  };
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <Text style={styles.inputName}>• Restaurant name</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setRestaurantName}
          value={restaurantName}
          autoCapitalize="words"
        />
      </View>
      <Text style={styles.inputName}>• Order number</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setOrderNumber}
          value={orderNumber}
          maxLength={10}
          keyboardType="numeric"
        />
      </View>
      <Text style={styles.inputName}>• Order Hashtag</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setOrderHashtag}
          value={orderHashtag}
          maxLength={7}
        />
      </View>
      <Text style={styles.inputName}>• Client name</Text>
      <View style={styles.input}>
        <TextInput onChangeText={setClientName} value={clientName} />
      </View>
      <Button
        title="Change order details"
        onPress={handleChangeOrderDetails}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderStyle: "solid",
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  inputName: { textAlign: "center", fontWeight: "bold", fontSize: 20 },
});
