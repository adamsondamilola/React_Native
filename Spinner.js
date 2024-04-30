import React from "react";
import { StyleSheet, Text, View, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')
import { COLORS, SIZES } from "./theme";
import { ActivityIndicator } from "react-native-paper";

//install react-native-paper

const Loading = (props) => {

      return (
        <View style={styles.container}>
          <View style={{marginBottom: height/2}}>
         <ActivityIndicator size='large' />
         <Text>Please wait...</Text>
         </View>
        </View>
      );
}
export default Loading

const styles = StyleSheet.create({
    container: {
      zIndex: 1000,
      backgroundColor: "#FFF",
      position: 'absolute',
      height: height,
      width: width,
      opacity: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      verticalAlign: 'middle'
    }
  });
