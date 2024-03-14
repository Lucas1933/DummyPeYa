import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";
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
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [orderIsReady, setOrderIsReady] = useState(false);

  const handleChangeOrderDetails = () => {
    const item = { quantity: itemQuantity, name: itemName, price: itemPrice };
    const items = orderData.items;
    items.push(item);
    const orderDetails = {
      restaurantName,
      number: orderNumber,
      hashtag: orderHashtag,
      clientName,
      items,
    };
    handleChangeOrderData(orderDetails);
  };

  return (
    <ScrollView
      style={{
        height: "100%",
      }}
    >
      {/* restaurant name input */}
      <Text style={styles.inputName}>• Restaurant name</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setRestaurantName}
          value={restaurantName}
          autoCapitalize="words"
        />
      </View>
      {/* order number input */}
      <Text style={styles.inputName}>• Order number</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setOrderNumber}
          value={orderNumber}
          maxLength={10}
          keyboardType="numeric"
        />
      </View>
      {/* order hashtag input */}
      <Text style={styles.inputName}>• Order Hashtag</Text>
      <View style={styles.input}>
        <TextInput
          onChangeText={setOrderHashtag}
          value={orderHashtag}
          maxLength={7}
        />
      </View>
      {/* client name input */}
      <Text style={styles.inputName}>• Client name</Text>
      <View style={styles.input}>
        <TextInput onChangeText={setClientName} value={clientName} />
      </View>
      {/* items input */}
      <Text style={styles.inputName}>• Items</Text>
      <Text>Quantity</Text>
      <View style={styles.input}>
        <TextInput onChangeText={setItemQuantity} value={itemQuantity} />
      </View>
      <Text>Name</Text>
      <View style={styles.input}>
        <TextInput onChangeText={setItemName} value={itemName} />
      </View>
      <Text>Price</Text>
      <View style={styles.input}>
        <TextInput onChangeText={setItemPrice} value={itemPrice} />
      </View>
      <Button
        title="Change order details"
        onPress={handleChangeOrderDetails}
      ></Button>
    </ScrollView>
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
