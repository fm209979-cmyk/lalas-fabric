// MEDIA: put your video, poster, music and 4 lookbook photo links here (URL or data URI). Leave "" to show placeholders.
// REVIEWS: these are SAMPLE reviews. Replace them with real customer reviews (with permission) before going live, or set REVIEWS=[] to hide the section.
const REVIEWS = [
  {n:"Ayesha K.", c:"Karachi", s:5, i:"Rose Lawn 3-Piece", t:"The lawn is so soft and the colours look just like the photos. The stitching is neat and delivery was quick."},
  {n:"Hira M.", c:"Lahore", s:5, i:"Sage Embroidered 3-Piece", t:"Ordered this for a wedding and got so many compliments. The packaging felt really premium too."},
  {n:"Sana R.", c:"Islamabad", s:4, i:"Peach Cotton 2-Piece", t:"Lovely fabric and a good fit. Cash on delivery made it easy to trust a new brand."},
  {n:"Mehwish A.", c:"Faisalabad", s:5, i:"Plum Khaddar 3-Piece", t:"Warm without being heavy. I will definitely order again this season."},
  {n:"Zainab T.", c:"Multan", s:5, i:"Mint Lawn 3-Piece", t:"Bank transfer was simple and they confirmed my order on WhatsApp within minutes."}
];

const MEDIA = {
  video: "",
  poster: "",
  music: "",
  lookbook: [
    'url("images/look1.jpg"), linear-gradient(135deg,#4a0f1a,#8a2a38)',
    'url("images/look2.jpg"), linear-gradient(135deg,#4a0f1a,#8a2a38)',
    'url("images/look3.jpg"), linear-gradient(135deg,#4a0f1a,#8a2a38)',
    'url("images/look4.jpg"), linear-gradient(135deg,#4a0f1a,#8a2a38)'
  ],
  topText: ["Free delivery above Rs 10,000", "Cash on delivery all over Pakistan", "Bank transfer accepted"],
  bannerImg: "",
  bannerTitle: "Winter Collection",
  bannerText: "Warm khaddar and velvet suits, now in stock",
  bannerBtn: "Shop now",
  collections: [
    {t:"Winter Collection", p:"Warm khaddar and velvet suits, now in stock", c:"#7b1e2b", bg:"#f6efe4", cat:"Winter"},
    {t:"Lawn Collection", p:"Featherlight lawn in soft, fresh colours", c:"#2f6f4a", bg:"#eef3e6", cat:"Lawn"},
    {t:"Formal Collection", p:"Embroidered 3-piece suits for every celebration", c:"#5a2a6b", bg:"#f3ebf3", cat:"Formal"},
    {t:"Casual Collection", p:"Easy cotton 2-piece sets for everyday wear", c:"#1f3a5f", bg:"#e9eef5", cat:"Casual"}
  ],
  facebook: "https://facebook.com/yourpage",
  instagram: "https://instagram.com/yourpage",
  whatsapp: "923001234567"
};

