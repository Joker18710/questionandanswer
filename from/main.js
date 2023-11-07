function companyflg(ischecked){
  if(ischecked == true){
    document.getElementById("companyname").disabled = false;
  }
  else{
    document.getElementById("companyname").disabled = true;
  }
}

function custmerflg(ischecked){
  if(ischecked == true){
    document.getElementById("companyname").disabled = true;
  }else{
    document.getElementById("companyname").disabled = false;
  }
}


const container = document.querySelector("#container");
const radiobutton = document.querySelector("#radiobutton");
const companyname = document.querySelector("#companyname");
const inputForm = document.querySelector("#inputForm");
const years = document.querySelector("#years");
const eadress = document.querySelector("#eadress");
const postCode = document.querySelector("#postCode");
const saveBtn = document.querySelector("#saveBtn");
const backBtn =document.querySelector("#backBtn");
const Adress = document.querySelector("#Adress");
const ask = document.querySelector("#ask");
console.log(container);
console.log(radiobutton);
console.log(companyname);
console.log(inputForm);
console.log(saveBtn);
console.log(backBtn);
console.log(years);
console.log(eadress);
console.log(postCode);
console.log(Adress);
console.log(ask);

//c or b
saveBtn.addEventListener("click",()=>{
  const inputDate = radiobutton.value;
  localStorage.setItem("key8",inputDate);
  radiobutton.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key8");
  radiobutton.value = savedDate;
})


//会社名
saveBtn.addEventListener("click",()=>{
  const inputDate = companyname.value;
  localStorage.setItem("key1",inputDate);
  companyname.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key1");
  companyname.value = savedDate;
})


//氏名
saveBtn.addEventListener("click",()=>{
  const inputDate = inputForm.value;
  localStorage.setItem("key",inputDate);
  inputForm.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key");
  inputForm.value = savedDate;
})

//生年月日
saveBtn.addEventListener("click",()=>{
  const inputDate = years.value;
  localStorage.setItem("key2",inputDate);
  years.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key2");
  years.value = savedDate;
})

//メールアドレス
saveBtn.addEventListener("click",()=>{
  const inputDate = eadress.value;
  localStorage.setItem("key3",inputDate);
  eadress.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key3");
  eadress.value = savedDate;
})

//郵便番号
saveBtn.addEventListener("click",()=>{
  const inputDate = postCode.value;
  localStorage.setItem("key4",inputDate);
  postCode.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key4");
  postCode.value = savedDate;
})

//住所
saveBtn.addEventListener("click",()=>{
  const inputDate = Adress.value;
  localStorage.setItem("key5",inputDate);
  Adress.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key5");
  Adress.value = savedDate;
})

//お問合せ内容
saveBtn.addEventListener("click",()=>{
  const inputDate = ask.value;
  localStorage.setItem("key6",inputDate);
  ask.value=""
})
backBtn.addEventListener("click",()=>{
  const savedDate = localStorage.getItem("key6");
  ask.value = savedDate;
})

//ラジオボタンの値をローカルストレージに保存
function saveRadioButtonValue(){
  var radioButton = document.querySelectorAll('input[name="content"]');
  radioButton.forEach(function(radioButton) {
  if (radioButton.checked) {
  localStorage.setItem('content', radioButton.value);
 }
 });
}

// ページが読み込まれたときに以前選択された値を設定する関数
 function loadSavedValues() {
  var savedContent = localStorage.getItem('content');
  if (savedContent) {
  var radioButton = document.querySelector(`input[name="content"][value="${savedContent}"]`);
  if (radioButton) {
  radioButton.checked = true;
  }
  }
}







