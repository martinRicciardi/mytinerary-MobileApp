import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import userActions from '../redux/actions/userActions'
import { Form, FormItem } from 'react-native-form-component';
import SignIn from '../components/SignIn';

const image = require("../images/background.png")

export default function Profile() {

    const user = useSelector(store => store.userReducers.user)

return (
    user? 
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.formcontainer}> 
                <Text style={styles.titleform}>Account</Text>
            </View>
        </ImageBackground>
    </View> : <SignIn/>
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
formcontainer: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
    width: 300,
    backgroundColor: "#ffff",
    borderRadius: 50,
    padding: 20
},
inputcontainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center"
},
input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
},
button: {

},
titleform: {
    fontSize: 40,
    marginTop: 50
},
register: {
    color: "blue"
}
});