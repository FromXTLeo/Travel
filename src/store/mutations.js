export default {
    changeCity (state, city) {
      try{
        state.city = city 
        localStorage.city=city
      }catch(e){

      }
      
    }
  }