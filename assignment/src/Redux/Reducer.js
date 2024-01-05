const intitaldata = [
    {
        id:1,
        month:"jan",
        Emissions:1902,
        supplier : "Adani",
        Revenue:293990,
        er : 129.8,
        mom : 24,
        year:2022
    
       },{
        id:2,
        month:"feb",
        Emissions:2394,
        supplier : "Reliance",
        Revenue:245905,
        er : 83.8,
        mom:23,
        year:2022
    
       },{
        id:3,
        month:"Mar",
        Emissions:4552,
        supplier : "Shaurya Drugs",
        Revenue:832392,
        er : 74.5,
        mom:-31,
        year:2022
    
       },{
        id:4,
        month:"Apr",
        Emissions:8800,
        supplier : "Orlife Healthcare",
        Revenue:413464,
        er : 65.5,
        mom:-45,
        year:2022
    
       },{
        id:5,
        month:"May",
        Emissions:1212,
        supplier : "Rezicure Pharmaceuticals",
        Revenue:534660,
        er : 88.1,
        mom:19,
        year:2022
    
       },{
        id:6,
        month:"Jun",
        Emissions:4903,
        supplier : "Steller Bio Labs",
        Revenue:545060,
        er : 127.2,
        mom:-28,
        year:2022
    
       },{
        id:7,
        month:"jul",
        Emissions:7934,
        supplier : "Ruzutte Organics",
        Revenue:590743,
        er : 79.9,
        mom:-45,
        year:2022
    
       },{
        id:7,
        month:"Aug",
        Emissions:5969,
        supplier : "Merion Care",
        Revenue:402934,
        er : 87.6,
        mom:-9,
        year:2022
    
       },{
        id:7,
        month:"Sept",
        Emissions:3845,
        supplier : "Eskos Pharma",
        Revenue:523458,
        er : 100.8,
        mom:28,
        year:2022
    
       },
    {
    id:1,
    month:"jan",
    Emissions:2205,
    supplier : "Adani",
    Revenue:220000,
    er : 99.8,
    mom : 25,
    year:2023

   },{
    id:2,
    month:"feb",
    Emissions:2251,
    supplier : "Reliance",
    Revenue:254815,
    er : 113.8,
    mom:28,
    year:2023

   },{
    id:3,
    month:"Mar",
    Emissions:4522,
    supplier : "Shaurya Drugs",
    Revenue:879797,
    er : 64.5,
    mom:-11,
    year:2023

   },{
    id:4,
    month:"Apr",
    Emissions:8522,
    supplier : "Orlife Healthcare",
    Revenue:464464,
    er : 54.5,
    mom:-67,
    year:2023

   },{
    id:5,
    month:"May",
    Emissions:1124,
    supplier : "Rezicure Pharmaceuticals",
    Revenue:548582,
    er : 168.1,
    mom:12,
    year:2023

   },{
    id:6,
    month:"Jun",
    Emissions:4524,
    supplier : "Steller Bio Labs",
    Revenue:516513,
    er : 114.2,
    mom:-20,
    year:2023

   },{
    id:7,
    month:"jul",
    Emissions:7858,
    supplier : "Ruzutte Organics",
    Revenue:564651,
    er : 71.9,
    mom:-58,
    year:2023

   },{
    id:7,
    month:"Aug",
    Emissions:5258,
    supplier : "Merion Care",
    Revenue:565556,
    er : 107.6,
    mom:-5,
    year:2023

   },{
    id:7,
    month:"Sept",
    Emissions:4524,
    supplier : "Eskos Pharma",
    Revenue:516541,
    er : 120.8,
    mom:20,
    year:2023

   }

]



const Reducer = (state=intitaldata,{type,payload})=>{
    switch(type){
        default:
            return state;
    }
}

export default Reducer;