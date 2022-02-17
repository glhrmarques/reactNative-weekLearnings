import { Text, Pressable, Alert } from 'react-native'

//create a function
cosnt alertCard = () => Alert.alert("Title", "Message",
  [
    //First Button 
    { text: "Something 001", onPress: () => console.log("Something 001 has been pressed") },
    //Second Button
    { text: "Something 002", onPress: () => console.log("Something 002 has been pressed"}
  ]   
);

return (
  <Pressable onPress={ () => alertCard()} hitSlop={50}>
    <Text>This is a button, press me </Text>
  </Pressable>
)
