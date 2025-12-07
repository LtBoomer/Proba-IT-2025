
const grillLikesFunction = (likes, id) =>{
    if(!likes.includes(id)){
      return ({
        background: "#E58F8F",
        borderColor: "#ED5656",
        color: "#ED5656",
      })
    }
    if(likes.includes(id)){
        return({
        background: "#792323",
        borderColor: "#4D0808",
        color: "#4D0808",
        })
    }
  };

  export default grillLikesFunction;