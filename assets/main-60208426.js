(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const o=document.querySelectorAll(".needs-validation");Array.from(o).forEach(r=>{r.addEventListener("submit",i=>{r.checkValidity()||(i.preventDefault(),i.stopPropagation()),r.classList.add("was-validated")},!1)})})();document.querySelector(".header-hamberger-btn").addEventListener("click",function(o){o.preventDefault(),document.querySelector(".header-hamberger-list").style.maxHeight=="141px"?document.querySelector(".header-hamberger-list").style.maxHeight="0px":document.querySelector(".header-hamberger-list").style.maxHeight="141px"});