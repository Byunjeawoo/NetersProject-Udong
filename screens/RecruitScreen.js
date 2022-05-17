import React, {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView, SafeAreaView, Image, FlatList} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {IconSearch, IconPlus, IconAlert} from '../util/svg';
import { horizontalScale, verticalScale } from '../util/scailling';
const { width, height } = Dimensions.get('window');

function RecruitScreen({navigation}){
    const [dataSource, setDataSource] = useState([]);
    useEffect(() => {
    let items = Array.apply(null, Array(60)).map((v, i) => {
        return {
            id: i,
            src: 'http://placehold.it/200x200?text=' + (i + 1)
        };
    });
    setDataSource(items);
    //console.log(items);
    }, []);

    return(
        <View style={{flex:1}}>
            <View style={{flex:0.13, backgroundColor:"blue"}}></View>
            <View style={{flex:0.07, backgroundColor:"gray"}}></View>
            <View style={{flex:0.73, backgroundColor:"skyblue"}}>
                <View></View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        key={'#'}
                        data={dataSource}
                        renderItem={({item}) => (
                            <View style={styles.Rectangle7_1}>
                            <TouchableOpacity style={styles.Rectangle8} onPress={() => navigation.navigate('DetailClub')}>
                                <View style={styles.imgNeTers}></View>
                                <View style={styles.RectangleBoxNeTers}>
                                <Text style={styles.ClubName}>NETers</Text>
                                <Text style={styles.miniHash}>#프로그래밍  #친목</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        )}
                        //Setting the number of column
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                    </SafeAreaView>
                </View>
            <View style={{flex:0.07, backgroundColor:"orange"}}>
            <View style={styles.NavBar}>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Home')}> 
                    <IconSearch/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Recruit')}>
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

        </View>
    );
}


const styles = StyleSheet.create({
    list:{
        flex: 1,
        width:"100%",
        backgroundColor:"#f2f2f2",
    },
    item:{
        width:100,
        height:100,
        backgroundColor:"red",
    },
    stylegridView:{
        flexDirection:"row",
        flexWrap:"wrap",
        paddingHorizontal:16,
        paddingTop:10,
        justifyContent:"space-between",
        paddingBottom:80,
    },
    container: {
        marginLeft:horizontalScale(12),
        width: width - horizontalScale(12)*2,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: verticalScale(100),
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
    ClubName:{
        fontSize:20,
        marginLeft:10,
        marginTop:5,
    },
    miniHash:{
        fontSize:12,
        marginTop:14,
        marginLeft:10,
    },
    RectangleBoxNeTers:{
        flex:3,
    },
    NavBar:{
        flexDirection: "row",
        flex:1,
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

export default RecruitScreen;