


import React, { useEffect, useState, useMemo } from 'react'
import _ from 'lodash'
import firebase from '../../../firebase'
//import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { withRedux } from '../../../lib/redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import {widgets} from '../../../components/widgets/widgetConstants'
import TechStack from '../../../components/widgets/TechStack/TechStack'
import PokerStream from '../../../components/widgets/PokerStream/PokerStream'
const Widget = ({router}) =>{

 
  let widgetComponent = {};
 widgetComponent[widgets.TechStack] = TechStack;
 widgetComponent[widgets.PokerStream] = PokerStream;


  const renderWidget = () =>{

let ShowWidget;
    if(!_.isEmpty(router?.query?.widget)){
   ShowWidget = widgetComponent[`${router.query.widget}`]
   return <ShowWidget id={router.query.course} widget={router.query.widget}/>
    }

 
 
 


  return <div></div>
 
  
 }




 
  


    return(
    

     
    <div className='container'>
    {renderWidget()}
    </div>

      
    ) 

}




export default Widget