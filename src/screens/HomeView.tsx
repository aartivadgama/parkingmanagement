import React from "react";
import {View, StyleSheet} from "react-native"
import HomeController from "./HomeController";

export default class testView extends HomeController {
    render() {
        return(
            <View style={styles.view}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "red",
      },
      separator: {
        height: 20,
      },
});