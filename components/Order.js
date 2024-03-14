import NavBar from "./NavBar.js";
import OrderInformation from "./OrderInformation.js";
import RestaurantName from "./RestaurantName.js";
import ConfirmOrderButton from "./ConfirmOrderButton.js";
import { ScrollView } from "react-native";
import { useContext, useState } from "react";
import { OrderContext } from "context/OrderContext.js";
import ConfirmingTask from "./ConfirmingTask.js";
import ConfirmPicKup from "./ConfirmPickUp.js";
import Map from "./Map.js";
export default function Order({ navigation }) {
  const orderData = useContext(OrderContext);
  const [showPickupConfirmation, setShowPickupConfirmation] = useState(false);
  const [isPickupConfirmed, setIsPickupConfirmed] = useState(false);
  const [
    isConfirmingLoadingAnimationEnded,
    setIsConfirmingLoadingAnimationEnded,
  ] = useState(false);
  console.log("showPickup", showPickupConfirmation);
  console.log("isPickupConfirmed", isPickupConfirmed);
  console.log("isAnimationEnded", isConfirmingLoadingAnimationEnded);
  return (
    <>
      {isConfirmingLoadingAnimationEnded ? (
        <Map></Map>
      ) : (
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
            <ConfirmOrderButton
              confirmPickup={setShowPickupConfirmation}
            ></ConfirmOrderButton>
          </ScrollView>
          {showPickupConfirmation && !isConfirmingLoadingAnimationEnded && (
            <ConfirmPicKup
              orderNumber={orderData.number}
              orderHashtag={orderData.hashtag}
              handleConfirmPickup={setIsPickupConfirmed}
            ></ConfirmPicKup>
          )}
          {isPickupConfirmed && !isConfirmingLoadingAnimationEnded && (
            <ConfirmingTask
              handleIsAnimationEnded={setIsConfirmingLoadingAnimationEnded}
              handleShowPickupConfirmation={setShowPickupConfirmation}
            ></ConfirmingTask>
          )}
        </>
      )}
    </>
  );
}
