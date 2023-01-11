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

let isApproved;
let contar = 0;

for (const alumn of alumns) {

    for (const key in alumn) {

        for (const value of key) {

            if (T1 && T2 || T1 && T3 || T2 && T3 == true) {
                for (let i = 0; i <= 2; i++) {
                    contar += i;
                    
                }
            }
            
            console.log(contar);
        }

    }

}

