import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex:1,
    width:'100%',
    display:'flex',
    flexDirection:'column',
  },
  title: {
    paddingTop:40,
    paddingRight:20,
    height:120,
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  title__text: {
    fontFamily:'roboto-black',
    fontSize:40,
    color:'#fff'
  },
  temperature: {
    paddingLeft:20,
    flex:1,
    display:'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  temperature__label: {
    fontFamily:'roboto-black',
    fontSize:40,
    lineHeight:40,
    color:'#fff',
    margin:0,
    padding:0
  },
  temperature__text: {
    fontFamily:'roboto-black',
    fontSize:80,
    lineHeight:80,
    color:'#fff',
    margin:0,
    padding:0
  },
  bottom: {
    width:'100%',
    height:500,
    overflow: 'hidden',
    borderTopRightRadius: 90, 
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex',
    flexDirection:'column'
  },
  
  bottom__gradient: {
    flex:1,
    width:'100%',
    paddingLeft:20,
    paddingTop:50
  },
  appName: {
    fontFamily: 'roboto-black',
    fontSize:40,
    color:'#fff',
    lineHeight:50,
    margin: 15,
  },
  icon: {
    fontSize:60,
    color:'#fff',
    margin: 15,
  },
  text: {
    fontFamily: 'roboto-regular',
    fontSize:25,
    color:'#fff',
    margin: 15,
  },
  location: {
    fontFamily: 'roboto-regular',
    fontSize:33,
    color:'#000'
  },
  info:{
    marginTop:50
  },
  info__label: {
    fontFamily: 'roboto-regular',
    fontSize:23,
    color:'#000'
  },
  info__text: {
    fontFamily: 'roboto-regular',
    fontSize:35,
    color:'#000'
  }
});