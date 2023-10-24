/* W05: Programming Tasks */

/* Declare and initialize global variables */
const url = 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg';

async function getTemples(){
    const response = await fetch('https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg');
    const templeProtrail = await response.json();
    output(templeProtrail);
};
getTemples();


/* async displayTemples Function */
const displayTemplesprotrail = async() =>{
    const response = await fetch(url);
    templeProtrail= await response.json();
    output(templeProtrail);
};
displayTemplesprotrail();

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg');
    templeList = await response.json();
    output(templeList);
  };
  getTemples();
  


/* reset Function */
const reset = () => {
    document.querySelector("#temples").innerHTML = "";
  };

/* sortBy Function */
const sortBy = () => {
    reset();
  
    let filter = document.querySelector("#sortBy").value;
  
    switch (filter) {
      case "Utah":
        output(
          templesprotrail.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 < templeName2) return -1;
            else if (templeName1 > templeName2) return 1;
            else return 0;
          })
        );
        break;
      case "Outside of Utah":
        output(
          templesprotrail.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return -1;
            else if (templeName1 < templeName2) return 1;
            else return 0;
          })
        );
        break;
        case "Built Before 1950":
        output(
          templesprotrail.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return -1;
            else if (templeName1 < templeName2) return 1;
            else return 0;
          })
        );
        break;
        case "No Filter":
        output(
          templesprotrail.sort((temple1, temple2) => {
            let templeName1 = temple1.templeName.toLowerCase();
            let templeName2 = temple2.templeName.toLowerCase();
            if (templeName1 > templeName2) return -1;
            else if (templeName1 < templeName2) return 1;
            else return 0;
          })
        );
        break;
      default:
        
        output(
          templeList.sort((temple1, temple2) =>
            temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
              ? 1
              : temple2.templeName.toLowerCase() >
                temple1.templeName.toLowerCase()
              ? -1
              : 0
          )
        );
        break;
    }
  };
  

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", sortBy);
