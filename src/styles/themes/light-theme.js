import { accent , neutral , primary , secondary , size , success } from "../global";

export const lightTheme = {
     id                  : "light" ,
     success               : success[ 100 ] ,
     accent               : accent[ 100 ] ,
     white               : neutral[ 100 ] ,
     black               : neutral[ 500 ] ,
     grey               : neutral[ 400_50 ] ,
     primaryColorLighter : primary[ 100 ] ,
     primaryColorLight   : primary[ 200 ] ,
     primaryColorMain    : primary[ 400 ] ,
     primaryColorDark    : primary[ 500 ] ,
     primaryColorDarker  : primary[ 600 ] ,
     secondaryColorLighter : secondary[ 200 ] ,
     secondaryColorLight : secondary[ 300 ] ,
     secondaryColorMain2 : secondary[ 400 ] ,
     secondaryColorMain : secondary[ 500 ] ,
     secondaryColorDark : secondary[ 600 ] ,
     secondaryColorDarker : secondary[ 600 ] ,
     textColorMain       : neutral[ 100 ] ,
     textColorDark       : neutral[ 200 ] ,
     textColorDarker     : neutral[ 300 ] ,
     // primaryColorHover         : "hsl(0, 0%, 0%)" ,
     // primaryColorActive        : "hsl(0, 0%, 0%)" ,
     primaryColorGradientLight : "linear-gradient(180deg, rgba(159, 175, 239, 0.512) 2.1%, rgba(140, 152, 190, 0.504) 94.76%)" ,
     radialMenu                : "radial-gradient(50% 139.81% at 50% -39.81%, rgba(47, 55, 78, 0.5) 0%, rgba(72, 82, 113, 0) 100%)" ,
     widgetGlow                : "linear-gradient(113.91deg, rgba(32, 58, 126, 0.5) 0%, rgba(11, 152, 197," +
          " 5e-05) 82.9%)" ,
     
     shadow    : {
          boxShadow     : `0px 0px 24px rgba(189, 182, 183, 0.25)` ,
          primaryShadow : "0px 4px 20px rgba(56, 56, 57, 0.25)" ,
     } ,
     border :{
          borderDark:".3rem solid #0D0D0D",
          borderRadius1      : size.radius1 ,
          borderRadius2      : size.radius2 ,
     },
  
};




