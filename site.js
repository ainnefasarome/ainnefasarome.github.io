(async()=>{const d=document,$=s=>d.querySelector(s),G=(typeof U!=='undefined')?U:'ainnefasarome';
const data=await fetch('data.json').then(r=>r.json()).catch(()=>({}));
let j;try{j=await(await fetch('https://api.github.com/users/'+G+'/repos?per_page=100&sort=pushed')).json()}catch(e){}
if(!Array.isArray(j))try{j=JSON.parse(localStorage.pj)}catch(e){j=[]}
j=j.filter(r=>!r.fork&&r.name!=G+'.github.io');
$('nav div').innerHTML=[['projects','Projects'],['experience','Experience'],['skills','Skills'],['certs','Certifications'],['github','GitHub'],['blog','Blog'],['contact','Contact']].map(a=>`<a href="#${a[0]}">${a[1]}</a>`).join('');
const sec=(id,t,sub,body)=>{const s=d.createElement('section');s.id=id;s.innerHTML=`<div class="no">${id.toUpperCase()}</div><h3>${t}</h3><p class="mut">${sub}</p>${body}`;return s};
const tabs=(box,cats,fn)=>{box.innerHTML='<div class="tb">'+cats.map((c,i)=>`<button class="${i?'':'on'}">${c}</button>`).join('')+'</div><div class="tg"></div>';const g=box.querySelector('.tg');
box.querySelectorAll('.tb button').forEach(b=>b.onclick=()=>{box.querySelectorAll('.tb button').forEach(x=>x.classList.remove('on'));b.classList.add('on');fn(g,b.textContent)});fn(g,cats[0])};
$('#projects')?.remove();const c=$('#contact');
const P=sec('projects','Featured Case Studies','Production-minded projects, synced live from GitHub.','<div id="pb"></div>');
const langs=[...new Set(j.map(r=>r.language).filter(Boolean))];
const E=sec('experience','Professional Experience','A growing journey of building, testing and learning.','<div class="tl">'+(data.experience||[]).map(x=>`<div><small>${x.when}</small><b style="display:block;color:#fff">${x.title}</b><span class="mut">${x.org}</span><ul>${x.pts.map(p=>'<li>'+p+'</li>').join('')}</ul></div>`).join('')+'</div>');
const S=sec('skills','Professional Expertise','A multidisciplinary toolkit built through hands-on experimentation.','<div class="tg">'+Object.entries(data.skills||{}).map(([k,v])=>`<div class="cd sk"><b>${k}</b>${v.map(x=>'<span>'+x+'</span>').join('')}</div>`).join('')+'</div>');
const cs=data.certs||[],C=sec('certs','Certifications &amp; Gallery','Achievements, credentials and milestones.','<div id="cb"></div>');
const B=sec('blog','Engineering Articles','Notes and write-ups from experiments.','<div class="tg" id="bb"></div>');
const H=sec('github','GitHub Activity Dashboard','Live metrics from public repositories.','<div class="dg"><div class="cd"><b id="m1">–</b><small>REPOSITORIES</small></div><div class="cd"><b id="m2">–</b><small>STARS</small></div><div class="cd"><b id="m3">–</b><small>LANGUAGES</small></div><div class="cd"><b id="m4">–</b><small>LAST UPDATE</small></div></div><small class="mut">RECENT COMMIT FREQUENCY · 12 WEEKS</small><div id="hm"></div><small class="mut">LANGUAGE ANALYTICS</small><div id="lb"></div><div id="ll"></div>');
c.before(P,E,S,C,H,B);
tabs($('#pb'),['All',...langs],(g,t)=>{const l=j.filter(r=>t=='All'||r.language==t);g.innerHTML=l.length?l.map(r=>`<a class="cd" href="${r.html_url}" target="_blank">${r.language?'<em>'+r.language+'</em>':''}<b>${r.name}</b><span class="mut">${r.description||'No description yet'}</span><br><small>${r.stargazers_count?'★ '+r.stargazers_count+' · ':''}View code →</small></a>`).join(''):'<div class="cd e">Projects will appear here.</div>'});
tabs($('#cb'),['All',...new Set(cs.map(x=>x.cat))],(g,t)=>{const l=cs.filter(x=>t=='All'||x.cat==t);g.innerHTML=l.length?l.map(x=>`<div class="cd"><em>${x.cat}</em><b>${x.title}</b><small>${x.by||''} ${x.year||''}</small></div>`).join(''):'<div class="cd e">Certificates and achievements will be listed here.</div>'});
$('#bb').innerHTML=(data.blog||[]).length?data.blog.map(x=>`<a class="cd" href="${x.url||'#'}"><b>${x.title}</b><span class="mut">${x.text||''}</span></a>`).join(''):'<div class="cd e">Articles coming soon.</div>';
if(j.length){const L={};j.forEach(r=>r.language&&(L[r.language]=(L[r.language]||0)+1));const ls=Object.entries(L).sort((a,b)=>b[1]-a[1]),tot=ls.reduce((s,a)=>s+a[1],0)||1,col=['#4f7cff','#7da0ff','#ff3cc8','#3cd2ff','#a78bfa','#5d6ea8'];
$('#m1').textContent=j.length;$('#m2').textContent=j.reduce((s,r)=>s+r.stargazers_count,0);$('#m3').textContent=ls.length;$('#m4').textContent=new Date(j[0].pushed_at).toLocaleDateString('en-GB',{day:'numeric',month:'short'});
$('#lb').innerHTML=ls.map((a,i)=>`<i style="width:${a[1]/tot*100}%;background:${col[i%6]}"></i>`).join('');$('#ll').innerHTML=ls.map((a,i)=>`<i style="background:${col[i%6]}"></i>${a[0]} ${Math.round(a[1]/tot*100)}%`).join('');
const w=Array(12).fill(0);j.forEach(r=>{const k=Math.floor((Date.now()-new Date(r.pushed_at))/6048e5);if(k>=0&&k<12)w[11-k]++});
$('#hm').innerHTML=w.map(n=>`<i style="background:${n?'#4f7cff':'#101a3c'};opacity:${n?Math.min(1,.4+n*.2):1}"></i>`).join('')}
c.innerHTML='<div class="no">CONTACT</div><h3>Let\'s Build Together</h3><p class="mut">Have an idea or a project in mind? Let\'s talk.</p><div class="ct"><div><b>Contact Channels</b><br><br><a class="cd" href="mailto:ainnefasarome@gmail.com"><small>EMAIL</small><b>ainnefasarome@gmail.com</b></a><br><a class="cd" href="https://t.me/ainnanefasarome"><small>TELEGRAM</small><b>@ainnanefasarome</b></a><br><a class="cd" href="https://github.com/'+G+'"><small>GITHUB</small><b>'+G+'</b></a></div><form id="fm"><b>Send Message</b><br><br><label class="mut">Name</label><input id="fn" required><label class="mut">Email</label><input id="fe" type="email" required><label class="mut">Message</label><textarea id="ft" rows="4" required></textarea><button>Send ➤</button></form></div>';
$('#fm').onsubmit=e=>{e.preventDefault();location.href='mailto:ainnefasarome@gmail.com?subject='+encodeURIComponent('Message from '+$('#fn').value)+'&body='+encodeURIComponent($('#ft').value+'\n\n'+$('#fn').value+' ('+$('#fe').value+')')};
d.querySelectorAll('section,h2.big,.cd').forEach(e=>e.classList.add('rv'));
const io=new IntersectionObserver(a=>a.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.05});d.querySelectorAll('.rv').forEach(e=>io.observe(e));
// Efek jaring neon mengikuti jari / kursor
const cv=d.createElement('canvas');cv.id='web';d.body.appendChild(cv);const x=cv.getContext('2d');let Q=[],on=!matchMedia('(prefers-reduced-motion)').matches;
const rs=()=>{cv.width=innerWidth;cv.height=innerHeight};rs();addEventListener('resize',rs);
const add=(X,Y)=>{if(on){Q.push({x:X,y:Y,t:Date.now()});Q.length>45&&Q.shift()}};
addEventListener('pointermove',e=>add(e.clientX,e.clientY),{passive:true});addEventListener('touchmove',e=>add(e.touches[0].clientX,e.touches[0].clientY),{passive:true});
(function f(){x.clearRect(0,0,cv.width,cv.height);const n=Date.now();Q=Q.filter(p=>n-p.t<1000);
Q.forEach((a,i)=>{const al=1-(n-a.t)/1000,k=i%3?'#3c8cff':'#ff3cc8';x.globalAlpha=al*.8;x.strokeStyle=k;
for(let m=Math.max(0,i-9);m<i;m+=2){x.beginPath();x.moveTo(a.x,a.y);x.lineTo(Q[m].x,Q[m].y);x.stroke()}
if(i%4==0){x.globalAlpha=al*.35;x.fillStyle=k;x.fillRect(a.x-16,a.y-4,32,8)}});requestAnimationFrame(f)})();
const b=d.createElement('button');b.id='wt';b.textContent='✦ FX ON';b.onclick=()=>{on=!on;Q=[];b.textContent=on?'✦ FX ON':'✦ FX OFF'};d.body.appendChild(b);
})();
