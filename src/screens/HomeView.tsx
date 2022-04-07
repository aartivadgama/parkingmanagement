import React from "react";
import { View, StyleSheet, FlatList, Dimensions } from "react-native"
import { Button, Text } from "react-native-paper";
import HomeController from "./HomeController";
import { lot } from "../model/lot";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Paragraph, Dialog, TextInput, HelperText } from 'react-native-paper';

let deviceWidth = Dimensions.get('window').width;
let column: number = 3;
let columnHeight: number = 120;

export default class HomeView extends HomeController {

    renderItem = (item: lot) => {
        console.log("item", item)
        return (
            <View style={styles.viewStyle}>
                <Text>y{item.id}</Text>
            </View>
        );
    }

    render() {
        console.log("Hiiiii, this.state.arrLot", this.state.arrLot.length);
        return (
            <View style={styles.view}>
                <View style={styles.separator} />
                <View style={styles.viewAddCar}>
                    <View>
                        <TextInput
                            style={styles.inputStyle}
                            label="Enter Car Number"
                            autoComplete={false}
                            value={this.state.carNumber}
                            onChangeText={(text: string) => this.onChangeTextNumLot(text)}
                        />
                        <HelperText style={{ marginVertical: 10 }} type="error">
                            {this.state.error}
                        </HelperText>
                    </View>
                    <Button style={{ height: 40 }} mode="contained" onPress={() => {
                        this.onPressAddCar();
                    }}>
                        Add Car
                    </Button>
                </View>
                <View style={styles.separator} />

                <FlatList
                    style={{ width: deviceWidth * 0.8 }}
                    extraData={this.state}
                    data={this.state.arrLot}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={styles.viewStyle}>
                                <Text style={{textAlign: "right", alignSelf:"flex-start"}}>P{item.id}</Text>
                                {item.isAlloted &&
                                    <Button icon="logout" onPress={() => {
                                        this.onPressExitCar(index);
                                    }}>
                                        Exit
                                    </Button>
                                }
                                {item.isAlloted ?
                                    <Icon name="car" size={35} color="#00000" />
                                    : <Icon name="close" size={35} color="#696969" />

                                }
                                {item.isAlloted && <Text>No: {item.carNum}</Text>}
                            </View>
                        );
                    }}
                    numColumns={column}
                    keyExtractor={(item, index) => index.toString()}
                />

                <Dialog visible={this.state.showDialog} onDismiss={() => {
                    this.setState({ showDialog: false })
                }}>
                    <Dialog.Title>Sorry</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>Parking is full</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => {
                            this.setState({ showDialog: false })
                        }}>Done</Button>
                    </Dialog.Actions>
                </Dialog>

                <Dialog visible={this.state.showPaymentDialog} onDismiss={() => { }}>
                    <Dialog.Title>Exit Car</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{this.state.dialogMsg}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => {
                            this.setState({ showPaymentDialog: false });
                        }}>PAY</Button>
                    </Dialog.Actions>
                </Dialog>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white',
    },
    viewAddCar: {
        flexDirection: "row",
    },
    separator: {
        height: 20,
    },
    viewStyle: {
        height: columnHeight,
        margin: 10,
        padding: 10,
        backgroundColor: "#d1d1d1",
        alignItems: "center",
        justifyContent: "center",
        width: ((deviceWidth * 0.7) - (column * 10)) / column,
    },
    icon: {
        height: columnHeight,
        margin: 10,
        padding: 10,
        width: ((deviceWidth * 0.7) - (column * 10)) / column,
    },
    inputStyle: {
        width: deviceWidth * 0.7,
        height: 50
    }
});