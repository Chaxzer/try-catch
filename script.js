

  setTimeout(() => {
    document.body.appendChild(document.createElement("h1")).classList.add("text");
    document.querySelector("h1.text").innerHTML = "started";
  }, 2000);

// try {
//   // setTimeout(()=> //this will not work because of scheduled
//   //   {
//   //     document.body.appendChild(document.createElement("h1")).classList.add("text1");
//   //     document.querySelector("h1.text1").innerHTML = "no error"
//   //   }, 2100)
// }
  
 
setTimeout(() => {
  try {
    // document.body.appendChild(document.createElement("h1")).classList.add("text1");
    // document.querySelector("h1.text1").innerHTML = "no error";// This will not trigger the catch block
    console.log(balle-balle) // This will trigger the catch block
  }
  catch(error){
    document.body.appendChild(document.createElement("h1")).classList.add("text2");
    document.querySelector("h1.text2").innerHTML = "it is error";
  }
}, 2100);

