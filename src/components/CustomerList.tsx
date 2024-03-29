import useFetch from "../components/useFetch";
import { IonContent, 
    IonHeader, IonListHeader,IonSpinner,
    IonPage, 
    IonTitle, 
    IonChip,
    IonItem,
    IonCard,
    IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonText,IonButton,
     IonIcon,
     IonLabel,IonRow, IonCol,IonGrid,

     IonList, IonItemSliding, IonItemOptions, IonItemOption, IonNote
    } from '@ionic/react';
    import React from 'react'
    import './Cust.css'

    import { pin, wifi, wine, warning, walk,closeCircle,personOutline ,heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical   } from 'ionicons/icons';

    let cnt = 0 , activeCount = ()=>{
        return cnt
    } ,

    confirm = (e:any)=>{
      e.preventDefault();
      let evt = e.currentTarget.dataset,
        id = evt.id,
        type = evt.type;
      
    },
    activate = (e:any)=>{
      e.preventDefault();
      let evt = e.currentTarget.dataset,
        id = evt.id,
        type = evt.type;
        
    }

  

 const CustomerList : React.FC= ()=>{


 let { data,loading }= useFetch("/orders/Customers")
 , 
 confirmedList = (data)?data.data.map(
   (el:any)=>{
       if(!el.isActive)
  return(
    <IonItem>
        
       <IonCardHeader>
       <IonCardTitle>{el.name}</IonCardTitle>
 
             <IonCardSubtitle>
                 <p>Postion: {el.index}</p>
                 <p>Status: {(el.isActive)?"Active":"Closed"}</p>
             </IonCardSubtitle>
            
           </IonCardHeader>
           <IonButton color="success"  slot="end" data-id={el._id} data-type={"confirm"}  onClick={activate}>
Activate    </IonButton>
           </IonItem>
  )
 }):false,
 
 activeList = (data)?data.data.map(
    (el:any)=>{
        if(el.isActive)
   return(
      <IonItem >
  
       
      <IonCardHeader>
      <IonCardTitle>{el.name}</IonCardTitle>

            <IonCardSubtitle>{(el.isActive)?"Active":"Closed"}</IonCardSubtitle>
          </IonCardHeader>
          <IonButton color="danger"  slot="end" data-id={el.id} data-type={el.type}  onClick={confirm}>
Confirm    </IonButton>
          </IonItem>
         
   )
  }):false

cnt =(data)?data.data.length:0
   return(
    <IonGrid>

     <IonRow >
         
         <IonCol size-md="6" >
         <IonList>
         <IonItem>
         <IonChip color="success">
          <IonLabel color="">Active</IonLabel>
        </IonChip>

      </IonItem>
         {activeList}
         </IonList>
         </IonCol>
         
         <IonCol size-md="6" >
         <IonList>

         <IonItem>
         <IonChip color="danger">
          <IonLabel color="">Confirmed</IonLabel>
        </IonChip>

      </IonItem>
    
             {(data!=null)?confirmedList: <IonSpinner name="crescent" />}
             </IonList>

             </IonCol>
         

         </IonRow> 
         <IonButton  onClick={confirm}>Test Button</IonButton>
         </IonGrid>  
   )

 }

 export default {CustomerList,activeCount}