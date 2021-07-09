const inputFieldsConf = [
    {
        machNumber: {
            id: "machNumber",
            label: "M",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0 && value <=1))return true;
                return false;
            },
            error:"0 \\leq M \\leq 1",
            toM:(m)=>(m),
            fromM:(m)=>(m),
            width:150
        },
        pToP0:{
            id: "pToP0",
            label: " \\frac{p}{p_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0.52828 && value <1))return true;
                return false;
            },
            error:"0.52828 \\leq \\frac{p}{p_0} < 1",
            toM:(x)=>((5**(0.5))*(x**(-2/7)-1)**0.5),
            fromM:(m)=>((1+m**2/5)**(-3.5)),
            width:150
        },
        rhoToRho0:{
            id: "rhoToRho0",
            label: " \\frac{\\rho}{\\rho_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0.63394 && value <1))return true;
                return false;
            },
            error:"0.63394 \\leq \\frac{\\rho}{\\rho_0} < 1",
            toM:(x)=>((5**(0.5))*(x**(-2/5)-1)**0.5),
            fromM:(m)=>((1+m**2/5)**(-2.5)),
            width:150
        },
        tToT0:{
            id: "tToT0",
            label: " \\frac{T}{T_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0.83333 && value <1))return true;
                return false;
            },
            error:"0.83333 \\leq \\frac{T}{T_0} < 1",
            toM:(x)=>(((5-5*x)**0.5)/(x)**0.5),
            fromM:(m)=>(5/(5+(m**2))),
            width:150
        },
        aToA0:{
            id: "aToA0",
            label: " \\frac{a}{a_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0.91287 && value <1))return true;
                return false;
            },
            error:"0.91287 \\leq \\frac{a}{a_0} < 1",
            toM:(x)=>(((5**(0.5))*(1-x*x)**0.5)/x),
            fromM:(m)=>((1+m**2/5)**(-0.5)),
            width:150
        },
        aStarToA0:{
            id: "aStarToA0",
            label: " \\frac{A^\\star}{A} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0 && value <=1))return true;
                return false;
            },
            error:"0 \\leq \\frac{A^\\star}{A} \\leq 1",
            disabled:true,
            toM:(x)=>(x),
            fromM:(m)=>(m*(6/(5+m*m))**3),
            width:150
        },
        CP0:{
            id: "CP0",
            label: "Cp_0",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0 && value <=1.27561))return true;
                return false;
            },
            error:"0 \\leq Cp_0 < 1",
            disabled:true,
            toM:(x)=>(x),
            fromM:(m)=>((((1+(m*m)/5)**(3.5)-1)/(0.7*m*m))),
            width:150
        }
    },
    {
        machNumber: {
            id: "machNumber",
            label: "M",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=1 && value <=50))return true;
                return false;
            },
            error:"1 \\leq M \\leq 50",
            toM:(m)=>(m),
            fromM:(m)=>(m),
            width:150
        },
        pToP0:{
            id: "pToP0",
            label: " \\frac{p}{p_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>0 && value <=0.52828))return true;
                return false;
            },
            error:"0 < \\frac{p}{p_0} \\leq 0.52828",
            toM:(x)=>((5**(0.5))*(x**(-2/7)-1)**0.5),
            fromM:(m)=>((1+m**2/5)**(-3.5)),
            width:150
        },
        rhoToRho0:{
            id: "rhoToRho0",
            label: " \\frac{\\rho}{\\rho_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>0 && value <=0.633941))return true;
                return false;
            },
            error:" 0< \\frac{\\rho}{\\rho_0} \\leq 0.63394",
            toM:(x)=>((5**(0.5))*(x**(-2/5)-1)**0.5),
            fromM:(m)=>((1+m**2/5)**(-2.5)),
            width:150
        },
        tToT0:{
            id: "tToT0",
            label: " \\frac{T}{T_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0.002 && value <=0.83333))return true;
                return false;
            },
            error:" 0.002 \\leq \\frac{T}{T_0} \\leq 0.83333",
            toM:(x)=>(((5-5*x)**0.5)/(x)**0.5),
            fromM:(m)=>(5/(5+(m**2))),
            width:150
        },
        aToA0:{
            id: "aToA0",
            label: " \\frac{a}{a_0} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0.04468 && value <=0.91287))return true;
                return false;
            },
            error:" 0.04468 \\leq \\frac{a}{a_0} \\leq 0.91287",
            toM:(x)=>(((5**(0.5))*(1-x*x)**0.5)/x),
            fromM:(m)=>((1+m**2/5)**(-0.5)),
            width:150
        },
        aStarToA0:{
            id: "aStarToA0",
            label: " \\frac{A^\\star}{A} ",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0 && value <=1))return true;
                return false;
            },
            error:"0 \\leq \\frac{A^\\star}{A} \\leq 1",
            disabled:true,
            toM:(x)=>(x),
            fromM:(m)=>(m*(6/(5+m*m))**3),
            width:150
        },
        CP0:{
            id: "CP0",
            label: "Cp_0",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=1.27561 && value <=1608399.73062))return true;
                return false;
            },
            error:"1.27561 \\leq Cp_0 < 1608399.73062",
            disabled:true,
            toM:(x)=>(x),
            fromM:(m)=>((((1+(m*m)/5)**(3.5)-1)/(0.7*m*m))),
            width:150
        },
        prantdlAngle:{
            id: "prantdlAngle",
            label: "\\nu [^\\circ]",
            sanityCheck:(value)=>{
                if(value==="" ||(value>=0 && value <=1.27561))return true;
                return false;
            },
            error:"0 \\leq Cp_0 < 1",
            disabled:true,
            toM:(x)=>(x),
            fromM:(m)=>((((1+(m*m)/5)**(3.5)-1)/(0.7*m*m))),
            width:150
        }
    },
    {}
]

export default inputFieldsConf