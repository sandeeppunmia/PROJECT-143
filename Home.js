import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import axios from 'axios';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            article_details:{}
        }
    }
}