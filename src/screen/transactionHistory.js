import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Dimensions, TextInput, Button, Image, SectionList, StatusBar} from 'react-native'
import { primary, background, white, drak, secondry, subTitle , btn, success, bgImge, error, trans} from '../assets/color/color'

import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'

import { DateTime } from 'luxon';
import { useDispatch, useSelector } from 'react-redux'
import {getHistoryAction} from '../redux/action/transfer'

import {localhost} from '../utils/api'




const TransactionHistory = ({navigation})=> {

    const handleGoTo = (screen)=>{
        navigation.navigate(screen)
    }

    const dispatch = useDispatch()
    const {history} = useSelector(state => state.user)
    const {user} = useSelector(state=>state.auth)

    const historyIn = history.filter((x)=>{x.reciever_id === user.id})
    const historyOut = history.filter((x)=>{x.reciever_id !== user.id})

    useEffect(()=>{
        dispatch(getHistoryAction(user.id))
    },[])


   const startDateWeek = DateTime.local().startOf('week').toISODate();
   const endDateWeek = DateTime.local().startOf('week').plus({ days: 7 }).toISODate();
   const getThisMonth = DateTime.local().month;

   if(historyIn === null && historyOut === null){

   }
    const thisWeek = history.filter((item) => {
        return (
           DateTime.fromISO(item.transfer_date).toISODate() >= startDateWeek &&
           DateTime.fromISO(item.transfer_date).toISODate() <= endDateWeek
        );
     });
  
     const thisMonth = history.filter((item) => {
        return (
        //    !thisWeek.includes(item) &&
           DateTime.fromISO(item.transfer_date).month === getThisMonth
        );
     });
  
     const beforeAgain = history.filter((item) => {
        return (
           !thisWeek.includes(item) &&
           !thisMonth.includes(item)
        );
     });

     const Item = ({data})=>{
         return(
            <View style={styles.card}>
                 {data.image === null?(
                    <Image source={userIcon} style={styles.img}/>
                ):(<Image source={{uri:data.image.replace('localhost',localhost)}} style={styles.img}/>)}
                <View style={{flex:1, marginLeft:15}}>
                    <Text style={{fontSize:16, color:drak, fontWeight:'700'}}>{data.username}</Text>
                    <Text style={{fontSize:14, fontWeight:'400', marginTop:9}}>Transfer</Text>
              </View>
              <View style={{justifyContent:'center', flex:1, alignItems:'flex-end'}}>
                 <Text style={{color:success, fontSize:18, fontWeight:'700'}}>{user.id === data.reciever_id?(<Text style={{color:success, fontSize:18, fontWeight:'700'}}>+{data.trans_amount.toLocaleString("id-ID")}</Text>):(<Text style={{color:error, fontSize:18, fontWeight:'700'}}>-{data.trans_amount.toLocaleString("id-ID")}</Text>)}</Text>
             </View>
        </View>
         )
     }


     const historyData = [
        {
           date: 'This Week',
           data: thisWeek,
        },
        {
           date: 'This Month',
           data: thisMonth,
        },
        {
           date: 'Before Again',
           data: beforeAgain,
        },
     ];
    

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={background}/>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=> handleGoTo('Home')}>
                 <Icon 
                 name='arrowleft'
                 size={28}
                  />
                  </TouchableOpacity>
                <Text style={styles.title}>History</Text>
                  
            </View>
                <SectionList
                 sections={historyData}
                 keyExtractor={(item, index) => item + index}
                 renderItem={({ item }) => <Item data={item} />}
                 renderSectionHeader={({ section: { date, data } }) => (
                    data.length === 0 ? null :
                       <View>
                          <Text style={styles.titleWeek}>{date}</Text>
                       </View>
                 )
                 }
                />
           
            <View style={styles.footer}>
                            <TouchableOpacity style={styles.btnFilter}>
                            <Icon name='arrowup' color={error} size={28} style={{alignItems:'center', justifyContent:'center'}}/>
                           </TouchableOpacity>
                           <TouchableOpacity style={styles.btnFilter}>
                            <Icon name='arrowdown' color={success} size={28} style={{alignItems:'center', justifyContent:'center'}}/>
                         </TouchableOpacity>
                          <TouchableOpacity style={styles.filterWrapp}>
                            <Text style={styles.filterText}>Filter by Date</Text>
                          </TouchableOpacity>
        </View>
        </View>
    )
}

export default TransactionHistory

const {height, width} = Dimensions.get('screen')
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fafcff",
        flex:1
    },
    header:{
        flexDirection:'row',
        marginHorizontal:19,
        paddingTop:25,
        alignItems:'center',
        paddingBottom:18
    },
    title:{
        color:drak,
        fontSize:20,
        fontFamily:'NunitoSans-Bold',
        marginLeft:20
    },
    titleWeek:{
        marginTop:30,
        marginLeft:19,
        fontSize:16,
        color:'#7a7886',
        fontFamily:'NunitoSans-Regular',
    },
    price:{
        color:white,
        fontSize:24
    },
    btnWrap:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
        
    },
    btnTrans:{
        backgroundColor:trans,
        borderColor:'#eee',
        borderWidth:1,
        borderRadius:10,
        paddingHorizontal:27,
        paddingVertical:16,
        flexDirection:'row',
        marginHorizontal:15,
    },
    card:{
        flexDirection:'row',
        backgroundColor:white,
        paddingVertical:18,
        paddingHorizontal:16,
        borderRadius:10,
        justifyContent:'space-between',
        elevation:3,
        marginTop:20
    },
    imgWrapp:{
        width:90,
        height:56,
        backgroundColor:'#5e5e5e'
        
    },
    btnFilter:{
        backgroundColor:white,
        paddingHorizontal:18,
        paddingVertical:14,
        borderRadius:12,
        elevation:3,
        shadowRadius:10,
    },
    filterText:{
        color:primary,
        fontSize:18,
        fontFamily:'NunitoSans-Bold',
    },
    filterWrapp:{
        backgroundColor:white,
        borderRadius:12,
        paddingHorizontal:38,
        paddingVertical:16,
        elevation:3,
        marginLeft:5
    },
    img:{
        width:58,
        height:58,
        borderRadius:7
    },
    footer:{
        flexDirection:'row', 
        paddingVertical:20, 
        marginHorizontal:15, 
        justifyContent:'space-between',
        // backgroundColor:'red',
        // position:'absolute'
    }
})