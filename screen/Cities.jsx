import { StyleSheet, View, ImageBackground, TextInput } from 'react-native';
import citiesActions from "../redux/actions/citiesActions"
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardsCities from '../components/CardsCities';

const image = require("../images/background.png")

export default function Cities({navigation}) {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getCities())
    }, [])

    const citiesRedux = useSelector(store => store.citiesReducers.cities)
return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={{paddingTop: 250, paddingBottom:50}}>
            <TextInput style={styles.input} placeholder="Search cities..." onChangeText={(newText) => { setInputValue(newText) }}/>
            </View>
            <View>
                <CardsCities input={inputValue} navigation={navigation} cities={citiesRedux}/>
            </View>
        </ImageBackground>
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
input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
});
