import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GS from '../../Styles/GlobalStyle';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FW5 from 'react-native-vector-icons/FontAwesome5';
// import Home from '../../Screens/mainScreens/Home';
import Styles from '../../Styles';
import { Colors } from '../../config/Colors';
import { normalizeSize } from '../../utility';
// import Account from '../../Screens/mainScreens/Account';
// import LocationHeader from '../../Components/LocationHeader';
// import AccountHeader from '../../Components/AccountHeader';
import { AppTheme } from '../../config/Constants';


export const HomePageBannersList = [
    {
        title:"Earn Points",
        image:require("../../assets/images/banner1.png"),
        text:"Enjoy discounts on your next order when you refer your friends to fako."
    },
    {
        title:"Schedule Delivery For Future",
        image:require("../../assets/images/banner2.png"),

        text:"Send a package at a convenient tim, Schedule a future time and day to have your packages picked up and delivered."
    },
    {
        title:"Multiple Deliveries",
        image:require("../../assets/images/banner3.png"),
        text:"Have items delivered to multiple customers at various locations with one order."
    },
    {
        image:require("../../assets/images/banner4.png"),
        title:"Track Your Order",
        text:"Track the journey of your package, from pick up through to delivery."
    },
   
];

export const CategoryList = [
    {
        title:"Fruits & Vegetables",
        image:require("../../assets/images/category1.png"),
        text:""
    },
    {
        title:"Fish, Meat & Egg",
        image:require("../../assets/images/category2.png"),


        text:"Send a package at a convenient tim, Schedule a future time and day to have your packages picked up and delivered."
    },
    {
        title:"Breakfast & Instant Food",
        image:require("../../assets/images/category3.png"),

        text:"Have items delivered to multiple customers at various locations with one order."
    },
    {
        image:require("../../assets/images/category4.png"),
        title:"Snacks",
        text:"Track the journey of your package, from pick up through to delivery."
    },
    {
        title:"Tea, Coffee & Health drinks",
        image:require("../../assets/images/category5.png"),
        text:"Enjoy discounts on your next order when you refer your friends to fako."
    },
    {
        title:"Cold drinks & Juices",
        image:require("../../assets/images/category6.png"),


        text:"Send a package at a convenient tim, Schedule a future time and day to have your packages picked up and delivered."
    },
    {
        title:"Chocolates & Ice-cream",
        image:require("../../assets/images/category7.png"),

        text:"Have items delivered to multiple customers at various locations with one order."
    },
    {
        image:require("../../assets/images/category8.png"),
        title:"Rice, Dal, Atta & Maida",
        text:"Track the journey of your package, from pick up through to delivery."
    },
];
export const ProfileOptionList = [
    {
        name:"Profile",
        icon: require("../../assets/icons/user1.png")

    },
    {
        name:"Save Address",
        icon: require("../../assets/icons/white_pin1.png")

    },
    {
        name:"My Order",
        icon: require("../../assets/icons/order1.png")

    },
    {
        name:"Cart",
        icon: require("../../assets/icons/cart1.png")

    },
    {
        name:"FAQ's",
        icon: require("../../assets/icons/wpf_faq.png")

    },
    {
        name:"Logout",
        icon: require("../../assets/icons/logout.png")

    },

];
export const List = [
    {
        title:"Content-1",
        image:{uri :'../../assets/images/sample3.png'},
        text:"Have items delivered to multiple customers at various locations with one order"
    },
    {
        title:"Content-2",
        image:{uri :'../../assets/images/sample3.png'},
        text:"Send a package at a convenient tim, Schedule a future time and day to have your packages picked up and delivered."
    },
    {
        title:"Content-1",        
        image:{uri :'../../assets/images/sample3.png'},
        text:"Have items delivered to multiple customers at various locations with one order."
    }
]