// Photos: put files in an "images" folder next to this page, named 1.jpg, 2.jpg ... (second photo 1-2.jpg), look1.jpg..look4.jpg and video.mp4. They replace the drawings automatically. Prices are in PKR.
const PRODUCTS = [
  {id:1, name:"Rose Lawn 3-Piece", cat:"Lawn", price:6500, c:["#7b1e2b","#b04a58"], img:'url("images/1.jpg"), linear-gradient(165deg,#7b1e2b,#b04a58)', img2:'url("images/1-2.jpg"), linear-gradient(165deg,#b04a58,#7b1e2b)'},
  {id:2, name:"Sage Embroidered 3-Piece", cat:"Formal", price:12900, c:["#1f4d3a","#4f8a6d"], img:'url("images/2.jpg"), linear-gradient(165deg,#1f4d3a,#4f8a6d)', img2:'url("images/2-2.jpg"), linear-gradient(165deg,#4f8a6d,#1f4d3a)'},
  {id:3, name:"Ivory Chikankari 3-Piece", cat:"Formal", price:15500, c:["#c8962e","#e8c46a"], img:'url("images/3.jpg"), linear-gradient(165deg,#c8962e,#e8c46a)', img2:'url("images/3-2.jpg"), linear-gradient(165deg,#e8c46a,#c8962e)'},
  {id:4, name:"Peach Cotton 2-Piece", cat:"Casual", price:4200, c:["#1f3a5f","#5578a6"], img:'url("images/4.jpg"), linear-gradient(165deg,#1f3a5f,#5578a6)', img2:'url("images/4-2.jpg"), linear-gradient(165deg,#5578a6,#1f3a5f)'},
  {id:5, name:"Plum Khaddar 3-Piece", cat:"Winter", price:8900, c:["#c46a7a","#e8a3ae"], img:'url("images/5.jpg"), linear-gradient(165deg,#c46a7a,#e8a3ae)', img2:'url("images/5-2.jpg"), linear-gradient(165deg,#e8a3ae,#c46a7a)'},
  {id:6, name:"Mint Lawn 3-Piece", cat:"Lawn", price:6200, c:["#5a2a6b","#9a62ab"], img:'url("images/6.jpg"), linear-gradient(165deg,#5a2a6b,#9a62ab)', img2:'url("images/6-2.jpg"), linear-gradient(165deg,#9a62ab,#5a2a6b)'},
  {id:7, name:"Mustard Cotton 2-Piece", cat:"Casual", price:4800, c:["#2f6f6a","#6db3ab"], img:'url("images/7.jpg"), linear-gradient(165deg,#2f6f6a,#6db3ab)', img2:'url("images/7-2.jpg"), linear-gradient(165deg,#6db3ab,#2f6f6a)'},
  {id:8, name:"Maroon Velvet 3-Piece", cat:"Winter", price:18500, c:["#8a4b2a","#c98a5e"], img:'url("images/8.jpg"), linear-gradient(165deg,#8a4b2a,#c98a5e)', img2:'url("images/8-2.jpg"), linear-gradient(165deg,#c98a5e,#8a4b2a)'}
];

const BANK = {title:"Account title: Lala's Fabric", bank:"Bank: Meezan Bank", acc:"Account: 0000-0000-0000-00", iban:"IBAN: PK00 MEZN 0000 0000 0000 0000"};
let cart = [], cat = "All";
const $ = id => document.getElementById(id), fmt = n => "Rs " + n.toLocaleString("en-PK");

function chips(){
  const cs = ["All", ...new Set(PRODUCTS.map(p => p.cat))];
  if($("chips")) {
    $("chips").innerHTML = cs.map(c => `<button class="chip" aria-pressed="${c===cat}" data-c="${c}">${c}</button>`).join("");
    $("chips").onclick = e => { if(e.target.dataset.c){ cat = e.target.dataset.c; chips(); grid(); } };
  }
}

function grid(){
  if(!$("grid")) return;
  $("grid").innerHTML = PRODUCTS.filter(p => cat === "All" || p.cat === cat).map(p => {
    const bg = p.img ? p.img : `linear-gradient(165deg,${p.c[0]},${p.c[1]})`;
    return `<article class="p"><div class="ph" style="background-image:${bg}">${p.img?"":p.cat}</div>
    <div class="pb"><h3>${p.name}</h3><div class="pr">${fmt(p.price)}</div>
    <div class="row"><select id="s${p.id}" aria-label="Size"><option>S</option><option selected>M</option><option>L</option><option>XL</option></select>
    <button class="add" data-id="${p.id}">Add to cart</button></div></div></article>`;
  }).join("");
}

if($("grid")){
  $("grid").onclick = e => {
    const id = +e.target.dataset.id; if(!id) return;
    const p = PRODUCTS.find(x => x.id === id), size = $("s"+id).value, k = cart.find(i => i.id === id && i.size === size);
    k ? k.q++ : cart.push({id, size, q:1, name:p.name, price:p.price});
    render(); openCart();
    const cb = $("open"); if(cb){ cb.classList.remove("bump"); void cb.offsetWidth; cb.classList.add("bump"); }
  };
}

