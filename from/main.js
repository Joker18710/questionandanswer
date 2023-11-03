function companyflg(ischecked){
  if(ischecked == true){
    document.getElementById("companyname").disabled = false;
  }
  else{
    document.getElementById("companyname").disabled = true;
  }
}

/*function custmerflg(ischecked){
  if(ischecked == true){
    document.getElementById("companyname").disabled = true;
  }else{
    document.getElementById("companyname").disabled = false;
  }
}*/

localStorage.setItem('mykey','getElementById("form")')

