import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as r}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form"),n=document.querySelectorAll("input"),c=({delay:o,shouldResolve:t})=>{if(o>=0)return new Promise((e,s)=>{setTimeout(()=>{t?e(`Fulfilled promise in ${o}ms`):s(`Rejected promise in ${o}ms`)},o)});r.show({title:"Caution",message:"Number should be positive",backgroundColor:"orange",theme:"dark",color:"orange",iconUrl:"./achtung.png",position:"topRight"})},l=()=>{const o={};return o.delay=n[0].value,o.shouldResolve=n[1].checked,o};i.addEventListener("submit",o=>{o.preventDefault();const t=l();c(t).then(e=>r.show({title:"OK",message:e,backgroundColor:"green",theme:"dark",color:"green",iconUrl:"./ok.png",position:"topRight"})).catch(e=>{r.show({title:"OK",message:e,backgroundColor:"red",theme:"dark",color:"red",iconUrl:"./ok.png",position:"topRight"})})});
//# sourceMappingURL=commonHelpers2.js.map