function render(){
  try{ localStorage.setItem("cart", JSON.stringify(cart)); }catch(e){}
  if($("cnt")) $("cnt").textContent = cart.reduce((a,i) => a + i.q, 0);
  const tot = cart.reduce((a,i) => a + i.q * i.price, 0);
  if(!$("body")) return;
  if(!cart.length){ $("body").innerHTML = "<p>Your cart is empty. Add a suit to get started.</p>"; return; }
  
  $("body").innerHTML = cart.map((i,n) => `<div class="item"><div>${i.name}<br><small>Size ${i.size} x ${i.q}</small></div><div>${fmt(i.q*i.price)} <button class="x" data-r="${n}" aria-label="Remove">x</button></div></div>`).join("") +
  `<div class="total"><span>Total</span><span>${fmt(tot)}</span></div>
  <label for="nm">Full name</label><input id="nm" autocomplete="name">
  <label for="ph">Phone (03xx xxxxxxx)</label><input id="ph" type="tel" autocomplete="tel">
  <label for="ct">City</label><input id="ct" autocomplete="address-level2">
  <label for="ad">Full address</label><textarea id="ad" rows="2" autocomplete="street-address"></textarea>
  <label>Payment</label>
  <div class="pay"><label><input type="radio" name="pm" value="cod" checked>Cash on delivery</label><label><input type="radio" name="pm" value="bank">Bank transfer</label></div>
  <div class="bank" id="bk" hidden>${Object.values(BANK).join("<br>")}<br>Send the payment screenshot on WhatsApp after placing the order.</div>
  <div class="err" id="err" role="alert"></div>
  <button class="cta" style="width:100%;margin-top:8px" id="place">Place order</button>`;
  
  document.querySelectorAll("[name=pm]").forEach(r => r.onchange = () => { if($("bk")) $("bk").hidden = r.value !== "bank" || !r.checked; });
}

if($("body")){
  $("body").onclick = e => {
    if(e.target.dataset.r !== undefined){ const n = +e.target.dataset.r; cart.splice(n,1); render(); }
    if(e.target.id === "place") place();
  };
}

function place(){
  const v = id => $(id).value.trim(), ph = v("ph").replace(/[\s-]/g, "");
  if(!v("nm") || !v("ct") || !v("ad")) return $("err").textContent = "Please fill in your name, city and address.";
  if(!/^(03\d{9}|\+923\d{9})$/.test(ph)) return$("err").textContent = "Enter a valid mobile number, for example 03001234567.";
  const pm = document.querySelector("[name=pm]:checked").value, tot = cart.reduce((a,i) => a + i.q * i.price, 0);
  const order = {name: v("nm"), phone: ph, city: v("ct"), address: v("ad"), payment: pm, items: cart, total: tot};
  console.log("ORDER", order);
  $("body").innerHTML = `<h2 style="font-size:30px">Thank you, ${order.name}</h2><p>Your order of ${fmt(tot)} is received. We will call you on ${ph} to confirm.${pm==="bank"?"<br><br>Please transfer the amount and send the screenshot on WhatsApp.":""}</p>${MEDIA.whatsapp ? `<p><a class="cta" style="display:inline-block;text-decoration:none" target="_blank" rel="noopener" href="${waOrder(order)}">Send order on WhatsApp</a></p>` : ""}<button class="cta" id="done">Continue shopping</button>`;
  cart = []; try{ localStorage.removeItem("cart"); }catch(e){} if($("cnt")) $("cnt").textContent = 0; if($("done")) $("done").onclick = () => { if($("cart")) $("cart").classList.remove("open"); };
}

function openCart(){ if($("cart")) $("cart").classList.add("open"); render(); }
if($("open")) $("open").onclick = openCart;
if($("close")) $("close").onclick = () => { if($("cart")) $("cart").classList.remove("open"); };

try{ cart = JSON.parse(localStorage.getItem("cart") || "[]"); }catch(e){ cart = []; }
chips(); grid(); render();

