import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';
import NativeLinkingManager from 'react-native/Libraries/Linking/NativeLinkingManager';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const colorGithub = '#010409';
const urlToGithub = 'https://github.com/Andersonhcs'
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/101672475?v=4'
const App = () => {
    const handlePressGoToGithub = async ()=>{
        console.log('Verificando Link');
        const res= await Linking.canOpenURL(urlToGithub);
        if(res){
            console.log('Link Aprovado');
            console.log('Abrindo Link...');
            await Linking.openURL(urlToGithub);
     }        
    };
    return ( 
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
    <View style={style.content} >
        <Image accessibilityLabel='Anderson de roupa social' style={style.avatar} source={{uri:imageProfileGithub}} />
        <Text accessibilityLabel='Nome: Anderson Henrique' style={style.name}>Anderson Henrique</Text>
        <Text accessibilityLabel='nickname: Andersonhcs' style={style.nickname}>Andersonhcs</Text>
        <Text accessibilityLabel='Descrição: Desenvolvedor Front-end Jr. | HTML | CSS3 | JavaScript' style={style.description}>Desenvolvedor Front-end Jr. | HTML | CSS3 | JavaScript</Text>
        <Pressable onPress={handlePressGoToGithub}>

        <View style={style.button}>
            <Text style={style.textButton}>Open in Github</Text>
            </View>
        </Pressable>
    </View>
    </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container:{
        backgroundColor: colorGithub,
        flex:1, //expandir para a tela inteira
        justifyContent: 'center'
        
    },
    content:{
        alignItems: 'center',
        padding: 20 ,
        
    },
    avatar:{
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 1,

    },
    nickname:{
        color: 'grey',
        fontSize: 18,
    },
    name:{
        marginTop:20,
        color:'white',
        fontWeight:'bold',
        fontSize:24,
    },
    description:{
        fontWeight:'bold',
        fontSize: 14,
        color: 'white'
    },
    button:{
        marginTop:20,
        backgroundColor:'grey',
        borderRadius:10,
        padding:20,
    },
    textButton:{
        color:'white',
        fontSize: 16,
        fontWeight:'bold',
    }
    
})