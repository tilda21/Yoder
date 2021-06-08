require("dotenv").config();


const getDataAPI = async () => {
    try {
      const rawResponse = await fetch(`https://akabab.github.io/starwars-api/api/all.json`);
      const resData = await rawResponse.json();
      return (resData);
    }
    catch(e) {
      console.error(e.message);
    } 
  };

export { getDataAPI };