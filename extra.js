(async()=>{const d=document,$=s=>d.querySelector(s);
const D=await fetch('data.json').then(r=>r.json()).catch(()=>({})),p=D.profile||{};
const s=d.createElement('section');s.id='hello';
s.innerHTML=`<div><span class="bd">${p.badge||''}</span><h1>Hi, I'm ${p.name||'Your Name'}</h1><div id="ty"></div><p>${p.bio||''}</p>
<div class="bt"><a class="p" href="#projects">Explore My Projects →</a><a href="#contact">Get In Touch</a><a href="cv.pdf" download>⤓ Download CV</a></div>
<div class="st">${(p.stats||[]).map(x=>`<div><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}</div></div>
<div class="ed"><div class="eh"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><small>PortfolioService.js</small></div>
<pre><code><span class="c">// Core service</span>
<span class="k">class</span> <span class="f">PortfolioService</span> {
  <span class="f">constructor</span>(repo) {
    <span class="k">this</span>.repo = repo;
  }

  <span class="k">async</span> <span class="f">getProjects</span>() {
    <span class="k">const</span> items = <span class="k">await</span> <span class="k">this</span>.repo.<span class="f">fetchAll</span>();
    <span class="k">return</span> items.<span class="f">filter</span>(p =&gt; p.isPublic);
  }

  <span class="f">greet</span>() {
    <span class="k">return</span> <span class="s">"Let's build something great."</span>;
  }
}</code></pre></div>`;
$('#home').after(s);
const R=p.roles||['Developer'];let i=0,c=0,x=0;
(function t(){const w=R[i];c+=x?-1:1;$('#ty').firstChild?($('#ty').firstChild.nodeValue=w.slice(0,c)):($('#ty').textContent=w.slice(0,c));let m=x?35:80;
if(!x&&c==w.length){x=1;m=1500}else if(x&&c==0){x=0;i=(i+1)%R.length;m=300}setTimeout(t,m)})();
})();
