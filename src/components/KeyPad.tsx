import { IonContent, 
    IonHeader, IonListHeader,
    IonPage, 
    IonTitle, 
    IonChip,
    IonItem,
    IonInput,
    IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonText,IonButton,
     IonIcon,
     IonLabel,IonRow, IonCol,IonGrid,

     IonList, IonItemSliding, IonItemOptions, IonItemOption, IonNote, IonCard
    } from '@ionic/react';
    import React,{useState} from 'react'
    import {close,chevronForwardOutline,chevronBackOutline,chatbubblesOutline,podiumOutline,logOutOutline,    peopleOutline, fileTrayOutline,  settingsOutline } from 'ionicons/icons';
 
 
 let
 setOrderTypeState = (e:any) => {
    e.preventDefault();
    let v:any = e.currentTarget.dataset.value.toLowerCase();
  },
  setKeyPadState = (e:any) => {
    let v:any = e.currentTarget.dataset.value,
      t:any = document.getElementById("pin");
    if (t.value.length <= 3 && v !== "Done" && v !== "Backspace") {
      t.value += v;
    } else if (v === "Done" && t.value.length > 3) {

    } else if (v === "Backspace" && t.value.length !== 0) {
      t.value = t.value.slice(0, -1);
    }
    e.preventDefault();

  }, handleKeyPress = (e:any) => {
    let v : any = e ,
      t :any = document.getElementById("pin");
    if (
      t.value.length <= 3 &&
      v.keyCode !== 13 &&
      v.keyCode !== 8 &&
      isFinite(v.key)
    ) {
      t.value += v.key;
    } else if (v.keyCode === 13 && t.value.length > 3) {

    } else if (v.keyCode === 8 && t.value.length !== 0) {
      t.value = t.value.slice(0, -1);
    }
    e.preventDefault();
  },


 keyMaker = (padLayout:any, options:any, types:any) => {
    return padLayout.map((i:any) => {
        let sizeOfCol = (i=== "Backspace" ||i=== "Done")?"4":"4",
        ifThisIsNotANumber = (i=== "Backspace" ||i=== "Done")?true:false;
        if(i!==" "){
      return (
          <IonCol size={sizeOfCol}>
                    <IonButton shape="round" color={(!ifThisIsNotANumber)?"dark":"light"}
                    expand="full"
            data-value={i}
            onClick={types === "keypad" ? setKeyPadState : setOrderTypeState}
          >
               {(i=== "Backspace")?<IonIcon icon={chevronBackOutline}></IonIcon>:<IonLabel>{i}</IonLabel> }
            </IonButton>
    </IonCol>
      );
    }else{
        return(
            <IonCol size="4"></IonCol> 
        )
    }
    });
  }


  document.addEventListener("keydown", handleKeyPress);
const
 ServiceTab: React.FC=()=> {
   
      const type = "orderTab",
        options = {
          class: "uk-icon-button  uk-button-default uk-width-1-1   uk-text-bold"
        },
        padLayout = ["Online", "Pickup", "Table"];
  
      return (
      <IonRow>
          <IonCol>
              {keyMaker(padLayout, options, type)}
              </IonCol>
        </IonRow>
      );
    
  }

,Keypad: React.FC = ()=> {

    const [text, setText] = useState<string>();
    const [number, setNumber] = useState<number>();
      const type = "keypad",
        options = {
          class: "uk-icon-button  uk-button-secondary uk-width-1-1   uk-text-bold"
        },
        padLayout = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          " ",
          "0",
          " ",
          "Backspace"," ",
          "Done"
        ];
  
      return (
         

        <IonGrid>
            
             <IonRow>
            <IonCol size-md="4" size-xs="2"></IonCol>
            <IonCol size-md="4" size-xs="8">
          <IonRow>
          <IonCol size="12">

          <IonItem>
            <IonInput id="pin" value={text} placeholder="Enter Phone Number" onIonChange={e => setText(e.detail.value!)}></IonInput>
          </IonItem>
           </IonCol>
 </IonRow> 
 
  <IonRow  >
 <IonCol >
            <IonRow  >
          
          {keyMaker(padLayout, options, type)}
          
             
            </IonRow>
            </IonCol>
            </IonRow>
            <IonRow>
<IonCol>

    <ServiceTab />
</IonCol>

            </IonRow>
            </IonCol>
            <IonCol size-md="4"size-xs="2" ></IonCol>
           </IonRow>
        </IonGrid>
        
      );
    
  }
  export default Keypad