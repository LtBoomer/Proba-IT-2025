
const grillLikesFunction = (likes) =>{
    if(likes <= 100){
      return ({
        background: "#E58F8F",
        borderColor: "#ED5656",
        color: "#ED5656",
      })
    }
    if(likes > 100 && likes < 1000){
        return({
        background: "#ae6868ff",
        borderColor: "#8e3939ff",
        color: "#8e3939ff",
        })
    }
    if(likes >= 1000){
        return({
        background: "#792323",
        borderColor: "#4D0808",
        color: "#4D0808",
        })
    }
  };

  export default grillLikesFunction;