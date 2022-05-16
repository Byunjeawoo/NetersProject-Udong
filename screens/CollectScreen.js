import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView, SafeAreaView } from 'react-native';
import {Feather} from "@expo/vector-icons";
import {IconSearch, IconPlus, IconAlert} from './svg';


function CollectScreen({navigation}){
    return (
    <View style={{backgroundColor:"white"}}>
        <View style={styles.SearchBar}>
        <Text style={styles.TextProject}>UDong</Text>
        <Feather name={"search"} style={{marginTop:65, marginLeft:300,}} size={35} color="#3163AE"/>
        </View>
        <SafeAreaView style={styles.Rectangle7}>
        <ScrollView>
            <View style={styles.Rectangle7_1}>
            <TouchableOpacity style={styles.Rectangle8} onPress={() => navigation.navigate('DetailClub')}>
                <View style={styles.imgNeTers}></View>
                <View style={styles.RectangleBoxNeTers}>
                <Text>NETers</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.Rectangle8}>
            <View style={styles.imgNeTers}></View>
                <View style={styles.RectangleBoxNeTers}>
                <Text>devRent</Text>
                </View>
            </View>
            </View>
            <View style={styles.Rectangle7_1}>
            <View style={styles.Rectangle8}>
                <View style={styles.imgNeTers}></View>
                <View style={styles.RectangleBoxNeTers}>
                <Text>IVC</Text>
                </View>
            </View>
            <View style={styles.Rectangle8}>
            <View style={styles.imgNeTers}></View>
                <View style={styles.RectangleBoxNeTers}>
                <Text>IGRUS</Text>
                </View>
            </View>
            </View>
            <View style={styles.Rectangle7_1}>
            <View style={styles.Rectangle8}>
            <View style={styles.imgNeTers}></View>
                <View style={styles.RectangleBoxNeTers}>
                <Text>IVC</Text>
                </View>
            </View>
            <View style={styles.Rectangle8}>
            <View style={styles.imgNeTers}></View>
                <View style={styles.RectangleBoxNeTers}>
                <Text>devRent</Text>
                </View>
            </View>
            </View>
        </ScrollView>
        </SafeAreaView>
        <View>
        <View style={styles.Component1}>
            <View style={styles.BtnDivide}>
            <Text style={styles.TextDivide1}>중앙</Text>
            </View>
            <View style={styles.BtnDivide}>
            <Text style={styles.TextDivide1}>소모임</Text>
            </View>
            <View style={styles.BtnDivide}>
            <Text style={styles.TextDivide1}>연합</Text>
            </View>
            <View style={styles.BtnDivide}>
            <Text style={styles.TextDivide1}>기타</Text>
            </View>
        </View>
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
        <StatusBar style="auto" />
    </View>
    );
}


const styles = StyleSheet.create({
    SearchBar:{
        flexDirection:"row",
        top:0,
        width:1500,
        height:120,
        backgroundColor:"white",
    },
    TextProject:{
        width:1500,
        position: 'absolute',
        height: 31,
        left: 42,
        top: 70,
        /*font-family: 'Ligconsolata',*/
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 30,
        lineHeight: 31,
        color: '#5E37AF',
    },
    Component1: {
        flex:1,
        flexDirection:'row',
        width:340,
        height:50,
        marginLeft:24,
        position: 'absolute',
        left: 0,
        right: 0,
        top:0,
        bottom:0,
        zIndex:3,
        backgroundColor: 'white',
    },
    BtnDivide:{
        flex:1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor:'white',
        width:100,
        zIndex:5,
        backgroundColor: '#A890EB',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#fff'
    },
    TextDivide1:{
        marginTop:10,
        position: 'relative',
        flex:1,
        //fontFamily: 'Inter',
        //fontStyle: 'normal',
        fontSize: 17,
        color: 'white',
        zIndex: 6,
    },
    Rectangle7:{
        flexDirection: 'row',
        zIndex:2,
        position: 'absolute',
        width: 358,
        height: 575,
        left: 15,
        top: 170,
        backgroundColor: '#E5E5E5',  //테두리2
    },
    Rectangle7_1:{
        position: 'relative',
        flexDirection:'row',
        width: 800,
        height: 235,
    },
    Rectangle8: {
        position: 'relative',
        height: 233,
        width: 173,
        left: 6,
        top: 4,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor:'#E5E5E5', //테두리 색
    },
    imgNeTers:{
        backgroundColor:"black",
        flex:7,
    },
    RectangleBoxNeTers:{
        flex:3,
    },
    NavBar:{
        marginTop:625,
        height:60,
        flexDirection: "row",
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
});
export default CollectScreen;