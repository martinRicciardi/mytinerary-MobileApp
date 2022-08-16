import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Slider from '../components/Slider';

const image = require("../images/background.png") 

export default function Home() {
return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={{
                paddingTop: 170
            }}>
                <Text style={styles.title}>MyTinerary</Text>
                <Text style={styles.slogan}>Find 
                your perfect trip, designed by insiders who know and love 
                their cities!</Text>
                <Text style={styles.slidertitle}>Most popular Itineraries!</Text>
                <Slider/>
            </View>
        </ImageBackground>
        <Text style={styles.calltoaction}>Go discover cities!</Text>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
},
image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
},
title: {
    fontSize: 60,
    color: "#ffffff",
    textDecorationLine: "underline",
    textAlign: "center"
},
slogan: {
    fontSize: 25,
    color: "#ffffff",
    textAlign: "center",
    paddingBottom: 100
},
slidertitle:{
    fontSize: 40,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "700",
    backgroundColor:"#3ab588"
},
calltoaction:{
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
    fontWeight: "500",
    backgroundColor:"black"
}
});
