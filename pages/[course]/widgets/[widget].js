


import React, { useEffect, useState, useMemo } from 'react'
import { techStackWidgetMap } from '../../../utils/helpers'
import _ from 'lodash'
import firebase from '../../../firebase'
//import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { withRedux } from '../../../lib/redux'
import {widgets} from '../../../constants/widgetConstants'
import { useFirestoreConnect } from 'react-redux-firebase'
import TechStack from '../../../components/widgets/TechStack'
const Widget = ({router}) =>{

 
  let widgetComponent = {};
 widgetComponent[widgets.TechStack] = TechStack;
 
   


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