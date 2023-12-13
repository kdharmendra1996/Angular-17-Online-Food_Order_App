import { Food } from "./app/shared/food";
import { Tag } from "./app/shared/tag";


export const Food_Data:Food[]=[
    {
        id:1,
        name:"Cake with Bread",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India"],
        star:4.4,
        imageUrl:"/assets/food/item-1.jpeg",
        tag:["Lunch","FastFood"]
      },
      {
        id:2,
        name:"Cake with Bread",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India"],
        star:4,
        imageUrl:"/assets/food/item-2.jpeg",
        tag:["BreakFast","FastFood","Cake"]
      },
      {
        id:3,
        name:"Egg Bread with Chees",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India"],
        star:3.3,
        imageUrl:"/assets/food/item-4.jpeg",
        tag:["BreakFast","FastFood","Cake"]
      },
      {
        id:4,
        name:"Cake with Bread",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India"],
        star:4.4,
        imageUrl:"/assets/food/s-3.jpg",
        tag:["BreakFast","FastFood"]
      },
      {
        id:5,
        name:"Woda Cream With Souse",
        cookTime:"20-30",
        price:10,
        favorite:false,
        origins:["South Indian"],
        star:4.4,
        imageUrl:"/assets/food/27.jpg",
        tag:["SlowFood"]
      },
      {
        id:6,
        name:"Burger With Chicken+Cold Drink",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India"],
        star:2.5,
        imageUrl:"/assets/food/b-3.jpg",
        tag:["Lunch","FastFood","Burger"]
      },
      {
        id:4,
        name:"Cake with Bread",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India"],
        star:4,
        imageUrl:"/assets/food/b-1.jpg",
        tag:["Lunch","FastFood"]
      },
      {
        id:8,
        name:"Farm House Burger + Chicken Fried With Cold Drink",
        cookTime:"20-30",
        price:12,
        favorite:true,
        origins:["India","Italy"],
        star:4.4,
        imageUrl:"/assets/food/box-2.jpg",
        tag:["Burger","FastFood","SlowFast"]
      },
      {
        id:9,
        name:"Simple Burger Tika",
        cookTime:"20-30",
        price:10,
        favorite:false,
        origins:["India","Chaina"],
        star:4,
        imageUrl:"/assets/food/26.jpg",
        tag:["Burger","FastFood"]
      },
      {
        id:10,
        name:"Smoking Grilled Chicken Fried",
        cookTime:"20-30",
        price:10,
        favorite:true,
        origins:["India","Italy"],
        star:4.7,
        imageUrl: "/assets/food/dinner.jpg",
        tag:["Lunch","FastFood","Dinner"]
      }
]

export const Tag_Data=[
  {name:"All",count:10},
  {name:"FastFood",count:10},
  {name:"Cake",count:4},
  {name:"Lunch",count:3},
  {name:"Dinner",count:2},
  {name:"BreakFast",count:3},
  {name:"Burger",count:5},
  {name:"SlowFood",count:1}
  
]