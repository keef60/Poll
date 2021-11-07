import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,IonToggle
  } from '@ionic/react';
  
  import React, { useState } from 'react';
  import { useLocation } from 'react-router-dom';
  import {addCircleSharp,addCircleOutline,chatbubblesOutline,podiumOutline,logOutOutline,    peopleOutline, fileTrayOutline,  settingsOutline } from 'ionicons/icons';
  import './Menu.css';
  
  interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
  }
  
  interface Account {
    iosIcon: string;
    mdIcon: string;
    title: string;
  }

  const accountSetting: Account[]=[  {
    title: 'Logout',
    iosIcon: logOutOutline
    ,
    mdIcon: logOutOutline

  },], appPages: AppPage[] = [
    {
      title: 'Create',
      url: '/orders/Create',
      iosIcon: addCircleOutline,
      mdIcon: addCircleSharp
    },
    {
      title: 'Customers',
      url: '/orders/Customers',
      iosIcon: peopleOutline,
      mdIcon: peopleOutline
    },
    {
      title: 'Message',
      url: '/customer/Messages',
      iosIcon: chatbubblesOutline
      ,
      mdIcon: chatbubblesOutline
    },
    {
      title: 'Polls',
      url: '/poll/Polling',
      iosIcon: podiumOutline,
      mdIcon: podiumOutline
    },
    
    {
      title: 'Settings',
      url: '/account/Settings',
      iosIcon: settingsOutline,
      mdIcon: settingsOutline
    }
  ];
  
  

  
  const Menu: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const location = useLocation();
  

    
    return (
      <IonMenu contentId="main" type="overlay">
        <IonContent>
          <IonList id="inbox-list">
            <IonListHeader>Company Name</IonListHeader>
            <IonNote>hi@ionicframework.com</IonNote>
            {appPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
  
          <IonList id="account-actions">
           
            {accountSetting.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem routerDirection="none" lines="none" detail={false}>
                    <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
          <IonItem>
            <IonLabel>{(checked)?"Dark":"Light"} Mode</IonLabel>
            <IonToggle checked={checked} value="pepperoni" onIonChange={e => setChecked(e.detail.checked)} />
          </IonItem>
        </IonContent>
      </IonMenu>
    );
  };
  
  export default Menu;