(function() {
  let current = 0;
  function buildPhone(fill, label, idx) {
    const positions = [
      { left:420, top:-30, scale:.92, z:1, opacity:.78 },
      { left:260, top:-12, scale:.98, z:2, opacity:.95 },
      { left:80, top:0, scale:1.08, z:3, opacity:1 },
    ];
    const pos = positions[idx % 3];
    return `<div style="position:absolute;left:${pos.left}px;top:${pos.top}px;transform:rotate(10deg) scale(${pos.scale});transform-origin:center center;z-index:${pos.z};opacity:${pos.opacity};transition:all .4s ease;">
      <svg viewBox="0 0 110 220" width="220" height="440" style="display:block;filter:drop-shadow(rgba(0,0,0,.45) 0px 12px 24px);">
        <rect x="0" y="0" width="110" height="220" rx="16" fill="#0C1410"/>
        <rect x="5" y="5" width="100" height="210" rx="12" fill="${fill}"/>
        <rect x="42" y="9" width="26" height="4" rx="2" fill="rgba(0,0,0,.55)"/>
        <text x="14" y="26" font-size="6.5" font-weight="700" fill="rgba(0,0,0,.55)" font-family="sans-serif">9:41</text>
        <text x="55" y="36" text-anchor="middle" font-size="${label.length>7?7:9}" font-weight="900" fill="rgba(0,0,0,.75)" font-family="sans-serif">${label}</text>
        <rect x="12" y="44" width="86" height="14" rx="3" fill="rgba(0,0,0,.18)"/>
        <rect x="12" y="66" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/><rect x="16" y="104" width="22" height="3" rx="1.5" fill="rgba(255,255,255,.7)"/>
        <rect x="56" y="66" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/><rect x="60" y="104" width="22" height="3" rx="1.5" fill="rgba(255,255,255,.7)"/>
        <rect x="12" y="120" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/><rect x="56" y="120" width="40" height="50" rx="5" fill="rgba(0,0,0,.12)"/>
        <rect x="12" y="186" width="86" height="22" rx="11" fill="rgba(0,0,0,.35)"/>
        <rect x="41" y="214" width="28" height="2" rx="1" fill="rgba(0,0,0,.45)"/>
      </svg>
    </div>`;
  }
  function buildRealPhone(imgSrc, idx) {
    const positions = [
      { left:420, top:-30, scale:.92, z:1, opacity:.78 },
      { left:260, top:-12, scale:.98, z:2, opacity:.95 },
      { left:80, top:0, scale:1.08, z:3, opacity:1 },
    ];
    const pos = positions[idx % 3];
    return `<div style="position:absolute;left:${pos.left}px;top:${pos.top}px;transform:rotate(10deg) scale(${pos.scale});transform-origin:center center;z-index:${pos.z};opacity:${pos.opacity};transition:all .4s ease;">
      <img src="${imgSrc}" style="height:440px;width:auto;display:block;filter:drop-shadow(rgba(0,0,0,.5) 0px 16px 32px);" />
    </div>`;
  }
  function buildCaseImage(imgSrc) {
    return `<div style="position:absolute;left:0;top:-10%;right:0;bottom:-10%;display:flex;align-items:center;justify-content:flex-end;">
      <img src="${imgSrc}" style="height:140%;width:auto;object-fit:contain;display:block;filter:drop-shadow(rgba(0,0,0,.4) 0px 16px 40px);" />
    </div>`;
  }
  function buildInProgressVisual(c) {
    return `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
      <div style="text-align:center;max-width:360px;padding:0 20px;">
        <div style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgb(52,199,89);margin-bottom:14px;">Sua empresa aqui</div>
        <div style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1.15;margin-bottom:16px;">O próximo case<br><em style="color:rgb(52,199,89);font-style:normal;">pode ser você.</em></div>
      </div>
    </div>`;
  }
  function renderPhones(c) {
    const mainCase = CASES[c];
    if (mainCase.inProgress) {
      return buildInProgressVisual(mainCase);
    }
    if (mainCase.caseImg) {
      return buildCaseImage(mainCase.caseImg);
    }
    const p2=(c-2+CASES.length)%CASES.length, p1=(c-1+CASES.length)%CASES.length;
    const mainPhone = buildPhone(mainCase.screenFill, mainCase.name, 2);
    return buildPhone(CASES[p2].screenFill,CASES[p2].name,0)+buildPhone(CASES[p1].screenFill,CASES[p1].name,1)+mainPhone;
  }
  function updateDetail(idx) {
    const c=CASES[idx], d=document.getElementById('pf-detail');
    d.classList.add('pf-fade');
    setTimeout(()=>{
      document.getElementById('pf-counter').textContent=String(idx+1).padStart(2,'0')+' / 0'+CASES.length;
      if(c.logo){
        document.getElementById('pf-name').innerHTML=`<img src="${c.logo}" style="height:${c.logoHeight||'72px'};width:auto;object-fit:contain;display:block;" alt="${c.name}">`;
        document.getElementById('pf-name').style.color='';
        document.getElementById('pf-name').style.fontStyle='';
      } else {
        document.getElementById('pf-name').textContent=c.name;
        document.getElementById('pf-name').style.color=c.color;
        document.getElementById('pf-name').style.fontStyle=c.nameStyle;
      }
      document.getElementById('pf-meta').textContent=c.segment+' · '+c.country;
      document.getElementById('pf-desc').textContent=c.desc;
      if(c.inProgress){
        document.getElementById('pf-stat').innerHTML=`
          <div style="display:flex;flex-direction:column;gap:10px;width:100%;">
            <div style="display:flex;align-items:center;">
              <span style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(52,199,89,.08);border:1px solid rgba(52,199,89,.25);color:rgba(52,199,89,.85);letter-spacing:.04em;">${c.platform}</span>
            </div>
          </div>`;
      } else {
        document.getElementById('pf-stat').innerHTML=`
          <div style="padding-right:22px;border-right:1px solid rgba(255,255,255,.1);">
            <div id="pf-stat-n" style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-.025em;line-height:1;">${c.statN}</div>
            <div id="pf-stat-l" style="font-size:11px;color:rgba(255,255,255,.45);margin-top:6px;font-weight:500;max-width:140px;line-height:1.4;">${c.statL}</div>
          </div>
          <div style="display:flex;align-items:center;">
            <span id="pf-platform" style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);letter-spacing:.04em;">${c.platform}</span>
          </div>`;
      }
      document.getElementById('pf-glow').style.background=c.glowColor;
      document.getElementById('pf-phones').innerHTML=renderPhones(idx);
      d.classList.remove('pf-fade');
    },160);
  }
  function selectCase(idx) {
    current=idx; updateDetail(idx);
    document.querySelectorAll('.pf-card').forEach((el,i)=>{
      el.classList.toggle('pf-active',i===idx);
      el.style.opacity=i===idx?'1':'0.55';
    });
  }
  function buildCards() {
    const container=document.getElementById('pf-cards');
    CASES.forEach((c,i)=>{
      const div=document.createElement('div');
      div.className='pf-card'+(i===0?' pf-active':'');
      div.style.cssText='flex:1 1 0%;padding:14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:12px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;min-height:80px;position:relative;overflow:hidden;transition:all .22s ease;';
      if(i!==0) div.style.opacity='0.55';
      if(c.inProgress) {
        div.style.background='linear-gradient(135deg,rgba(52,199,89,.12) 0%,rgba(52,199,89,.03) 100%)';
        div.style.border='1px dashed rgba(52,199,89,.55)';
        div.style.opacity='1';
        div.innerHTML=`<div style="position:absolute;right:-14px;top:-14px;width:48px;height:48px;border-radius:50%;background:${c.color};opacity:0.12;"></div>
          <div style="position:relative;">
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:5px;">
              <span style="width:5px;height:5px;border-radius:50%;background:rgb(52,199,89);box-shadow:rgba(52,199,89,.3) 0 0 0 3px;"></span>
              <span style="font-size:8px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:rgb(52,199,89);">Próximo case</span>
            </div>
            <div style="font-size:13px;font-weight:800;color:${c.color};letter-spacing:-.015em;line-height:1.2;">${c.name}</div>
            <div style="font-size:9.5px;color:rgba(255,255,255,.45);margin-top:4px;font-weight:500;">${c.segment}</div>
          </div>
          <div style="font-size:9px;color:rgba(52,199,89,.8);font-weight:700;">O próximo pode ser você →</div>`;
      } else {
        const nameContent = c.logo
          ? `<img src="${c.logo}" style="height:${c.logoHeight ? Math.round(parseInt(c.logoHeight)*18/72)+'px' : '18px'};width:auto;object-fit:contain;display:block;" alt="${c.name}">`
          : `<span style="font-size:16px;font-weight:800;color:${c.color};letter-spacing:-.015em;line-height:1;font-style:${c.nameStyle};">${c.name}</span>`;
        div.innerHTML=`<div style="position:absolute;right:-14px;top:-14px;width:48px;height:48px;border-radius:50%;background:${c.color};opacity:0.08;"></div>
          <div style="position:relative;"><div style="line-height:1;">${nameContent}</div><div style="font-size:9.5px;color:rgba(255,255,255,.35);margin-top:5px;font-weight:500;">${c.segment}</div></div>
          <div style="font-size:9px;color:rgba(255,255,255,.3);font-weight:500;">${c.country}</div>`;
      }
      div.addEventListener('click',()=>selectCase(i));
      container.appendChild(div);
    });
  }
  document.addEventListener('DOMContentLoaded',function(){
    buildCards();
    document.getElementById('pf-phones').innerHTML=renderPhones(0);
    document.getElementById('pf-glow').style.background=CASES[0].glowColor;
    updateDetail(0);
  });
})();
