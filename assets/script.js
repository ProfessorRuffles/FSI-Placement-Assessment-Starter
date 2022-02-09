console.log('BARK!!!')
let yourName = "Joseph Lazo" 
let gb = 0      
let cc = 0      
let sugar = 0   
let total = 0    
document.getElementById('credit').textContent = `Created by ${yourName}`
document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Ginger bread + button was clicked!')
    gb += 1;
    document.getElementById('qty-gb').textContent = gb;
    total +=1;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-gb').addEventListener('click', function() {
    if (gb > 0){
        gb -= 1;  total -=1;
    }
    //gb -= 1;
    document.getElementById('qty-gb').textContent = gb;
    //total -=1;
    document.getElementById('qty-total').textContent = total;
})

// Event listener for clicks on the "+" button for Chocolate Chip Cookies
document.getElementById('add-cc').addEventListener('click', function() {
    cc += 1;
    document.getElementById('qty-cc').textContent = cc;
    total +=1;
    document.getElementById('qty-total').textContent = total;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    if (cc > 0){
        cc -= 1;  total -=1; 
    }
    //cc -= 1;
    document.getElementById('qty-cc').textContent = cc;
    //total -=1;
    document.getElementById('qty-total').textContent = total;
})

    // TODO: Write the code to be run when the "+" button for "Ginger Bread" is clicked
// Event listener for clicks on the "+" button for Sugar Sprinkles cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    sugar += 1;
    document.getElementById('qty-sugar').textContent = sugar;
    total +=1;
    document.getElementById('qty-total').textContent = total;
})

// TODO: Hook up event listeners for the rest of the buttons 
document.getElementById('minus-sugar').addEventListener('click', function() {
    if (sugar > 0){
        sugar -= 1; total -=1;   
    }
    //sugar -= 1;
    document.getElementById('qty-sugar').textContent = sugar;
    //total -=1;
    document.getElementById('qty-total').textContent = total;
}) 