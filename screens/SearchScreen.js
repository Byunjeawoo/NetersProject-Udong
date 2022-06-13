import React, {useState} from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView, KeyboardAvoidingView} from 'react-native';
import {IconNavSearch, IconNavProfile, IconNavAlert, IconNavGlass, IconNavHome} from '../util/svg';
import { SearchBar } from 'react-native-screens';
const { width, height } = Dimensions.get('window');

function SearchScreen({navigation}){
    const [text, setText] = useState("");
    return (
        <View style={{flex:1}}>
        <ScrollView scrollEnabled={false}>
            <View style={{flex:2, alignItems:'center'}}>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="        검색어를 입력하세요."
                />
            </View>
            <View></View>
            </ScrollView>
            <View style={styles.NavBar}>
            <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Search')}> 
                    <IconNavGlass color="#6B20CC"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Recruit')}>
                    <IconNavSearch color="#838383"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Home')}>
                    <IconNavHome color="#838383"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement}>
                    <IconNavAlert color="#838383"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement}>
                    <IconNavProfile color="#838383"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    input: {
        margin:1,
        height: height*0.05,
        width: width*0.9,
        marginTop:height*0.1,
        borderWidth: 1,
    },
    NavBar:{
        flexDirection: "row",
        height:height*0.085,
        backgroundColor:"white",
    },
    NavBarElement:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderTopWidth:1,
        borderColor:'#B9B6B6',
    },
    NavBarElementChecked:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderTopWidth:1,
        borderColor:'#B9B6B6',
        backgroundColor:'#F1F1F1',
    },
}
export default SearchScreen;