import React from 'react';
import './ExploreContainer.css';
import cust from './CustomerList';
import Messaging from './Messaging';
import Keypad from './KeyPad';
import CreatePoll from './Polling';
import {  Route } from 'react-router-dom';
import { IonContent } from '@ionic/react';


interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonContent  scrollEvents={true}>

          <Route path="/orders/Customers" component={cust.CustomerList} exact />
          <Route path="/customer/Messages" component={Messaging} exact />
          <Route path="/orders/Create" component={Keypad} exact />
          <Route path="/poll/Polling" component={CreatePoll} exact />


    </IonContent>
  );
};

export default ExploreContainer;
