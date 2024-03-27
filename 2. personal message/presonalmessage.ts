let prensonname :string = '';

prensonname = prompt("what is your name?") || "";

if( prensonname !== null && prensonname !==''){
    alert(`hello ${prensonname},would you like to learn some python today?`)
}
else{
    alert(`you have to file your name`)
}