// **Iteración #5: Probando For SI**

// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40. 
// Imprime en un ***console log*** el array.
// Puedes usar este array:

const placesToTravel = [{id: 5, name: 'Japan'}, {id: 11, name: 'Venecia'}, {id: 23, name: 'Murcia'}, {id: 40, name: 'Santander'}, {id: 44, name: 'Filipinas'}, {id: 59, name: 'Madagascar'}]


for (const place of placesToTravel) {
    // console.log(place.id);
       if (place.id == 11 || place.id == 40) {
        place.splice(0,0);
       }
       console.log(place);
}









// for (const key in place) {
//     // let a = placesToTravel[key];
//     // if (place[key] == 11 || place[key] == 40) {

//     //     place.splice(0,0);

//     // }
//     console.log(place[key]);
   
// }