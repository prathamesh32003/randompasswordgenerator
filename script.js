let input = document.getElementById("input");
let insp = document.getElementById("check");

document.getElementById("button").addEventListener("click", function(event) {
    let pass = '';
    let str;

    if(insp.checked) {
        str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "1234567890" + "@#%$";
    } else {
        str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + "1234567890";
    }
    
    for(let i = 0; i < 10; i += 1) {
        let char = Math.floor(Math.random() * str.length + 1);
    
        pass += str.charAt(char);
    }
    
    input.value = pass;
});

document.getElementById("copy").addEventListener("click", function(event) {
    var copyText = input;
    copyText.select();
    copyText.setSelectionRange(0, 99998);

    navigator.clipboard.writeText(copyText.value);
});