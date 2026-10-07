(()=>{if(sessionStorage.i2){var q=document.getElementById('intro');if(q)q.style.display='none';return}
const d=document,$=s=>d.querySelector(s),o=d.createElement('div');o.id='i2';
o.innerHTML='<div class="h" style="left:30px;top:20px">HANS — PROJECT INTRODUCTION</div><div class="h" id="tc" style="right:30px;top:20px"></div><div class="h" id="sn" style="left:30px;bottom:20px"></div><i class="c" style="left:12px;top:12px;border-width:1px 0 0 1px"></i><i class="c" style="right:12px;top:12px;border-width:1px 1px 0 0"></i><i class="c" style="left:12px;bottom:12px;border-width:0 0 1px 1px"></i><i class="c" style="right:12px;bottom:12px;border-width:0 1px 1px 0"></i><div id="st"></div><button id="sk">Skip ›</button>';
d.body.appendChild(o);const old=d.getElementById('intro');if(old)old.style.display='none';
const st=$('#st'),L='#9db6ff';
// bola wireframe (berputar)
const SP=(R,x=0,y=0)=>`<g class="sp" data-r="${R}" transform="translate(${x},${y})"></g>`;
const K=(x1,y1,x2,y2,a,b)=>`<g class="k"><line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#7da0ff88"/><rect x="${x2}" y="${y2-14}" width="140" height="30" fill="#080d1ddd" stroke="#26356b"/><text x="${x2+6}" y="${y2-3}" fill="#fff" font-size="9" font-weight="700">${a}</text><text x="${x2+6}" y="${y2+10}" fill="#8fa3d8" font-size="8">${b}</text></g>`;
const bigSphere=`<svg viewBox="-300 -170 600 340">${SP(110)}${K(70,-70,130,-115,'01 · SYSTEMS','OS, OpenWrt, networking')}${K(105,30,160,62,'02 · APPS','Android &amp; web products')}${K(-85,55,-290,98,'03 · SECURITY','Data protection research')}</svg>`;
// grid isometrik
const P=(x,y,z=0)=>[300+(x-y)*34,225+(x+y)*17-z*34].join(',');
const pl=(a,f)=>`<polygon points="${a.map(q=>P(...q)).join(' ')}" fill="${f}" stroke="${L}" stroke-width="1"/>`;
const bx=(x,y,z,w,e,h,f='#0a1438dd')=>pl([[x,y+e,z],[x+w,y+e,z],[x+w,y+e,z+h],[x,y+e,z+h]],f)+pl([[x+w,y,z],[x+w,y+e,z],[x+w,y+e,z+h],[x+w,y,z+h]],f)+pl([[x,y,z+h],[x+w,y,z+h],[x+w,y+e,z+h],[x,y+e,z+h]],f);
let g='';for(let i=-5;i<=5;i++)g+=`<polyline points="${P(i,-5)} ${P(i,5)}" stroke="#1c2e68" fill="none"/><polyline points="${P(-5,i)} ${P(5,i)}" stroke="#1c2e68" fill="none"/>`;
const ob=(t,h)=>`<g class="ob" style="animation-delay:${t}s">${h}</g>`;
const iso=`<svg viewBox="0 0 600 420"><g opacity=".9">${g}</g>
${ob(.4,'<ellipse cx="300" cy="258" rx="40" ry="20" fill="#0f2468"/><rect x="260" y="238" width="80" height="20" fill="#1a3fb4"/><ellipse cx="300" cy="238" rx="40" ry="20" fill="#2a5be0" stroke="'+L+'"/>')}
${ob(1.2,'<g transform="translate(300,170)"><g class="sp" data-r="28"></g></g>')}
${ob(2,bx(-4,-.5,0,2.4,2.4,.3)+[0,1,2].map(i=>bx(-3.6+i*.6,-.2,.3,.15,1.8,1.5)).join(''))}
${ob(3,bx(2.2,-1.6,0,2.2,2.2,1.5)+bx(2.7,-1.1,1.5,1.2,1.2,.12,'#3a6bff66'))}
${ob(4,[0,1,2].map(i=>bx(-.9,2,i*.22,2.6,2.2,.16)).join(''))}
${K(215,80,40,32,'01 · BUILD','Apps &amp; web')}${K(390,125,430,80,'02 · SYSTEM','OS &amp; OpenWrt')}${K(380,370,420,340,'03 · STACK','Network &amp; security')}</svg>`;
// bar isometrik
const bars=`<svg viewBox="0 0 600 420">${[['APPS',1.4],['WEB',.7],['SYSTEMS',2.6]].map((b,i)=>`<g class="bar" style="animation-delay:${i*.3}s">${bx(-2.6+i*2.4,-.5,0,1.1,1.1,b[1],'#14307fdd')}</g><text x="${P(-2.1+i*2.4,.6).split(',')[0]}" y="360" fill="#6f7fb0" font-size="9" text-anchor="middle" letter-spacing="2">${b[0]}</text>`).join('')}</svg>`;
const t=(a,b,c)=>`<div class="tx"><b>${a}</b>${b?'<em>'+b+'</em>':''}${c?'<small>'+c+'</small>':''}</div>`;
const S=[
[0,'INIT',`<div style="width:90%;height:1px;background:linear-gradient(90deg,transparent,#7da0ff,transparent);box-shadow:0 0 20px #4f7cff"></div>`],
[2400,'GLOBE',bigSphere],
[5600,'IDENTITY',t('Banghans.','Hans Developer — make things that don\'t exist yet.','DIGITAL EXPERIMENTS · PROJECT INTRODUCTION')],
[8300,'LAB FLOOR',iso],
[15800,'MANIFESTO',t('<span style="font-size:.5em">Experiments across</span><br>every discipline.')],
[18000,'MOTION',t('Build.')],
[19800,'STACK',bars],
[24000,'HOME',`<div class="fin"><div class="tx"><b>Banghans.</b><em>make things move.</em><p>Applications, websites and experimental systems — driven by curiosity, shipped with intent.</p><div><span>▸ PROJECTS</span><span>▸ ABOUT</span><span>▸ CONTACT</span></div></div>${bigSphere}</div>`]
];
let t0=Date.now(),i=0,end=0;
const to=[];S.forEach(s=>to.push(setTimeout(()=>{st.innerHTML=s[2];$('#sn').textContent='SCN 0'+(++i)+' · '+s[1]},s[0])));
function done(){if(end)return;end=1;to.forEach(clearTimeout);sessionStorage.i2=1;o.style.opacity=0;setTimeout(()=>o.remove(),1000)}
to.push(setTimeout(done,31000));$('#sk').onclick=done;
(function f(){if(end)return;const e=(Date.now()-t0)/1e3,p=e*.6;$('#tc').textContent='REC '+String(e/60|0).padStart(2,'0')+':'+String(e%60|0).padStart(2,'0');
d.querySelectorAll('.sp').forEach(g=>{const R=+g.dataset.r;let s=`<circle r="${R}" fill="none" stroke="${L}"/>`;
for(let k=-3;k<=3;k++){const r=R*Math.cos(k*.4);s+=`<ellipse cy="${R*Math.sin(k*.4)}" rx="${r}" ry="${r*.16}" fill="none" stroke="${L}" opacity=".55"/>`}
for(let k=0;k<6;k++)s+=`<ellipse rx="${Math.abs(R*Math.cos(p+k*Math.PI/6))}" ry="${R}" fill="none" stroke="${L}" opacity=".55"/>`;g.innerHTML=s});
requestAnimationFrame(f)})();
})();
