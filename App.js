import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput} from 'react-native';

export default function App() {
  const [height, setHeight] = useState()

  const popup = () => {
    if (isNaN(height)) {
      console.log(typeof height)
      alert("قدت رو عددی و به اینگلیسی وارد کن گوزو")
    } else if (height === 0) {
      alert("قدتو وارد کن کون گشاد")
    } else if (typeof height === "number") {
      alert(`قد شما ${height} سانتی متر است`)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={{textAlign: "center", fontWeight: 800, fontSize: 20}}>محاسبه گر قدرتمند</Text>
      <TextInput
        placeholder="قد خود را وارد کنید"
        onChangeText={(e) => setHeight(Number(e))}
        style={{padding: 10, borderColor: "green", backgroundColor: "#c9f2e5", borderRadius: 10}}
      />
      <Button color={"#277c8f"}  title='محاسبه' onPress={popup}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center"
    gap: 15,
    padding: 25,
    backgroundColor: '#fff',
  },
});
