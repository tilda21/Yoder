require("dotenv").config();


const getDataAPI = async () => {
    try {
      const rawResponse = await fetch(`https://melroune.github.io/starwars-api/api/all.json`);
      const resData = await rawResponse.json();
      console.log(resData)
      return (resData);
    }
    catch(e) {
      //console.log(e.message);
    } 
  };

export { getDataAPI };