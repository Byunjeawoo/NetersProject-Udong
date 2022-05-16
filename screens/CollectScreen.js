import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView, SafeAreaView } from 'react-native';
import {Feather} from "@expo/vector-icons";


function CollectScreen({navigation}){
    return (
    <View>
        <View style={styles.SearchBar}>
        <Text style={styles.TextProject}>PROJECT</Text>
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
            <View style={styles.Rectangle2}>
            <Text style={styles.TextDivide1}>분류1</Text>
            </View>
            <View style={styles.Rectangle3}>
            <Text style={styles.TextDivide1}>분류2</Text>
            </View>
            <View style={styles.Rectangle4}>
            <Text style={styles.TextDivide1}>분류3</Text>
            </View>
            <View style={styles.Rectangle5}>
            <Text style={styles.TextDivide1}>분류4</Text>
            </View>
        </View>
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
        height:140,
        backgroundColor:"black",
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
        color: '#3163AE',
    },
    Component1: {
        flex:1,
        flexDirection:'row',
        width:362,
        height:60,
        marginLeft:15,
        position: 'absolute',
        left: 0,
        right: 0,
        top:0,
        bottom:0,
        zIndex:3,
        backgroundColor: 'white',
    },
    Rectangle2:{
        borderWidth: 1,
        borderColor:'white',
        flex:1,
        width:100,
        zIndex:5,
        backgroundColor: 'skyblue',
    },
    Rectangle3:{
        borderWidth: 1,
        borderColor:'white',
        flex:1,
        width:100,
        zIndex:5,
        backgroundColor: 'skyblue',
    },
    Rectangle4:{
        borderWidth: 1,
        borderColor:'white',
        flex:1,
        width:100,
        zIndex:5,
        backgroundColor: 'skyblue',
    },
    Rectangle5:{
        borderWidth: 1,
        borderColor:'white',
        borderRadius: 3,
        flex:1,
        width:100,
        zIndex:5,
        backgroundColor: 'skyblue',
    },
    TextDivide1:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        left: 25,
        top: 17,
        //fontFamily: 'Inter',
        //fontStyle: 'normal',
        fontSize: 16,
        lineHeight: 19,
        color: '#000002',
        zIndex: 6,
    },
    Rectangle7:{
        flexDirection: 'row',
        zIndex:2,
        position: 'absolute',
        width: 360,
        height: 475,
        left: 16,
        top: 202,
        backgroundColor: '#E5E5E5',
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
        borderColor:'#E5E5E5',
    },
    imgNeTers:{
        backgroundColor:"black",
        flex:7,
    },
    RectangleBoxNeTers:{
        flex:3,
    }
});
export default CollectScreen;