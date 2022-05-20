import React, {useState, useEffect} from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { normalizeRect } from 'react-native/Libraries/StyleSheet/Rect';
import IconBookmark,{IconCallender, IconChat, IconSexFlex, IconUser} from "../util/svg";
import {verticalScale, horizontalScale, moderateScale} from '../util/scailling'; 

const { width, height } = Dimensions.get('window');
//verticalScale : 세로 길이에만 영향을 주는 값
//horizontalScale : 가로 길이에만 영향을 주는 값
//moderateScale : 글자 크기나, 여튼 대각선으로 가로세로 동일한 비율로 변화하는 값

function DetailClubScreen({ navigation }) {
    const [ClubSave, setClubSave] = useState(false)
    const storeData = () => {
        try {
            if(ClubSave===false){
                setClubSave(true)
            }else{
                setClubSave(false)
            }
        } catch (e) {
          // saving error
        }
    }
    //useEffect(storeData,[])
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView stickyHeaderIndices={[1]}>
                    <View style={styles.imgLogo}></View>
                    <View style={styles.hashBar}>
                        <Text style={styles.textHash}>  #코딩   #친목   #학술동아리 </Text>
                    </View>
                    <View style={styles.impormationBar}>
                        <View style={{flex:1, flexDirection:"row"}}>
                            <Text style={styles.textClubName}>Neters</Text>
                            <TouchableOpacity style={{marginTop:height*0.03, marginLeft:width*0.47}} onPress={() => storeData()}>
                                {ClubSave===true ? <IconBookmark color="#FFDB1E"/> : <IconBookmark color="#ecf0f1"/>}
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={styles.textClubInfo}>
                                인하대학교 대표 프로그래밍, 개발 중앙 동아리입니다.
                            </Text>
                        </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={styles.Iconset}>
                                <IconUser />
                                <Text>14/50</Text>
                            </View>
                            <View style={styles.Iconset}>
                                <IconCallender />
                                <Text>05/21</Text>
                            </View>
                            <View style={styles.Iconset}>
                                <IconChat />
                                <Text>면접 없음</Text>
                            </View>
                            <View style={styles.Iconset}>
                                <IconSexFlex />
                                <Text>6:4</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.btnAccess}>
                            <Text style={{color:'white', fontSize:20}}>지원하기</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxAction}></View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

const styles = {
    imgLogo: {
        height:height*0.5,
        backgroundColor: 'blue',
    },
    hashBar: {
        height:height*0.07,        //추후 수정
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        justifyContent: 'center',
    },
    textHash:{
        marginTop:width*0.04,
        fontSize:moderateScale(18),
    },
    impormationBar: {
        height:height*0.43,
        backgroundColor: "white",
    },
    textClubName:{
        fontSize:moderateScale(35),
        marginLeft:width*0.08,
        marginTop:height*0.025,
        color:'#522F9D',
        fontWeight:'600',
    },
    iconBookmark:{
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textClubInfo:{
        marginLeft:width*0.08,
        fontSize:moderateScale(15),
    },
    Iconset:{
        flex:1,
        alignItems: 'center',
    },
    btnAccess: {
        marginLeft: width*0.04,
        marginBottom: height*0.02,
        flex: 0.5,
        width:width*0.92,
        backgroundColor: '#A890EB',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 5,
    },
    boxAction:{
        height:height*0.5,
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5,
    },
}
export default DetailClubScreen;