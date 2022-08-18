import { StyleSheet, View, ImageBackground, SafeAreaView, TextInput, Button, Text } from 'react-native';

const image = require("../images/background.png")

export default function Profile({navigation}) {
return (
    <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
            <View style={styles.formcontainer}> 
                <Text style={styles.titleform}>Welcome again!</Text>
                    <SafeAreaView style={styles.inputcontainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"/>
                            <TextInput
                                style={styles.input}
                                placeholder="Password"/>
                            <Button style={styles.button} title="Sign Up"/>
                    </SafeAreaView>
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