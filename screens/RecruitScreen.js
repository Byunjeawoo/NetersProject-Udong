import React, {useEffect, useState} from 'react';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView, SafeAreaView, Image, FlatList} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {IconNavSearch, IconNavProfile, IconNavAlert, IconNavGlass, IconNavHome, IconMiniPeopleClub} from '../util/svg';
import { horizontalScale, moderateScale, verticalScale } from '../util/scailling';
import {Picker} from '@react-native-picker/picker';

const { width, height } = Dimensions.get('window');

function RecruitScreen({navigation}){
    const [dataSource, setDataSource] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
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
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex:0.13, backgroundColor:"white", zIndex:6}}>
            <Text style={styles.TextProject}>모집공고</Text>
            </View>
            <View style={{flex:0.07, backgroundColor:"white", flexDirection:'row',marginLeft:width*0.051, width:width*0.905}}>
                <View style={{flex:5}}></View>
                <View style={{flex:3.5,backgroundColor:'#E5E5E5'}}>
                    <Picker
                        style={{backgroundColor:'white', marginLeft:width*0.007, marginTop:height*0.004}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="모두" value="all" />
                        <Picker.Item label="학술" value="study" />
                        <Picker.Item label="봉사" value="help" />
                    </Picker>
                </View>
                <View style={{flex:4.2,backgroundColor:'#E5E5E5'}}>
                <Picker
                        style={{backgroundColor:'white', marginLeft:width*0.007, marginTop:height*0.004, marginRight: width*0.007}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="등록순" value="signSort" />
                        <Picker.Item label="마감일순" value="deadlineSort" />
                        <Picker.Item label="이름순" value="nameSort" />
                    </Picker>
                </View>
            </View>
            <View style={{flex:0.73, backgroundColor:"white"}}>
                <View></View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        key={'#'}
                        data={dataSource}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('DetailClub')}>
                                <View style={styles.imgNeTers}></View>
                                <View style={styles.RectangleBoxNeTers}>
                                <Text style={styles.ClubName}>NETers</Text>
                                <Text style={styles.miniHash}>#프로그래밍  #친목</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        //Setting the number of column
                        numColumns={2}
                        keyExtractor={(item, index) => index}
                    />
                    </SafeAreaView>
                </View>
            <View style={{flex:0.07, backgroundColor:"#E5E5E5"}}>
            <View style={styles.NavBar}>
            <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Search')}> 
                    <IconNavGlass color="#838383"/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.NavBarElement} onPress={() => navigation.navigate('Recruit')}>
                    <IconNavSearch color="#6B20CC"/>
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
        </View>
    );
}


const styles = StyleSheet.create({
    TextProject:{
        position: 'absolute',
        left: width*0.08,
        top: height*0.095,
        /*font-family: 'Ligconsolata',*/
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: moderateScale(30),
        color: '#5E37AF',
    },
    list:{
        flex: 1,
        width:"100%",
        backgroundColor:"#f2f2f2",
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
        marginLeft:width*0.04,
        width: width*0.92,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
    },
    itemList: {
        position: 'relative',
        height: height*0.3,
        width: width*0.455,
        left: horizontalScale(2),
        top: verticalScale(2),
        bottom:2,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor:'#E5E5E5', //테두리 색
    },
    imgNeTers:{
        backgroundColor:"black",
        flex:7,
    },
    ClubName:{
        fontSize:moderateScale(20),
        marginLeft:width*0.03,
        marginTop:height*0.005,
    },
    miniHash:{
        fontSize:moderateScale(12),
        marginTop:height*0.015,
        marginLeft:width*0.03,
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
    NavBarElementChecked:{
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        flex:1,
        borderTopWidth:1,
        borderColor:'#B9B6B6',
        backgroundColor:'#F1F1F1',
    }
});

export default RecruitScreen;