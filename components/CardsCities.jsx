import React from "react";
import { View, FlatList, SafeAreaView, Dimensions, StyleSheet, Image, Text, Button } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const ANCHO_CONTENEDOR = width * 0.7
const ESPACIO = 10

export default function CardsCities({ input, cities, navigation }){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(citiesActions.filterCities(input))
    },[input])

    const filterRedux = useSelector(store => store.citiesReducers.filterCity)

    let Data = input ? filterRedux : cities

    return(
        <SafeAreaView style={{height: 800, paddingBottom: 170}}>
            {Data?.length > 0 ?
            <FlatList
            data={Data}
            keyExtractor={(item) => item._id}
            renderItem={({ item, index }) => {
                return(
                    <View style={{width: ANCHO_CONTENEDOR, paddingBottom: 40}}>
                        <View style={{
                            marginHorizontal: ESPACIO,
                            padding: ESPACIO,
                            borderRadius: 34,
                            backgroundColor: "#3ab588",
                            alignItems: "center",
                        }}>
                            <Image source={{ uri:item.image }} style={styles.posterImage} />
                            <Text>{item.cityname}</Text>
                            <Text>{item.country}</Text>
                            <Button onPress={() => navigation.navigate('city')} title="See more"></Button>
                        </View>
                    </View>
                    )
                }}
            /> : <Text style={{fontSize:100}}>Not Found!</Text> }
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    posterImage: {
        width: "100%",
        height: ANCHO_CONTENEDOR ,
        resizeMode: "cover",
        borderRadius: 24,
        margin: 0,
        marginBottom: 10,
    }
})