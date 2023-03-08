const e=document.querySelector("button"),t=document.querySelector("button").nextElementSibling;let n=null;e.addEventListener("click",(()=>{n=setInterval((()=>{document.querySelector("body").style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.addEventListener("click",(()=>{clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.ecb1795c.js.map
