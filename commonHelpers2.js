import"./assets/modulepreload-polyfill-3cfb730f.js";import{i}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form"),t=document.querySelectorAll("input");console.log(t);const c=({delay:o,shouldResolve:r})=>new Promise((e,s)=>{setTimeout(()=>{r?e(`Fulfilled promise in ${o}ms`):s(`Rejected promise in ${o}ms`)},o)}),m=()=>{const o={};return o.delay=t[0].value,o.shouldResolve=t[1].checked,o};l.addEventListener("submit",o=>{o.preventDefault();const r=m();console.log(t[0].valueAsNumber),c(r).then(e=>i.show({title:"OK",message:e,backgroundColor:"green",theme:"dark",color:"green",iconUrl:"../img/ok.svg",position:"topRight"})).catch(e=>{new Promise((s,n)=>{t[0].valueAsNumber>=0?s(i.show({title:"Error",message:e,backgroundColor:"red",theme:"dark",color:"red",iconUrl:"../img/notok.svg",position:"topRight"})):n(i.show({title:"Caution",message:"You forgot important data (number should be positive)",backgroundColor:"orange",theme:"dark",color:"orange",iconUrl:"../img/achtung.svg",position:"topRight"}))})})});
//# sourceMappingURL=commonHelpers2.js.map