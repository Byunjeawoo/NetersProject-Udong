import React, {useEffect, useState, useRef} from 'react';
import AppLoading from 'expo-app-loading';
import { Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, TouchableOpacity, Text, View, ScrollView, SafeAreaView, Image, FlatList} from 'react-native';
import {Feather} from "@expo/vector-icons";
import {IconNavSearch, IconNavProfile, IconNavAlert, IconNavGlass, IconNavHome, IconDetailPeople} from '../util/svg';
import { horizontalScale, moderateScale, verticalScale } from '../util/scailling';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
const { width, height } = Dimensions.get('window');
const baseUrl = 'http://34.64.87.203:8000';

// Passing configuration object to axios

function RecruitScreen({navigation}){
    const nextId = useRef(0);
    const GetClubInfo = async (i) =>{
        
        await axios.get(`${baseUrl}/clubs/${clubIdList[i]}/concise_info`).then((resConciseInfo) =>{
            const DetailClubInfoOne = {
                id : i,
                CurNumPeople : resConciseInfo.data["body"]["current_number_of_people"],
                HashTag : resConciseInfo.data["body"]["hashtag"],
                MaxNumPeople : resConciseInfo.data["body"]["maximum_number_of_people"],
                Name : resConciseInfo.data["body"]["name"],
            }
            return DetailClubInfoOne
        })}

    async function test(){
        let LenArray = Array.apply(null, Array(clubIdList.length)).map((v,i) => (i));
        console.log(detailClubInfoList)
        console.log("Start")
        let arr = await Promise.all(LenArray.map((v, i) => 
            axios.get(`${baseUrl}/clubs/${clubIdList[i]}/concise_info`).then((resConciseInfo) =>{
                const DetailClubInfoOne = {
                    id : i,
                    CurNumPeople : resConciseInfo.data["body"]["current_number_of_people"],
                    HashTag : resConciseInfo.data["body"]["hashtag"],
                    MaxNumPeople : resConciseInfo.data["body"]["maximum_number_of_people"],
                    Name : resConciseInfo.data["body"]["name"],
                }
                console.log(DetailClubInfoOne)
                return DetailClubInfoOne
            })
        ))}
    async function getClubIdListAndMakeFlatItem(){
        await axios.get(`${baseUrl}/clubs`).then((response) => {
            setClubIdList(response.data["body"]);
        });
        console.log("getClubId Finish")
        console.log(clubIdList)
        await test()
        setIsReady(true)
        }
    const [dataSource, setDataSource] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [clubIdList, setClubIdList] = useState([]);
    const [detailClubInfoList, setdetailClubInfoList] = useState([]);
    const [detailFinish, setDetailFinish] = useState(false);
    const [isReady, setIsReady] = useState(false);
    const onFinish = () => setIsReady(true);
    const startLoading = async () => {
        await new Promise((resolve) => setTimeout(resolve, 500))
    };

    useEffect(() => {
    //getClubIdListAndMakeFlatItem()
    }, [])

    /*
    useEffect(() =>{
    }, [detailClubInfoList])   //ClubIdList -> detailClubInfoList
    */
    if (!isReady) {
        return (
            <AppLoading 
                startAsync={getClubIdListAndMakeFlatItem}
                onFinish={onFinish}
                onError={console.error}
            />
        )
    }
    return(
        <View style={{flex:1, backgroundColor:'white'}}>
            <View style={{flex:0.13, backgroundColor:"white", zIndex:6}}>
            <Text style={styles.TextProject}>????????????</Text>
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
                        <Picker.Item label="??????" value="all" />
                        <Picker.Item label="??????" value="study" />
                        <Picker.Item label="??????" value="help" />
                    </Picker>
                </View>
                <View style={{flex:4.2,backgroundColor:'#E5E5E5'}}>
                <Picker
                        style={{backgroundColor:'white', marginLeft:width*0.007, marginTop:height*0.004, marginRight: width*0.007}}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="?????????" value="signSort" />
                        <Picker.Item label="????????????" value="deadlineSort" />
                        <Picker.Item label="?????????" value="nameSort" />
                    </Picker>
                </View>
            </View>
            <View style={{flex:0.73, backgroundColor:"white"}}>
                <View></View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        key={'#'}
                        data={detailClubInfoList}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.itemList} onPress={() => navigation.navigate('DetailClub')}>
                                <View style={styles.imgNeTers}></View>
                                <View style={styles.RectangleBoxNeTers}>
                                    <View style= {{flexDirection:'row'}}>
                                        <Text style={styles.ClubName}>{item.Name}</Text>
                                        <View style= {{marginLeft:width*0.16, marginTop:height*0.02}}>
                                            <IconDetailPeople/>
                                            <Text style={{fontSize:moderateScale(9), marginLeft:-1*width*0.01, color:"#3D1F7D"}}>
                                                15/50
                                            </Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.miniHash}>#???????????????  #??????</Text>
                                    </View>
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
        borderColor:'#E5E5E5', //????????? ???
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