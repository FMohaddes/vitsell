import { accent , neutral , primary , secondary , size , success } from "../global";

export const lightTheme = {
     id                  : "light" ,
     success             : success[ 100 ] ,
     accent              : accent[ 100 ] ,
     white               : neutral[ 100 ] ,
     black               : neutral[ 600 ] ,
     grey                : neutral[ 400 ] ,
     primaryColorLighter : primary[ 100 ] ,
     primaryColorLight   : primary[ 200 ] ,
     primaryColorMain    : primary[ 300 ] ,
     primaryColorDark    : primary[ 400 ] ,
     greyBoxBG           : neutral[ 200 ] ,
     textColorLight      : neutral[ 300 ] ,
     textColorMain       : neutral[ 400 ] ,
     textColorDark       : neutral[ 500 ] ,
     // primaryColorHover         : "hsl(0, 0%, 0%)" ,
     // primaryColorActive        : "hsl(0, 0%, 0%)" ,
     primaryColorGradient : "linear-gradient(252.18deg, #D72339 0.28%, #F23B51 93.8%)" ,
     radialMenu           : "radial-gradient(50% 139.81% at 50% -39.81%, rgba(47, 55, 78, 0.5) 0%, rgba(72, 82, 113, 0) 100%)" ,
     widgetGlow           : "linear-gradient(113.91deg, rgba(32, 58, 126, 0.5) 0%, rgba(11, 152, 197," +
          " 5e-05) 82.9%)" ,
     
     shadow : {
          boxShadow     : `0px 0px 24px rgba(189, 182, 183, 0.25)` ,
          primaryShadow : "0px 4px 20px rgba(56, 56, 57, 0.25)" ,
     } ,
     border : {
          borderDark    : ".3rem solid #0D0D0D" ,
          borderRadius1 : size.radius1 ,
          borderRadius2 : size.radius2 ,
     } ,
     
};




