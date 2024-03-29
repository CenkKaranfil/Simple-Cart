import React from "react";
import { View, StyleSheet, Button, Text, Image, FlatList } from "react-native";


import Products from "./Products";

import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    selectCart,
} from "../redux/CartReducer";

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();


    const handleAdd = (e) => {
        dispatch(addToCart(e))
        alert("Item added to cart")
    };




    const renderProduct = ({ item }) => {
        return (
            <View style={styles.card}>
                <Image style={styles.image} source={item.image} />
                <Text style={styles.text}> {item.name} </Text>
                <Text style={styles.text}> {item.price} </Text>
                <Button
                    title="Add to Cart"
                    key={item.key}
                    onPress={() => handleAdd(item)}

                />
            </View>)

    };

    return (
        <View style={styles.container}>
            <FlatList
                data={Products}
                numColumns={2}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.text}>Men's Wear</Text>
                        <Button title="My Cart" onPress={() => navigation.navigate('CartScreen')} />
                    </View>
                }
            />
        </View>
    );
};

export default HomeScreen;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,

    },
    card: {
        flex: 0.5,
        margin: 8,
        marginTop: 10,
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        alignItems: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
        marginHorizontal: 8,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    text: {
        fontSize: 18,


    },

});
