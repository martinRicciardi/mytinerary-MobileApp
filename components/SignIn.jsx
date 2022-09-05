import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import userActions from '../redux/actions/userActions'
import { Form, FormItem } from 'react-native-form-component';

const image = require("../images/background.png")

export default function SignIn({navigation}) {

    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")

    const dispatch = useDispatch()
    const user = useSelector(store => store.userReducers.user)

    async function handleSubmit() {
        const logedUser = {
            email: email,
            password: password,
            from: "form-Signin",
        }
        dispatch(userActions.signInUser(logedUser))
    }

return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.formcontainer}> 
                <Text style={styles.titleform}>Welcome again!</Text>

                    <Form 
                    onButtonPress={() => handleSubmit()}
                    style={styles.inputcontainer}
                    buttonText='SIGN IN'
                    buttonStyle={{ backgroundColor: '#587ee8' }}>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={email}
                                placeholder="Email"
                                onChangeText={(mail) => setEmail(mail)}/>

                            <FormItem
                                style={styles.input}
                                isRequired
                                value={password}
                                placeholder="Password"
                                onChangeText={(pass) => setPassword(pass)}/>

                    </Form>

                <Text style={styles.register} onPress={() => navigation.navigate('register')}>You still don't have an account? go to SignUp!</Text>
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