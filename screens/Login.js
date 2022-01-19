import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity,Platform, View, Image, Alert } from 'react-native'
import { auth } from '../firebase'

const Login = ({route}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        if(route.params && route.params.loggedOut){
            Alert.alert("Informacja","Wylogowano pomyślnie!"); 
        }      
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("CieKawa")
            }
        })

        return unsubscribe
    }, [])

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with:', user.email);
            })
            .catch(error => alert(error.message))
    }
   
  
    return (

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.container}>
                <Image
                    source={require("../icons/logo.png")}
                    resizeMode="contain"
                    style={styles.image}
                ></Image>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Zaloguj</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        marginTop:25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 250,
    },
    inputContainer: {
        marginTop:200,
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70,
    },
    button: {
        backgroundColor: '#d94214',
        width: '100%',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 150
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
})