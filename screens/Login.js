

import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';


export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',

        }
    }

    componentDidMount() {
        this._loadInitialState().done();
    }

    _loadInitialState = async() => {
        var value = await AsyncStorage.getItem('user');
        if (value !== null){
            this.props.navigation.navigate('Profile');
        }
    }

    render(){
        return(

            <KeyboardAvoidingView behavior='padding' style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>LOGOWANIE</Text>

                    <TextInput
                        style={styles.textInput} placeholder='Login'
                        onChangeText={(username)=> this.setState({username})}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        style={styles.textInput} placeholder='Haslo'
                        secureTextEntry={true}
                        onChangeText={(password)=> this.setState({password})}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.login}>
                        <Text>Zaloguj</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
    login = () =>{
        this.props.navigation.navigate('Home');
    }
}

const styles = StyleSheet.create({
   wrapper:{
       flex: 1,
   },
    container:{
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: 'white',
       paddingLeft: 40,
       paddingRight: 40,
    },
    header:{
       fontSize: 24,
        marginBottom: 60,
        color: 'black',
        fontWeight: 'bold',
    },
    textInput:{
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: 'white',
    },
    btn:{
        alignSelf: 'stretch',
        backgroundColor: '#d7ccc8',
        padding: 20,
        alignItems: 'center',
    }
});