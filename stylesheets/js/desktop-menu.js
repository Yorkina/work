!function(){for(var e=document.querySelectorAll('[name^="#nav"]'),t=.4,n=0;n<e.length;n++)e[n].addEventListener("click",function(e){function n(e){null===start&&(start=e);var o=e-start,r=position<0?Math.max(w-o/t,a+position):Math.min(a+o/t,a+position);window.scrollTo(0,r),r!=a+position&&requestAnimationFrame(n)}e.preventDefault();var o=document.querySelector(".header__btn-menu"),r=document.querySelector(".header__head-line");o.classList.remove("header__btn-menu--closed"),r.classList.remove("header__head-line--menu-style");var a=window.pageYOffset,i=this.href.replace(/[^#]*(.*)/,"$1");position=document.querySelector(i).getBoundingClientRect().top,start=null,requestAnimationFrame(n)},!1)}();