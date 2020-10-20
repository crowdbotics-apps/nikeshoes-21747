import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { TextInput_7: "" }

  render = () => (
    <View style={styles.View_1}>
      <Image
        resizeMode="center"
        source={{
          uri:
            "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/images-1.jpg"
        }}
        style={styles.Image_3}
      />
      <TextInput
        placeholder="Type an item to search"
        style={styles.TextInput_7}
        value={this.state.TextInput_7}
        onChangeText={nextValue => this.setState({ TextInput_7: nextValue })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: { height: 200, alignItems: "center" },
  View_1: { height: 200, alignItems: "center" },
  View_3: { height: 200, alignItems: "center" },
  View_1: { height: 200, alignSelf: "flex-start", alignItems: "center" },
  Image_3: { width: 303, height: 130 },
  TextInput_7: { marginTop: 8, marginBottom: 15 }
})
