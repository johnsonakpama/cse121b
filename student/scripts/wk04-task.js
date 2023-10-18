/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const Profile = {
    firstName: 'Johnson',
    lastName: 'Akpama',
};




/* Populate Profile Object with placesLive objects */
const placesLived = {
    city: 'Jos',
    state: 'Plateau',
    country: 'Nigeria',
    numberYears: '25',
};


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myprofile. name;

/* Photo with attributes */
function myfunction(){
    const p = document.getElementById(myImg).src;
    document.getElementById('photo').innerHTML = p;
};



/* Favorite Foods List*/
myprofile.favoriteFood. forEach(food =>{
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myprofile.hobbies. forEach(hobbies => {
    let ul = document. createElement('ul');
    ul.textContent = hobbies;
    document. querySelector('#hubbies'). appendChild(ul);
})


/* Places Lived DataList */
document.querySelector('#places-lives').textContent = myprofile.placesLived;


