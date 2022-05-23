import React from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconNavSearch, IconNavProfile, IconNavAlert, IconNavGlass, IconNavHome} from '../util/svg';
import { horizontalScale, moderateScale, verticalScale } from '../util/scailling';
import axios from 'axios';

function HomeScreen({navigation}){
    
    return (
        <View style={{flex:1}}>
            <View style={styles.SearchBar}>
                <Text style={styles.TextProject}>UDong</Text>
            </View>
            <View style={styles.RectangleMain}>
            </View>
            <View style={styles.NavBar}>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Search')}> 
                    <IconNavGlass color="#838383"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Recruit')}>
                    <IconNavSearch color="#838383"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Home')}>
                    <IconNavHome color="#6B20CC"/>
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
    SearchBar:{
        flex:1.3,
        flexDirection:"row",
        top:0,
        backgroundColor:"black",
    },
    TextProject:{
        width:horizontalScale(1500),
        position: 'absolute',
        height: verticalScale(31),
        left: horizontalScale(42),
        top: verticalScale(49),
        /*font-family: 'Ligconsolata',*/
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: moderateScale(30),
        lineHeight: verticalScale(31),
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
export default HomeScreen;