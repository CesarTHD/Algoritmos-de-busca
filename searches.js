const n=10, q=10;

function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vectorGenerator(length) {
    // Gerar vetor com números aleatórios
    const vector = [];

    for (let i = 1; i < (length*2)+2; i+=2) {
        vector.push(i+2);
    }

    return vector;
}

//ordena vector
const bubbleSort = (vector) => {
    console.time("TempoOrdenacao");
    let aux = 0;
    for (let i = 0; i < vector.length; i++) {
        for (let j = vector.length - 1; j > i; j--) {
            if (vector[i] > vector[j]) {
                aux = vector[i];
                vector[i] = vector[j];
                vector[j] = aux;
            }
        }
    }
    console.timeEnd("TempoOrdenacao");
    return vector;
}

const sequential = (elementSearch, vector) => {
    //console.log("----------Sequential----------");
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] == elementSearch) {
            return i;
        } else {
            if (i == vector.length - 1) {
                return -1;
            }
        }
    }
}

const optimizedSequential = (elementSearch, vector) => {
    
    //const orderedvector = bubbleSort(vector);
    // const orderedVector = vector.sort();
    
    for (let i = 0; i < vector.length - 1; i++) {
        if (vector[i] > elementSearch) {
            return -1;
        }
        if (vector[i] == elementSearch) {
            return i;
        } else {
            if (i == vector.length - 1) {
                return -1;
            }
        }
    }
}



// parâmetros:
//     sequence: sequência gerada aleatoriamente
//     key: chave procurada
//     start: Inicio do vector, deve ser passado o valor 0
//     end: Fim do vector, dever ser passado o tamanho do vector menos 1 (vector.length - 1)
//     nex: (number exec) Número da execução, deve ser passado 1 para que o vector seja ordenado apenas na primeira chamada da função
function binarySearch(sequence, key, start, end, nex) {
    // let orderedVector = sequence;

    // if (nex == 1) {
    //     //orderedVector = bubbleSort(sequence);
    //     orderedVector = sequence.sort();
    // } else {
    //     orderedVector = sequence;
    // }

    if (start > end) {
        return -1;
    }

    let middle = Math.floor((start + end) / 2);

    if (sequence[middle] === key) {
        return middle;
    } else if (key < sequence[middle]) {
        nex += 1;
        return binarySearch(sequence, key, start, middle - 1, nex);
    } else {
        nex += 1;
        return binarySearch(sequence, key, middle + 1, end, nex);
    }
}

for(let nn=3;nn<=6;nn++){
    for(let qq=2;qq<=5;qq++){
        console.log("n:", n**nn);
        console.log("q:", q**qq);
        console.time('time');
        for(let i=0; i<q**qq; i++){
            let v = vectorGenerator(n**nn);
            let key = randomNumberGenerator(1, n**nn);
            
            //let position = sequential(key, v);
            let position = optimizedSequential(key, v);
            //let position = binarySearch(v, key, 0, v.length-1, 1);
        
        
            // if(position == -1){
            //     console.log(`A chave ${key} não foi encontrada`);
            // }else{
            //     console.log(`A chave ${key} foi encontrada na posição ${position}`)
            // }
        }
        console.timeEnd('time');
        console.log("");
    }
}


