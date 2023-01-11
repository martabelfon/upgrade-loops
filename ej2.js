// **Iteración #2: Condicionales avanzados SI**

// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la 
// propiedad ***isApproved*** a true o false en consecuencia. 
// Una vez lo tengas compruébalo con un ***console.log***.

// Puedes usar este array para probar tu función:

const alumns = [
        {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true}, //OK
		{name: 'Juan Miranda', T1: false, T2: true, T3: true}, //OK
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true} //OK
]





for (const alumn of alumns) {

    let approved = 0;

    alumn.T1 && approved++;
    alumn.T2 && approved++;
    alumn.T3 && approved++;

   //approved >= 2 ? alumn.isAproved = true : alumn.isAproved = false >> explicación santi

   if (approved >= 2){
    alumn.isAproved = true;
   } else {
    alumn.isAproved = false;
   }

   //con el if - else, yo lo entiendo mejor.

}

console.log(alumns);



