"use strict";(()=>{(()=>{"use strict";let a="auto",d="dark",l="light",m="hb-theme",v=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?d:l,i=()=>{let e=localStorage.getItem(m);return e||a},r=(e,n=!1)=>{n&&localStorage.setItem(m,e);let o=e===a?v():e;document.documentElement.setAttribute("data-bs-theme",o),E(o)},E=e=>{let n=new CustomEvent("hb:theme",{detail:{theme:e}});document.dispatchEvent(n)},u=e=>{let n="";document.querySelectorAll("[data-bs-theme-value]").forEach(c=>{c.getAttribute("data-bs-theme-value")===e?(c.classList.add("active"),n=c.getAttribute("data-bs-theme-name")??""):c.classList.remove("active")});let o=document.body.querySelector(`[data-bs-theme-value="${e}"] svg`)?.cloneNode(!0);document.body.querySelector(".btn-theme-toggle svg")?.replaceWith(o);let s=document.querySelector(".theme-toggle .theme-name");s.innerHTML=n},h=i();r(h),window.addEventListener("DOMContentLoaded",()=>{u(h),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",t=>{i()===a&&r(t.matches?d:l)});let e=t=>{let s=t.getAttribute("data-bs-theme-value"),c=s||a;r(c,!0),u(c)},n=document.querySelectorAll("[data-bs-theme-value]");n.forEach(t=>{t.addEventListener("click",()=>{e(t)})});let o=document.querySelector(".btn-theme-toggle");o!==null&&o.getAttribute("data-style")==="switch"&&o.addEventListener("click",()=>{let t=0;n.forEach((s,c)=>{if(s.classList.contains("active")){t=c+1;return}}),t>=n.length&&(t=0),e(n[t])})})})();})();
