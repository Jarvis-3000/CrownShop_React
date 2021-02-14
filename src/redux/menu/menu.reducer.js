import * as actionTypes from "./menu.actionTypes"

const INITIAL_STATE={
    items_content:[
        {
            img_url:"https://i.ibb.co/cvpntL1/hats.png",
            title:"Hats",
            width:"30%",
            height:"300px" ,
            id:1
        },
        {
            img_url:"https://i.ibb.co/px2tCc3/jackets.png",
            title:"Jackets",
            width:"30%",
            height:"300px" ,
            id:2    
        },
        {
            img_url:"https://i.ibb.co/0jqHpnp/sneakers.png",
            title:"Sneakers",
            width:"30%" ,
            height:"300px" ,
            id:3   
        },
        {
            img_url:"https://i.ibb.co/GCCdy8t/womens.png.jpg",
            title:"Womens",
            width:"45%" ,
            height:"400px",
            id:4    
        },
        {
            img_url:"https://i.ibb.co/R70vBrQ/men.png",
            title:"Mens",
            width:"45%",
            height:"400px"  ,
            id:5 
        }
    ]
}

const menuReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:            //never forget to make default case (otherwise error!!!)
            return state
        
    }
}

export default menuReducer