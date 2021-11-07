import useFetch from "../components/useFetch";
import { IonContent, 
    IonHeader, IonListHeader,
    IonPage, 
    IonTitle, 
    IonChip,
    IonItem,
    IonCard,IonSelectOption,IonSelect,IonItemDivider,
    IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonText,IonButton,
     IonIcon,
     IonLabel,IonRow, IonCol,IonGrid,

     IonList, IonItemSliding, IonItemOptions, IonItemOption, IonNote, IonSegment
    } from '@ionic/react';
import './Polling.css'
    import React,{useState} from 'react'
    import { pin, wifi, walk,closeCircle,personOutline ,heart, trash, star, archive, ellipsisHorizontal, ellipsisVertical   } from 'ionicons/icons';

     const CreatePoll: React.FC= ()=>{

     
        return(
            <IonGrid>
                <IonRow>
          <IonCol></IonCol>          
<NewPoll />
<IonCol></IonCol>
</IonRow>
            </IonGrid>
        )

     }

     const NewPoll: React.FC = ()=>{
        const [gender,setGender] = useState(0)
        const [hairColor,setHairColor] = useState(0)


         return(
             <IonCol size="8">
                 
                 <IonHeader color="dark">
  <h1>Create A Poll</h1>
</IonHeader>

<IonList>
          <IonListHeader>
            <IonLabel>
              Single Selection
            </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Hair Color</IonLabel>
            <IonSelect value={hairColor} okText="Okay" cancelText="Dismiss" onIonChange={e => setHairColor(e.detail.value)}>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>Gender: {gender ?? '(none selected)'}</IonItem>
          <IonItem>Hair Color: {hairColor}</IonItem>
        </IonList>


<IonButton shape="round" fill="solid">Create</IonButton>


             </IonCol>
        )
     }


     const PollData: React.FC = ()=>{
        const [gender,setGender] = useState(0)
        const [hairColor,setHairColor] = useState(0)


         return(
             <IonCol size="8" class="card">
                 
                 <IonHeader color="dark">
  <h1>Create A Poll</h1>
</IonHeader>

<IonList>
          <IonListHeader>
            <IonLabel>
              Single Selection
            </IonLabel>
          </IonListHeader>

          <IonItem>
            <IonLabel>Gender</IonLabel>
            <IonSelect value={gender} placeholder="Select One" onIonChange={e => setGender(e.detail.value)}>
              <IonSelectOption value="female">Female</IonSelectOption>
              <IonSelectOption value="male">Male</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem>
            <IonLabel>Hair Color</IonLabel>
            <IonSelect value={hairColor} okText="Okay" cancelText="Dismiss" onIonChange={e => setHairColor(e.detail.value)}>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItemDivider>Your Selections</IonItemDivider>
          <IonItem>Gender: {gender ?? '(none selected)'}</IonItem>
          <IonItem>Hair Color: {hairColor}</IonItem>
        </IonList>


<IonButton shape="round" fill="solid">Create</IonButton>


             </IonCol>
        )
     }

     export default CreatePoll