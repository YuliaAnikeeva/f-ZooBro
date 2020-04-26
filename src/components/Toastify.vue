<template>
<span id="toast-button">Click</span>
</template>

<script>
document.getElementById("button").addEventListener("click",function(){
  Toastify({
    text: "I'm a toast",
    duration: 3000,
    destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    positionLeft: true, // `true` or `false`
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)"
  }).showToast();
});
</script>

<style>
html,body{
  height:100%;
  margin:0;
  padding:0;
  font-family:"Roboto","segoe ui",sans-serif;
  -webkit-user-select: none;
  user-select: none;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#toast-button{
  padding: 10px 40px;
  border-radius: 5px;
  background-color: #96c93d;
  color: #ffffff;
  cursor: pointer;
  font-size: 1.5em;
}
</style>

