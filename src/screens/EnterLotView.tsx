import React from "react";
import { View, StyleSheet, Dimensions } from "react-native"
import EnterLotController from "./EnterLotController";
import { TextInput, Button, HelperText } from 'react-native-paper';
let deviceWidth = Dimensions.get('window').width

export default class EnterLotView extends EnterLotController {
    render() {
        return (
            <View style={styles.view}>
                <View style={styles.separator}></View>

                <View>
                    <TextInput
                    style={styles.inputStyle}
                    label="Enter Lot"
                    autoComplete={false}
                    value={this.state.strLot}
                    onChangeText={(text: string) => this.onChangeTextNumLot(text)}
                    keyboardType={"numeric"}
                />
                <HelperText style={{ marginVertical: 10 }} type="error">
                    {this.state.error}
                </HelperText>
                </View>
                <View style={styles.separator}></View>
                <Button mode="contained" onPress={() => {
                    this.onPressSubmit();
                }}>
                    Submit
                </Button>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    separator: {
        height: 20,
    },
    inputStyle: {
        width: deviceWidth * 0.5,
        height: 50
    }
});