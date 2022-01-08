import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
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
            <KeyboardAvoidingView behavior='padding' style={style.wrapper}>
                <View style={atyles.container}>
                    <Text style={style.header}>LOGOWANIE</Text>

                    <TextInput
                        style={styles.textInput} placeholder='Login'
                        onChangeText={(username)=> this.setState({username})}
                        underlineColorAndroid='transparent'
                    />

                    <TextInput
                        style={styles.textInput} placeholder='Haslo'
                        onChangeText={(password)=> this.setState({password})}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity
                        style={style.btn}
                        onPress={this.login}>
                        <Text>Zaloguj</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
    login = () =>{
        alert('text');
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