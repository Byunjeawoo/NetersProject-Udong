import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

// 개발 테스트 상수값
const guidelineBaseWidth = 384;
const guidelineBaseHeight = 772.6222222222223;
const guideScale = Math.sqrt(guidelineBaseWidth * guidelineBaseHeight)

const scale = Math.sqrt(width * height) / guideScale;
const horiPer = width / guidelineBaseWidth;
const vertiPer = height / guidelineBaseHeight;


const verticalScale = size => horiPer * size;  //이해못함
const horizontalScale = size => vertiPer * size;
const moderateScale = size => scale * size;

export {moderateScale, verticalScale, horizontalScale};