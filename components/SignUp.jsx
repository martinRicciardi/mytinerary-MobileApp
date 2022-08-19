import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, Button, Text } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userActions from '../redux/actions/userActions'
import { Form, FormItem } from 'react-native-form-component';


const image = require("../images/background.png")

export default function SignUp({navigation}) {

    const [fullname,setFullname] = useState("")
    const [photo,setPhoto] = useState("")
    const [country,setCountry] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const dispatch = useDispatch()

    async function handleSubmit() {
        const userData = {
            fullname: fullname,
            photo: photo,
            email: email,
            password: password,
            country: country,
            from: "form-Signup"
        }
        dispatch(userActions.signUpUser(userData))
    }

return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.formcontainer}> 
                <Text style={styles.titleform}>Register Now!</Text>

                    <Form 
                    onButtonPress={() => handleSubmit()}
                    style={styles.inputcontainer}
                    buttonText='SIGN UP'
                    buttonStyle={{ backgroundColor: '#587ee8' }}>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={fullname}
                                placeholder="Fullname"
                                onChangeText={(name) => setFullname(name)}/>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={photo}
                                placeholder="Photo URL"
                                onChangeText={(url) => setPhoto(url)}/>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={country}
                                placeholder="Country"
                                onChangeText={(country) => setCountry(country)}/>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={email}
                                placeholder="Email"
                                onChangeText={(mail) => setEmail(mail)}
                                textContentType='emailAddress'
                                keyboardType='email-address'/>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={password}
                                placeholder="Password"
                                onChangeText={(pass) => setPassword(pass)}/>

                    </Form>

                <Text style={styles.login} onPress={() => navigation.navigate('profile')}>You have account? go to SignIn!</Text>
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
formcontainer: {
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    height: 600,
    width: 300,
    backgroundColor: "#ffff",
    borderRadius: 50,
    padding: 10
},
inputcontainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 30
},
input: {
    height: 40,
    width: 200,
    borderWidth: 1,
},
titleform: {
    fontSize: 50,
    marginTop: 50
},
login: {
    color: "blue"
}
});