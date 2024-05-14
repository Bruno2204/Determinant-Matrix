function getDet(mat) {
    let det = 0;
    if (mat.length > 2 ) {
        for (const i in mat) {
            console.log({i,mat})
            console.log(copyMat(mat,i))
            det+= mat[0][i]*Math.pow(-1,i) * getDet(copyMat(mat,i))
        }
    }else {
        return mat[0][0]*mat[1][1]-mat[1][0]*mat[0][1]
    }
    return det;
}

function copyMat(mat, column) {
    let newmat = new Array();
    let w = 0;
    for (let i = 1; i < mat.length; i++) {
        let x = 0;
        newmat[w] = new Array();
        for (let j = 0; j < mat.length; j++) {
            if (j != column) {
                newmat[w][x] = mat[i][j];
                x++;
            }
        }
        w++
    }
    return newmat
}

function hacerCalc(){
    let matrix = new Array();
    let inputs = document.getElementsByClassName("matInput");
    l = + document.querySelector("input").value
    for (let i = 0; i < document.querySelector("input").value; i++) {
        matrix[i] = new Array();
        for (let j = 0; j < document.querySelector("input").value; j++) {
            matrix[i][j] = Number(inputs[l*i+j]?inputs[l*i+j].value:0) 
        }
    }
    document.querySelector("#lbResult").innerHTML = getDet(matrix)
}

document.querySelector("input").onchange = function (){
    document.querySelector("div").innerHTML = ""
    for (let i = 0; i < document.querySelector("input").value; i++) {
        for (let j = 0; j < document.querySelector("input").value; j++) {
            document.querySelector("div").innerHTML +=
            `<input type="number" value="0" class="matInput">`
        }
        document.querySelector("div").innerHTML += '<br>'
    }
    document.querySelector("button").onclick(); 
}

function randomize(){
    document.querySelector("div").innerHTML = ""
    for (let i = 0; i < document.querySelector("input").value; i++) {
        for (let j = 0; j < document.querySelector("input").value; j++) {
            document.querySelector("div").innerHTML +=
            `<input type="number" value="${Math.ceil(Math.random() * 10)-5}" class="matInput">`
        }
        document.querySelector("div").innerHTML += '<br>'
    }
}