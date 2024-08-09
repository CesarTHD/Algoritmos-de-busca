const dez = 10;

function randomNumberGenerator(min, max){};
function vectorGenerator(length){};
function heapify(arr, n, i){};
function heapSort(arr){};
function sequential(elementSearch, vector){};
function optimizedSequential(elementSearch, orderedVector){};
function binarySearch(sequence, key, start, end){};
function testSequential(){};
function testSequentialOptimized(){};
function testBinarySearch(){};





// TESTES - Descomente o teste que deseja executar

testSequential();
// testSequentialOptimized();
// testBinarySearch();






// Implementação de testes
function testSequential() {
    for (let nn = 4; nn <= 7; nn++) {
        let erros = 0
        let acertos = 0

        let v = vectorGenerator(dez ** nn);

        const startTime = Date.now();
        for (let qq = 2; qq <= 5; qq++) {
            for (let i = 0; i < dez ** qq; i++) {
                let key = randomNumberGenerator(1, dez**7);

                let position = sequential(key, v);

                if (position === -1) {
                    // console.log(`A chave ${key} não foi encontrada`);
                    erros += 1;
                } else {
                    // console.log(`A chave ${key} foi encontrada na posição ${position}`)
                    acertos += 1;
                }
            }
            const endTime = Date.now()
            const timeSearch = endTime - startTime;
            console.log(`{ "N": ${nn}, "Q": ${qq},"time": ${timeSearch} },`)
        }
    }
}

function testSequentialOptimized() {
    for (let nn = 4; nn <= 7; nn++) {
        let erros = 0
        let acertos = 0

        let v = vectorGenerator(dez ** nn);

        let startTime = Date.now();
        let sequence = heapSort(v);
        let endTime = Date.now();

        const timeOrder = endTime - startTime;

        startTime = Date.now();
        for (let qq = 2; qq <= 5; qq++) {
            for (let i = 0; i < dez ** qq; i++) {
                let key = randomNumberGenerator(1, 10000000);

                let position = optimizedSequential(key, sequence);

                if (position === -1) {
                    // console.log(`A chave ${key} não foi encontrada`);
                    erros += 1;
                } else {
                    // console.log(`A chave ${key} foi encontrada na posição ${position}`)
                    acertos += 1;
                }
            }
            endTime = Date.now()
            const timeSearch = endTime - startTime;
            console.log(`{ "N": ${nn}, "Q": ${qq},"time": ${timeSearch + timeOrder} },`)
        }
    }

}

function testBinarySearch() {
    for (let nn = 4; nn <= 7; nn++) {
        let erros = 0
        let acertos = 0

        let v = vectorGenerator(dez ** nn);

        let startTime = Date.now();
        let sequence = heapSort(v);
        let endTime = Date.now();

        const timeOrder = endTime - startTime;

        startTime = Date.now();
        for (let qq = 2; qq <= 5; qq++) {
            for (let i = 0; i < dez ** qq; i++) {
                let key = randomNumberGenerator(1, 10000000);

                let position = binarySearch(sequence, key, 0, v.length-1);

                if (position === -1) {
                    // console.log(`A chave ${key} não foi encontrada`);
                    erros += 1;
                } else {
                    // console.log(`A chave ${key} foi encontrada na posição ${position}`)
                    acertos += 1;
                }
            }
            endTime = Date.now()
            const timeSearch = endTime - startTime;
            console.log(`{ "N": ${nn}, "Q": ${qq}, "time-order:" ${timeOrder}, "time": ${timeSearch + timeOrder} },`)
        }
    }

}

// Implementação de funções
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function vectorGenerator(length) {
    const vector = [];
    for (let i = 0; i < length; i++) {
        vector.push(randomNumberGenerator(1, 10000000));
    }

    return vector;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

function sequential(elementSearch, vector) {
    for (let i = 0; i < vector.length; i++) {
        if (vector[i] === elementSearch) {
            return i;
        }
    }
    return -1;
}

function optimizedSequential(elementSearch, orderedVector) {
    for (let i = 0; i < orderedVector.length - 1; i++) {
        if (orderedVector[i] > elementSearch) {
            return -1;
        }
        else if (orderedVector[i] === elementSearch) {
            return i;
        }
    }
    return -1;
}



// parâmetros:
//     sequence: sequência gerada aleatoriamente
//     key: chave procurada
//     start: Inicio do vector, deve ser passado o valor 0
//     end: Fim do vector, dever ser passado o tamanho do vector menos 1 (vector.length - 1)
function binarySearch(sequence, key, start, end) {
    if (start > end) {
        return -1;
    }

    let middle = Math.floor((start + end) / 2);

    if (sequence[middle] === key) {
        return middle;
    } else if (key < sequence[middle]) {
        return binarySearch(sequence, key, start, middle - 1);
    } else {
        return binarySearch(sequence, key, middle + 1, end);
    }
}



