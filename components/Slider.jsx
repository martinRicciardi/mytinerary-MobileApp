import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, FlatList, Dimensions, Animated, SafeAreaView, Image } from "react-native";
import Data from "../data.json"

const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

const ANCHO_CONTENEDOR = width * 0.7
const ESPACIO_LATERAL = (width - ANCHO_CONTENEDOR) / 2
const ESPACIO = 10


export default function Slider(){
    const scrollX = React.useRef(new Animated.Value(0)).current
    return(
        <SafeAreaView>
            <StatusBar hidden />
            <Animated.FlatList
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX }
                } }], { useNativeDriver: true }
            )}
            data={Data} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 70, marginHorizontal: ESPACIO_LATERAL }}
            decelerationRate={0}
            snapToInterval={ANCHO_CONTENEDOR}
            scrollEventThrottle={16}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
                const inputRange = [
                    (index - 1) * ANCHO_CONTENEDOR,
                    index * ANCHO_CONTENEDOR,
                    (index + 1) * ANCHO_CONTENEDOR,
                ];

                const outputRange = [0, -50, 0];

                const translateY = scrollX.interpolate({
                    inputRange,
                    outputRange,
                });

                    return(
                        <View style={{width: ANCHO_CONTENEDOR}}>
                            <Animated.View style={{
                                marginHorizontal: ESPACIO,
                                padding: ESPACIO,
                                borderRadius: 34,
                                backgroundColor: "#3ab588",
                                alignItems: "center",
                                transform: [{ translateY }]
                            }}>
                                <Image source={{ uri:item.imagen }} style={styles.posterImage} />
                                <Text>{item.countries}</Text>
                                <Text>{item.city}</Text>
                            </Animated.View>
                        </View>
                    )
            }}
            />
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
        marginBottom: 10
    }
})