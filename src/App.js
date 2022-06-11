import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView, StatusBar, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlToMyGithub = 'https://github.com/anatmnegri';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/97566644?v=4';

const App = ()=>{ 
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo link....');
          await Linking.openURL(urlToMyGithub);
        }
    };
    return(
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content"/>
            <View style={style.content}>
                <Image accessibilityLabel='Foto de Ana Teresa com fundo verde água com circulos rosa' style={style.avatar} source={{uri: imageProfileGithub}}/>
                <Text accessibilityLabel="Nome: Ana Teresa Negri"  style={[style.defaultText, style.name]}>
                    Ana Teresa Negri
                </Text>
                <Text accessibilityLabel="Nickname: ana t m negri" style={[style.defaultText, style.nickname]}>
                    anatmnegri
                </Text>
                <Text accessibilityLabel="Descrição: JavaScript | ReactNative | FrontEnd" style={[style.defaultText, style.description]}>
                    JavaScript | ReactNative | FrontEnd
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open in Github
                    </Text>
                </View>
                </Pressable>
            </View>  
        </SafeAreaView>
    );
}

export default App;

const style = StyleSheet.create({
    container: {
        //a view é em formato colum, para trocar é preciso usar um flexbox (flexDirection)
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela toda
        justifyContent: 'center',
        
    },
    content:{
        alignItems:'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'pink',
        borderWidth: 2,
    },
    defaultText:{
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,
      },
      nickname: {
        fontSize: 18,
        color: colorDarkFontGithub,
      },
      description: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      button: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
      },
      textButton: {
        fontWeight: 'bold',
        fontSize: 16,
      },
});
