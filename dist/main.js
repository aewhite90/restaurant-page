(()=>{"use strict";const e=()=>{Array.from(document.querySelectorAll(".btn")).forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),document.getElementById("home").classList.add("active");let e=(()=>{const e=document.createElement("section");e.classList.add("home-section");const t=document.createElement("h1"),n=document.createElement("h6"),d=document.createElement("h6");return t.textContent="Come dine with us for a truly memorable experience",n.textContent="at The Open Table we have a seat waiting for you",d.textContent="and we guarantee you will love it",e.appendChild(t),e.appendChild(n),e.appendChild(d),e})(),t=document.querySelector("section");const n=document.getElementById("content");n.removeChild(t),n.appendChild(e)};function t(e,t,n){const d=document.createElement("div");d.classList.add("card",n);const c=document.createElement("h5");c.textContent=e;const a=document.createElement("h6");return a.textContent=t,d.appendChild(c),d.appendChild(a),d}const n=()=>{Array.from(document.querySelectorAll(".btn")).forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),document.getElementById("menu").classList.add("active");let e=(()=>{const e=document.createElement("section");e.classList.add("menu-section");const n=document.createElement("div"),d=document.createElement("h3");d.textContent="Salads",n.classList.add("title"),n.appendChild(d);const c=document.createElement("div"),a=document.createElement("h3");a.textContent="Entrees",c.classList.add("title"),c.appendChild(a);const o=document.createElement("div"),l=document.createElement("h3");l.textContent="Desserts",o.classList.add("title"),o.appendChild(l);const i=document.createElement("div");i.classList.add("card-container"),i.appendChild(t("Asparagus Salad","$20","asparagus")),i.appendChild(t("Spinich Salad","$20","spinich"));const s=document.createElement("div");s.classList.add("card-container"),s.appendChild(t("Filet Mignon","$35","filet-mignon")),s.appendChild(t("Pork Chops","$25","pork-chops")),s.appendChild(t("Grilled Chicken","$25","grilled-chicken")),s.appendChild(t("Burger","$17","burger"));const m=document.createElement("div");return m.classList.add("card-container"),m.appendChild(t("Ice Cream","$10","ice-cream")),m.appendChild(t("Apple Pie","$15","apple-pie")),e.appendChild(n),e.appendChild(i),e.appendChild(c),e.appendChild(s),e.appendChild(o),e.appendChild(m),e})(),n=document.querySelector("section");const d=document.getElementById("content");d.removeChild(n),d.appendChild(e)},d=()=>{Array.from(document.querySelectorAll(".btn")).forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),document.getElementById("contact").classList.add("active");let e=(()=>{const e=document.createElement("section");e.classList.add("contact-section");const t=document.createElement("h1"),n=document.createElement("h6"),d=document.createElement("h6"),c=document.createElement("h6");return t.textContent="We would love to hear from you!",n.textContent="Phone: 555.555.1234",d.textContent="Email: info@theopentable.com",c.textContent="Address: 123 Main St",e.appendChild(t),e.appendChild(n),e.appendChild(d),e.appendChild(c),e})(),t=document.querySelector("section");const n=document.getElementById("content");n.removeChild(t),n.appendChild(e)};(()=>{let e=(()=>{const e=document.createElement("header"),t=document.createElement("div");t.classList.add("title");const n=document.createElement("h1");n.textContent="The Open Table";const d=document.createElement("h6");d.textContent="Where you never eat alone",t.appendChild(n),t.appendChild(d),e.appendChild(t);const c=document.createElement("div");c.classList.add("tabs");const a=document.createElement("ul"),o=document.createElement("li");o.classList.add("btn"),o.classList.add("active"),o.setAttribute("id","home"),o.textContent="Home";const l=document.createElement("li");l.classList.add("btn"),l.setAttribute("id","menu"),l.textContent="Menu";const i=document.createElement("li");return i.classList.add("btn"),i.setAttribute("id","contact"),i.textContent="Contact",a.appendChild(o),a.appendChild(l),a.appendChild(i),c.appendChild(a),e.appendChild(c),e})(),t=(()=>{const e=document.createElement("section");e.classList.add("home-section");const t=document.createElement("h1"),n=document.createElement("h6"),d=document.createElement("h6");return t.textContent="Come dine with us for a truly memorable experience",n.textContent="at The Open Table we have a seat waiting for you",d.textContent="and we guarantee you will love it",e.appendChild(t),e.appendChild(n),e.appendChild(d),e})(),n=(()=>{const e=document.createElement("footer"),t=document.createElement("p");return t.classList.add("footer"),t.textContent="Made by aewhite90",e.appendChild(t),e})();const d=document.getElementById("content");d.appendChild(e),d.appendChild(t),d.appendChild(n)})(),(()=>{const t=document.getElementById("home"),c=document.getElementById("menu"),a=document.getElementById("contact");t.addEventListener("click",e),c.addEventListener("click",n),a.addEventListener("click",d)})()})();