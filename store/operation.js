import {defineStore} from 'pinia'
 export const useCrudStore = defineStore('crud', {
    state: () => ({
            data:[],
            loading: false
            
    }),
   actions:{
    updateUser(user){
        const {id}=user
        let update=this.data.find((item)=>item.id===id)
        if(update){
            update=user
        }else{
            console.log("record not found")
        }
    },
    deleteUser(id){
        console.log(id)
        this.data=this.data.filter((item)=>item.id!==id)
    },
   },
   
   
});
