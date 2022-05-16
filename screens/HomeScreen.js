import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconSearch, IconPlus, IconAlert} from './svg';


function HomeScreen({navigation}){
    return (
        <View style={{flex:1}}>
            <View style={styles.SearchBar}>
                <Text style={styles.TextProject}>PROJECT</Text>
            </View>
            <View style={styles.RectangleMain}>
            </View>
            <View style={styles.NavBar}>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Home')}> 
                    <IconSearch/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Collect')}>
                    <IconSearch/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement}>
                    <IconSearch/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement}>
                    <IconAlert/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement}>
                    <IconPlus/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    SearchBar:{
        flex:1.3,
        flexDirection:"row",
        top:0,
        backgroundColor:"black",
    },
    TextProject:{
        width:1500,
        position: 'absolute',
        height: 31,
        left: 42,
        top: 49,
        /*font-family: 'Ligconsolata',*/
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 31,
        color: '#3163AE',
    },
    RectangleMain:{
        flex:8,
        backgroundColor:"white",
    },
    NavBar:{
        flexDirection: "row",
        flex:0.8,
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
}
export default HomeScreen;