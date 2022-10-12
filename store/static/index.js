import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import GS from '../../Styles/GlobalStyle';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import FW5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../../Screens/mainScreens/Home';
import Styles from '../../Styles';
import { Colors } from '../../config/Colors';
import { normalizeSize } from '../../utility';
import Account from '../../Screens/mainScreens/Account';
import LocationHeader from '../../Components/LocationHeader';
import AccountHeader from '../../Components/AccountHeader';
import { AppTheme } from '../../config/Constants';


export const landingPageBannerOption = [
    {
        title:"Earn Points",
        image:require("../../assets/images/LandingPageBanner0.png"),
        text:"Enjoy discounts on your next order when you refer your friends to fako."
    },
    {
        title:"Schedule Delivery For Future",
        image:require("../../assets/images/LandingPageBanner1.png"),
        text:"Send a package at a convenient tim, Schedule a future time and day to have your packages picked up and delivered."
    },
    {
        title:"Multiple Deliveries",
        image:require("../../assets/images/LandingPageBanner2.png"),
        text:"Have items delivered to multiple customers at various locations with one order."
    },
    {
        image:require("../../assets/images/LandingPageBanner0.png"),
        title:"Track Your Order",
        text:"Track the journey of your package, from pick up through to delivery."
    },
    {
        image:require("../../assets/images/LandingPageBanner1.png"),
        title:"OTP",
        text:"Ensure your package is delivered to the right person to customer."
    }
];

export const landingPageBtnOption = [
    {
        title:"Sign up",
        type:"filled",
        path:"Signup"
    },
    {
        title:"Sign in",
        type:"outline",
        path:"Login"
    }
];

export const SocialLoginList = [
    {
        Icon:(style={})=><Image source={require("../../assets/icons/googleIcon.png")}  style={[GS.icon, style]} />,
        text:"Google"
    },
    {
        Icon:(style={})=><Image source={require("../../assets/icons/fb.png")}  style={[GS.icon, style]} />,
        text:"Facebook"
    },
]

export const LoginFormList = [
    {
        placeholder:"Email Address",
        secureTextEntry:false,
        name:"email"

    },
    {
        placeholder:"Password",
        secureTextEntry:true,
        name:"password"
    },
    
]


export const SignupTopFormList = [
    {
       split:[
           {
            placeholder:"First Name",
            secureTextEntry:false,
            name:"firstname",
            type:"default"

           },
           {
            placeholder:"Last Name",
            secureTextEntry:false,
            name:"lastname",
            type:"default"

           },
       ]

    },
    {
        split:[
            {
             placeholder:"Code",
             secureTextEntry:false,
             name:"phonecode",
             type:"number-pad",
             style:{flex:0.34}

            },
            {
             placeholder:"Phone Number",
             secureTextEntry:false,
             name:"phonenumber",
             type:"number-pad",
             style:{flex:0.60}

            
            },
        ],
    },
    {
        placeholder:"Email Address",
        secureTextEntry:false,
        name:"email",
        type:"email-address"

    },
    
]

export const SignupBottomFormList = [
   
    {
        placeholder:"Password",
        secureTextEntry:true,
        name:"password",
        type:"password"
        
    },
    {
        placeholder:"Referal Code",
        secureTextEntry:false,
        name:"referalcode",
        type:"number-pad"
    },
    
]


export const BottomNavOptions = [
    {
        path:"Home",
        component:Home,
        Icon:({color})=><MCI name="home" size={normalizeSize(22)} color={color} style={{backgroundColor:"transparent"}} />,
        Text:({color})=><Text style={[Styles.normalText,{color:color}]}>Home</Text>,
        Header:()=><LocationHeader />

    },
    {
        path:"Booking",
        component:Home,
        Icon:({color})=><MCI name="file-document" size={normalizeSize(20)} color={color}  />,
        Text:({color})=><Text style={[Styles.normalText,{color:color}]}>Booking</Text>,
        Header:()=><LocationHeader />

    },
    {
        path:"Notification",
        component:Home,
        Icon:({color})=><FW5 name="bell" size={normalizeSize(19)} color={color} solid/>,
        Text:({color})=><Text style={[Styles.normalText,{color:color}]}>Notification</Text>,
        Header:()=><LocationHeader />
    
    },
    {
        path:"Account",
        component:Account,
        Icon:({color})=><FW5 name="user" size={normalizeSize(20)} color={color} solid />,
        Text:({color})=><Text style={[Styles.normalText,{color:color}]}>Account</Text>,
        Header:()=><AccountHeader />

    },
]


