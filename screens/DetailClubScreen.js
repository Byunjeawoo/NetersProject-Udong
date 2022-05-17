import React from 'react';
import { Button, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { normalizeRect } from 'react-native/Libraries/StyleSheet/Rect';
import Svg, {Path} from "react-native-svg";
import IconBookmark,{IconCallender} from "../util/svg";
import {verticalScale, horizontalScale, moderateScale} from '../util/scailling'; 
//verticalScale : 세로 길이에만 영향을 주는 값
//horizontalScale : 가로 길이에만 영향을 주는 값
//moderateScale : 글자 크기나, 여튼 대각선으로 가로세로 동일한 비율로 변화하는 값

function DetailClubScreen({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.imgLogo}></View>
            <View style={styles.hashBar}>
                <Text style={styles.textHash}>  #코딩   #친목   #학술동아리</Text>
            </View>
            <View style={styles.impormationBar}>
                <View style={{flex:1, flexDirection:"row"}}>
                    <Text style={styles.textClubName}>Neters</Text>
                    <TouchableOpacity style={{marginTop:verticalScale(20), marginLeft:horizontalScale(180)}}>
                        <IconBookmark />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1}}>
                    <Text style={styles.textClubInfo}>
                        인하대학교 대표 프로그래밍, 개발 중앙 동아리입니다.
                    </Text>
                </View>
                <View style={{flex:1, flexDirection:'row'}}>
                    <View style={styles.Iconset}>
                        <IconCallender />
                        <Text>14/50</Text>
                    </View>
                    <View style={styles.Iconset}>
                        <IconCallender />
                        <Text>05/21</Text>
                    </View>
                    <View style={styles.Iconset}>
                        <IconCallender />
                        <Text>면접 없음</Text>
                    </View>
                    <View style={styles.Iconset}>
                        <IconCallender />
                        <Text>6:4</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnAccess}>
                    <Text style={{color:'white', fontSize:20}}>지원하기</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = {
    imgLogo: {
        flex:4,
        backgroundColor: 'blue',
    },
    hashBar: {
        flex: 0.4,
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
        fontSize:moderateScale(18),
    },
    impormationBar: {
        flex: 3,
        backgroundColor: "white",
    },
    textClubName:{
        fontSize:moderateScale(35),
        marginLeft:horizontalScale(30),
        marginTop:verticalScale(17),
        color:'#522F9D',
        fontWeight:'600',
    },
    iconBookmark:{
        color:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textClubInfo:{
        marginLeft:horizontalScale(30),
        fontSize:moderateScale(15),
    },
    Iconset:{
        flex:1,
        alignItems: 'center',
    },
    btnAccess: {
        marginLeft: horizontalScale(22.3),
        marginBottom: verticalScale(15),
        flex: 0.5,
        width:horizontalScale(340),
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
}
export default DetailClubScreen;