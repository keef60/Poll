import useFetch from "../components/useFetch";

import { IonContent, 
    IonHeader, IonListHeader,
    IonPage, 
    IonAvatar, 
    IonChip,
    IonItem,
    IonCard,
    IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonText,IonButton,
     IonIcon,
     IonLabel,IonRow, IonCol,IonGrid,

     IonList, IonItemSliding, IonItemOptions, IonItemOption, IonNote
    } from '@ionic/react';
    import React from 'react'
    import { pin, wifi, wine, warning, walk,closeCircle,personOutline ,heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical   } from 'ionicons/icons';

    let 

    confirm = ()=>{
        alert("Confirmed")
    },
    activate = ()=>{
        alert("Activated")
    }
  
   const Messaging: React.FC = () =>{ 

    const { data,loading } = useFetch("/customer/Messages")
    let confirmedList = (data)?data.data.map(
      (el:any)=>{
          
     return(
       <IonItem>
           <IonItem>
              <IonAvatar slot="start">
                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
              </IonAvatar>
          <IonLabel>
         <h2>Finn</h2>
         <h3>I'm a big deal</h3>
         <p>Listen, I've had a pretty messed up day...</p>
       </IonLabel>     
        </IonItem>
              </IonItem>
     )
    }):false,
    
    activeList = (data)?data.data.map(
       (el:any)=>{
      return(
         <IonItem >
     
          
     <IonItem>
        <IonAvatar slot="start">
         <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"/>
       </IonAvatar>{(el.isActive)?
       <IonChip color="success" slot= "end">
             <IonLabel color="">New</IonLabel>           </IonChip>:""
}
   <IonLabel>
         <h2>{el.name}</h2>
         <h3>I'm a big deal</h3>
         <p>Listen, I've had a pretty messed up day...</p>
       </IonLabel>     
        </IonItem>
             </IonItem>
            
      )
     }):false
   
   
      return(
       <IonGrid>
   
        <IonRow >
            
            <IonCol size-md="5" size-sm="12">
            <IonList>
            <IonItem>
           
   
         </IonItem>
            {activeList}
            </IonList>
            </IonCol>
            
            <IonCol size-md="7" size-sm="12">
            <IonList>
   
            <IonItem>
            <IonChip color="danger">
             <IonLabel color="">Confirmed</IonLabel>
           </IonChip>
   
         </IonItem>
                {confirmedList}
                </IonList>
   
                </IonCol>
            
   
            </IonRow> 
            </IonGrid>  
      )
}

 
export default Messaging