export const ServiceOption = [
    {
        icon:require("../../assets/images/box1.png"),
        title:"delivery",
        bg:Colors().themeGreen,
        style:{height:normalizeSize(30), width:normalizeSize(80), resizeMode:"contain"}

    },
    {
        icon:require("../../assets/images/car1.png"),
        title:"Foodie",
        bg:Colors().themeOrange,
        style:{height:normalizeSize(30), width:normalizeSize(80), resizeMode:"contain"}
    },
    
]


export const AccountMenuList = [
    {
        Icon: ()=><Image source={require("../../assets/icons/user1.png")} style={{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}} />,
        title:"Profile",
        path:"Profile"
    },
    {
        Icon: ()=><Image source={require("../../assets/icons/location-pin1.png")} style={{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}} />,
        title:"Manage Addresses",
        path:"ManageAddresses"

    },
    {
        Icon: ()=><Image source={require("../../assets/icons/insurance1.png")} style={{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}} />,
        title:"Privacy Policy"
    },
    {
        Icon: ()=><Image source={require("../../assets/icons/headphones1.png")} style={{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}} />,
        title:"Support"
    },
    {
        Icon: ()=><Image source={require("../../assets/icons/headphones1.png")} style={{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}} />,
        title:"Invite Referrals"
    },
    {
        Icon: ()=><Image source={require("../../assets/icons/credit-card1.png")} style={{width:normalizeSize(30), height:normalizeSize(30), resizeMode:"contain"}} />,
        title:"Avaiable Payment"
    },
]


export const ProfileEditFormTopList = [
    
       
    {
        placeholder:"First Name",
        secureTextEntry:false,
        name:"firstname",
        type:"default"

    },
    {
        placeholder:"Last Name",
        secureTextEntry:false,
        name:"lastname",
        type:"default"

    },
       

    
    {
        split:[
            {
             placeholder:"Code",
             secureTextEntry:false,
             name:"phonecode",
             type:"number-pad",
             style:{flex:0.34}

            },
            {
             placeholder:"Phone Number",
             secureTextEntry:false,
             name:"phonenumber",
             type:"number-pad",
             style:{flex:0.60}

            
            },
        ],
    },
    {
        placeholder:"Email Address",
        secureTextEntry:false,
        name:"email",
        type:"email-address"

    },
    
    
    
]


export const DiscountsBanners = [
    {
      title: 'Beautiful and dramatic Antelope Canyon',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/UYiroysl.jpg',
    },
    {
      title: 'Earlier this morning, NYC',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    },
    {
      title: 'White Pocket Sunset',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
      illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    },
    {
      title: 'Acrocorinth, Greece',
      subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
      illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    },
    {
      title: 'The lone tree, majestic landscape of New Zealand',
      subtitle: 'Lorem ipsum dolor sit amet',
      illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    },
  ];



export const ProfileEditFormBottomList = [
   
    {
        placeholder:"Country",
        secureTextEntry:false,
        name:"country",
        type:"default"
        
    },
    {
        placeholder:"City",
        secureTextEntry:false,
        name:"city",
        type:"default"
    },
    
]


export const AddAddressForm = [
    {
        placeholder:"Flat Number",
        secureTextEntry:false,
        name:"flat_number"

    },
    {
        placeholder:"Street",
        secureTextEntry:false,
        name:"street"

    },
    {
        placeholder:"Save As",
        secureTextEntry:false,
        name:"save_as"

    },
    
] 