(function(){
  const els = document.querySelectorAll("main h2:not(#bt),.vid,.lb");
  els.forEach(e => e.classList.add("rv"));
  if(!("IntersectionObserver" in window)){ els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver(es => es.forEach(x => { if(x.isIntersecting){ x.target.classList.add("in"); io.unobserve(x.target); } }), {threshold:.15});
  els.forEach(e => io.observe(e));
  if(MEDIA.video && $("v")){
    const vo = new IntersectionObserver(es => es.forEach(x => x.isIntersecting ? $("v").play().catch(() => {}) : $("v").pause()), {threshold:.4});
    vo.observe($("v"));
  }
})();

(function(){
  const v = $("v");
  if(v){
    if(MEDIA.video){ v.src = MEDIA.video; if(MEDIA.poster) v.poster = MEDIA.poster; } else v.hidden = true;
  }
  if($("lb")) $("lb").innerHTML = MEDIA.lookbook.map((u,i) => `<div class="lk" style="background-image:${u ? u : "none"}">${u ? "" : "Photo " + (i+1)}</div>`).join("");
  (function(){
    const m = [].concat(MEDIA.topText), t = $("top"); let i = 0;
    if(t){
      t.textContent = m[0] || "";
      if(m.length > 1) setInterval(() => { t.style.opacity = 0; setTimeout(() => { i = (i+1)%m.length; t.textContent = m[i]; t.style.opacity = 1; }, 300); }, 4000);
    }
  })();
  if($("bt")) $("bt").textContent = MEDIA.bannerTitle;
  if($("bp")) $("bp").textContent = MEDIA.bannerText;
  if($("bb")) $("bb").textContent = MEDIA.bannerBtn;
  if(MEDIA.bannerImg && $("bn")) $("bn").style.backgroundImage = `url(${MEDIA.bannerImg})`;
  
  const ICON = {
    facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>'
  };
  if($("soc")) $("soc").innerHTML = ["facebook","instagram"].filter(k => MEDIA[k]).map(k => `<a href="${MEDIA[k]}" target="_blank" rel="noopener">${ICON[k]}${k[0].toUpperCase()+k.slice(1)}</a>`).join("");
  
  if(MEDIA.whatsapp && $("wa")){
    $("wa").href = `https://wa.me/${MEDIA.whatsapp}?text=${encodeURIComponent("Assalam o Alaikum, I have a question about your suits.")}`;
    $("wa").hidden = false;
  }
  
  const a = $("aud"), mb = $("mus");
  if(a && mb){
    if(!MEDIA.music) mb.hidden = true;
    else {
      a.src = MEDIA.music;
      mb.onclick = () => { if(a.paused){ a.play(); mb.textContent = "Pause music"; } else { a.pause(); mb.textContent = "Play music"; } };
    }
  }
})();

function waOrder(o){
  const t = `New order\nName: ${o.name}\nPhone: ${o.phone}\nCity: ${o.city}\nAddress: ${o.address}\nPayment: ${o.payment==="cod"?"Cash on delivery":"Bank transfer"}\n` + o.items.map(i => `${i.name} (${i.size}) x${i.q}`).join("\n") + `\nTotal: ${fmt(o.total)}`;
  return `https://wa.me/${MEDIA.whatsapp}?text=${encodeURIComponent(t)}`;
}

if($("grid")){
  $("grid").addEventListener("pointermove", e => {
    const c = e.target.closest(".p"); if(!c) return;
    const q = c.getBoundingClientRect(), x = (e.clientX - q.left)/q.width - .5, y = (e.clientY - q.top)/q.height - .5;
    c.style.transform = `perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-4px)`;
  });
  $("grid").addEventListener("pointerout", e => {
    const c = e.target.closest(".p"); if(c) c.style.transform = "";
  });
}

const DESC = {
  Lawn: "Featherlight lawn in hand-picked colours, finished with a fall that moves like water. Made for long, golden afternoons.",
  Formal: "Intricate embroidery, stitched thread by thread by master hands. Designed to be remembered at every celebration.",
  Casual: "Soft cotton cut for ease, polished enough for every day and comfortable enough that you will never want to take it off.",
  Winter: "Rich, warm cloth with a quiet weight and a deep, jewel-like colour. Elegance that keeps the cold at bay."
};

const VAR = [
  (t,a) => ({t:`translate3d(${t<0?-t*260:-t*320}px,0,${t<0?t*900:t*400}px) rotateY(${t<0?t*40:-t*30}deg)`, o:t<0?1+t*1.1:1-t*1.3}),
  (t,a) => ({t:`translate3d(0,0,${-a*250}px) rotateY(${t*90}deg)`, o:1-Math.pow(a,1.6)}),
  (t,a) => ({t:`translate3d(0,${t<0?-t*520:-t*420}px,0) rotateX(${t*35}deg)`, o:1-a*1.2}),
  (t,a) => ({t:`scale(${1+t*.6}) rotate(${t*-25}deg)`, o:1-a*1.2}),
  (t,a) => ({c:t<0?`inset(0 ${-t*100}% 0 0)`:`inset(0 0 0 ${t*100}%)`, o:1}),
  (t,a) => ({t:`translate3d(${t*520}px,0,0) skewX(${t*-14}deg)`, o:1-a*1.1}),
  (t,a) => ({t:`translate3d(0,${t*-220}px,${-a*300}px) rotateX(${t*-70}deg)`, o:1-a}),
  (t,a) => ({t:`translate3d(0,${t*160}px,0) scale(${1-a*.12})`, f:`blur(${a*12}px)`, o:1-a*1.3})
];

(function(){
  const it = PRODUCTS.slice(0,8), n = it.length, sec = $("show"), st = $("stage3"), red = matchMedia("(prefers-reduced-motion:reduce)").matches;
  if(!sec || !st) return;
  sec.style.height = (n+1)*100 + "svh"; if($("ctot")) $("ctot").textContent = String(n).padStart(2,"0");
  const g = (p,r) => `linear-gradient(165deg,${r?p.c[1]:p.c[0]},${r?p.c[0]:p.c[1]})`;
  
  st.innerHTML = it.map((p,i) => {
    const num = String(i+1).padStart(2,"0"), a = p.img ? p.img : g(p), b = p.img2 ? p.img2 : g(p,1);
    return `<div class="sl"><div class="ghost">${num}</div><div class="vis"><div class="c4"><div class="im" style="background-image:${a}"></div></div><div class="c5"><div class="im" style="background-image:${b}"></div></div></div><div class="info"><small class="r">${num} &mdash; ${p.cat}</small><h3 class="r">${p.name}</h3><i class="gl r"></i><p class="r">${p.desc||DESC[p.cat]||""}</p><div class="pr r">${fmt(p.price)}</div><div class="row r"><select id="ss${p.id}" aria-label="Size"><option>S</option><option selected>M</option><option>L</option><option>XL</option></select><button class="add" data-sid="${p.id}">Add to cart</button></div></div></div>`;
  }).join("");
  
  st.onclick = e => {
    const id = +e.target.dataset.sid; if(!id) return;
    const p = PRODUCTS.find(x => x.id === id), size = $("ss"+id).value, k = cart.find(i => i.id === id && i.size === size);
    k ? k.q++ : cart.push({id, size, q:1, name:p.name, price:p.price});
    render(); openCart();
    const cb = $("open"); if(cb){ cb.classList.remove("bump"); void cb.offsetWidth; cb.classList.add("bump"); }
  };
  
  const sl = [...st.children].map((el,i) => ({el, v:(it[i].anim??i)%VAR.length, im:el.querySelector(".c4 .im"), c5:el.querySelector(".c5"), gh:el.querySelector(".ghost"), rs:[...el.querySelectorAll(".r")]}));
  let tick = false;
  
  function upd(){
    tick = false; const f = Math.min(Math.max(-sec.getBoundingClientRect().top/innerHeight, 0), n);
    sl.forEach((o,i) => {
      let t = f - i; if(i === n-1 && t > 0) t = 0; const a = Math.abs(t), el = o.el;
      if(a >= 1){ el.style.visibility = "hidden"; el.style.opacity = 0; el.classList.remove("on"); return; }
      const v = red ? {o: 1-a} : VAR[o.v](t,a);
      el.style.visibility = "visible"; el.style.opacity = Math.max(0, v.o);
      el.style.transform = v.t || "none"; el.style.clipPath = v.c || "none"; el.style.filter = v.f || "none"; el.classList.toggle("on", a < .4);
      if(!red && o.im && o.c5 && o.gh){
        o.im.style.transform = `translateY(${-t*70}px) scale(1.2)`;
        o.c5.style.transform = `translate3d(0,${-t*170}px,120px)`;
        o.gh.style.transform = `translate3d(${-t*140}px,0,-200px)`;
      }
      o.rs.forEach((r,j) => {
        const u = t < 0 ? t*(1+j*.35) : t*(1+j*.2);
        r.style.opacity = Math.max(0, Math.min(1, t < 0 ? 1+u*1.8 : 1-u*2.2));
        r.style.transform = red ? "none" : `translateY(${t<0 ? -u*50 : -u*40}px)`;
      });
    });
    if($("cnum")) $("cnum").textContent = String(Math.min(n, Math.round(f)+1)).padStart(2,"0");
    if($("bar")) $("bar").style.width = Math.min(100, f/(n-1)*100) + "%";
  }
  
  function req(){ if(!tick){ tick = true; requestAnimationFrame(upd); } }
  addEventListener("scroll", req, {passive:true});
  addEventListener("resize", req);
  upd();
})();

(function(){
  const bn = $("bn"); if(!bn) return;
  const card = p => {
    const a = p.img ? p.img : `linear-gradient(160deg,${p.c[0]},${p.c[1]})`;
    return `<span class="cd" style="background-image:${a}"><b>${p.name}</b></span>`;
  };
  const vid = `<span class="cd"><video src="${MEDIA.video||"images/video.mp4"}" autoplay muted loop playsinline onerror="this.parentNode.remove()"></video></span>`;
  
  window.colsHTML = cat => {
    let pool = PRODUCTS.filter(p => !cat || cat === "All" || p.cat === cat);
    if(pool.length < 3) pool = pool.concat(PRODUCTS.filter(p => !pool.includes(p)));
    const L = pool.length;
    return [0,1,2].map(c => {
      const l = [0,1,2,3].map(i => card(pool[(i + c*Math.ceil(L/3))%L]));
      if(c === 1) l.splice(1, 0, vid);
      const h = l.join("");
      return `<span class="col"><span class="trk">${h}${h}</span></span>`;
    }).join("");
  };
  
  const T = "NEW SEASON &#10022; 2 &amp; 3 PIECE &#10022; LALA'S FABRIC &#10022; ";
  bn.insertAdjacentHTML("beforeend", `<span class="cols">${window.colsHTML("")}</span><svg class="bdg" viewBox="0 0 200 200" aria-hidden="true"><circle cx="100" cy="100" r="99" fill="var(--bg)"/><defs><path id="cp" d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"/></defs><text font-size="15.5" letter-spacing="3" fill="currentColor" font-family="Jost,sans-serif" font-weight="500"><textPath href="#cp">${T}</textPath></text><circle cx="100" cy="100" r="26" fill="currentColor"/></svg>`);
})();

(function(){
  const C = MEDIA.collections || [{t: MEDIA.bannerTitle, p: MEDIA.bannerText, c: "#7b1e2b", cat: "All"}], bn = $("bn"), h = $("bt"), pp = $("bp"), HOLD = 5600;
  if(!bn || !h || !pp) return;
  let k = 0;
  const tag = document.createElement("span"), bar = document.createElement("span"), wp = document.createElement("span"), bw = document.createElement("span");
  tag.className = "tag"; bar.className = "pbar"; bar.innerHTML = "<i></i>"; wp.className = "wipe"; bw.className = "bgw";
  h.before(tag); pp.after(bar); bn.append(wp); bn.prepend(bw);
  const fill = bar.firstChild, pad = n => String(n).padStart(2, "0");
  
  function show(d){
    const c = C[k]; h.className = "fx" + (k%4);
    h.innerHTML = [...c.t].map((ch, i) => `<span class="lt" style="animation-delay:${
