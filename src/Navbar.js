import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({ title }) => {
    return (
        <View style={style.navbar}>
            <Text style={style.text}>{title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})