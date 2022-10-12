export const White="#FFFFFF"
export const BottomTabBackground="#323943"
export const lightSky = "#1583a1";
export const lightGrey = "#C4C4C4"

export const Colors = (theme,extra={})=>{
    const colors = {
        black:"#1A1A1A",
        dark_grey:"#666772",
        colorPrimary  :"#18A0FB",
        colorPrimaryDark  :"#2196F3",
        colorAccent  :"#2196F3",
        change_pass_blue  :"#18A0FB",
        colorPrimaryLight  :"#B7CCEC",
        button_textcolor  :"#ffffff",
        dark_grey  :"#666772",
        textgray  :"#EEEEEE",
        textgray2:"#747474",
        unselected  :"#97A0C6",    
        white  :"#FFFFFF",  
        grey:"#989fcb",
        red:"#FF1717",
        themeGreen:"#37BA42",
        themeOrange: "#FF8000",
        themeBlue: "#2F77EB"

    }
    if(!theme)
    return colors;

    return {
        ...colors,
        ...extra
    }
}

