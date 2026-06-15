document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#1F2B23]" id="s1" data-i="0">
  <div class="bg-grid"></div>
  <div class="absolute right-0 top-0 w-[60%] h-full pointer-events-none" style="background:radial-gradient(ellipse 60% 70% at 80% 40%, rgba(29,185,84,.07) 0%, transparent 70%)"></div>
  <!-- bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <a class="flex items-center no-underline" href="#">
      <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:30px">
    </a>
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/30">Proposta Comercial · 2026</span>
  </div>
  <!-- body -->
  <div class="relative z-[5] flex-1 grid grid-cols-2 gap-0 items-center pt-[88px] px-16 pb-8">
    <div>
      <div class="inline-flex items-center gap-[7px] bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] text-[#1DB954] text-[11px] font-bold px-[14px] py-[6px] rounded-full tracking-[.08em] uppercase mb-7">
        <span class="w-[5px] h-[5px] bg-[#1DB954] rounded-full block"></span>Proposta Comercial · 2026
      </div>
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Plataforma<br><em class="text-[#1DB954] not-italic">Imobiliária</em><br><span class="text-white/20">Viçosa</span></h1>
      <p class="text-[17px] text-white/45 leading-[1.72] max-w-[460px] mb-[52px]">Desenvolvimento de <strong class="text-white/75 font-semibold">plataforma web & PWA</strong> para conectar proprietários, corretores e compradores no mercado imobiliário de <strong class="text-white/75 font-semibold">Viçosa/MG</strong></p>
    </div>
    <!-- Phone mockup — iPhone style -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <div style="position:relative; width:270px; height:548px;">
        <div style="position:absolute; inset:0; border-radius:48px; box-shadow:0 40px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.06); pointer-events:none;"></div>
        <div style="position:absolute; inset:0; border-radius:48px; background:linear-gradient(145deg,#4a4a4a 0%,#1c1c1e 40%,#2d2d2f 70%,#3a3a3c 100%); padding:3px;">
          <div style="width:100%; height:100%; border-radius:45px; background:#000; overflow:hidden; position:relative;">
            <div style="position:absolute; inset:0; background:linear-gradient(160deg,#E8F5F0 0%,#C8E8DC 60%,#A8D8C8 100%); display:flex; flex-direction:column; align-items:stretch; overflow:hidden;">
              <!-- status bar -->
              <div style="height:54px; display:flex; align-items:flex-end; justify-content:space-between; padding:0 24px 8px; flex-shrink:0;">
                <span style="font-family:'Work Sans',sans-serif; font-size:13px; font-weight:700; color:#0D5C3A;">9:41</span>
                <div style="display:flex; align-items:center; gap:5px;">
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="1" fill="#0D5C3A"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="1" fill="#0D5C3A"/><rect x="9" y="2" width="3" height="10" rx="1" fill="#0D5C3A"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="#0D5C3A" opacity=".35"/></svg>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#0D5C3A"/><path d="M4.1 7.2A5.5 5.5 0 0 1 11.9 7.2" stroke="#0D5C3A" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M1.3 4.5A9.3 9.3 0 0 1 14.7 4.5" stroke="#0D5C3A" stroke-width="1.3" stroke-linecap="round" fill="none" opacity=".5"/></svg>
                  <svg width="25" height="13" viewBox="0 0 25 13" fill="none"><rect x="0.5" y="0.5" width="20" height="12" rx="3.5" stroke="#0D5C3A" stroke-opacity=".35"/><rect x="2" y="2" width="15" height="9" rx="2" fill="#0D5C3A"/><path d="M21.5 4.5v4a2 2 0 0 0 0-4z" fill="#0D5C3A" opacity=".4"/></svg>
                </div>
              </div>
              <!-- dynamic island -->
              <div style="position:absolute; top:12px; left:50%; transform:translateX(-50%); width:80px; height:22px; background:#000; border-radius:12px; z-index:10; opacity:.85;"></div>
              <!-- app content -->
              <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0 20px 16px; position:relative;">
                <div style="position:absolute; top:-20px; right:-20px; width:120px; height:120px; border-radius:50%; background:rgba(29,185,84,.15);"></div>
                <div style="position:absolute; bottom:40px; left:-20px; width:90px; height:90px; border-radius:50%; background:rgba(13,92,58,.10);"></div>
                <!-- logo icon -->
                <div style="width:86px; height:86px; background:linear-gradient(135deg,#1DB954,#0D5C3A); border-radius:22px; display:flex; align-items:center; justify-content:center; box-shadow:0 14px 36px rgba(13,92,58,.35); margin-bottom:18px; position:relative; z-index:1; flex-shrink:0;">
                  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <!-- house outline -->
                    <path d="M8 20L22 8L36 20V38H28V28H16V38H8V20Z" stroke="white" stroke-width="2.2" stroke-linejoin="round" fill="none" opacity=".9"/>
                    <!-- location pin -->
                    <circle cx="30" cy="13" r="5.5" fill="white" opacity=".85"/>
                    <circle cx="30" cy="13" r="2.5" fill="#0D5C3A"/>
                  </svg>
                </div>
                <div style="font-family:'Work Sans',sans-serif; font-size:26px; font-weight:900; color:#0D5C3A; letter-spacing:-.025em; position:relative; z-index:1; text-align:center;">Vicasa</div>
                <div style="font-family:'Work Sans',sans-serif; font-size:11px; color:#158A3E; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-top:4px; position:relative; z-index:1;">Viçosa · MG</div>
                <div style="font-family:'Work Sans',sans-serif; font-size:12.5px; color:#374840; text-align:center; line-height:1.5; max-width:160px; margin-top:10px; position:relative; z-index:1;">Seu imóvel, sua decisão.</div>
                <!-- mini property card -->
                <div style="margin-top:20px; background:white; border-radius:12px; padding:10px 14px; width:180px; position:relative; z-index:1; box-shadow:0 4px 20px rgba(13,92,58,.18);">
                  <div style="font-size:9px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#1DB954; margin-bottom:4px;">Em destaque</div>
                  <div style="font-size:13px; font-weight:800; color:#0C1410; letter-spacing:-.015em;">Apto 3 quartos</div>
                  <div style="font-size:10px; color:#5C6E64; margin-top:2px;">Centro · Viçosa/MG</div>
                  <div style="font-size:14px; font-weight:900; color:#158A3E; margin-top:5px;">R$ 320.000</div>
                </div>
              </div>
              <!-- home indicator -->
              <div style="height:32px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                <div style="width:120px; height:5px; background:#0D5C3A; border-radius:3px; opacity:.25;"></div>
              </div>
            </div>
            <div style="position:absolute; inset:0; background:linear-gradient(130deg, rgba(255,255,255,.10) 0%, transparent 45%); pointer-events:none; border-radius:45px;"></div>
          </div>
        </div>
        <div style="position:absolute; left:-4px; top:140px; width:4px; height:32px; background:linear-gradient(90deg,#3a3a3c,#2d2d2f); border-radius:2px 0 0 2px; box-shadow:-1px 0 3px rgba(0,0,0,.4);"></div>
        <div style="position:absolute; left:-4px; top:184px; width:4px; height:54px; background:linear-gradient(90deg,#3a3a3c,#2d2d2f); border-radius:2px 0 0 2px; box-shadow:-1px 0 3px rgba(0,0,0,.4);"></div>
        <div style="position:absolute; left:-4px; top:104px; width:4px; height:26px; background:linear-gradient(90deg,#3a3a3c,#2d2d2f); border-radius:2px 0 0 2px; box-shadow:-1px 0 3px rgba(0,0,0,.4);"></div>
        <div style="position:absolute; right:-4px; top:162px; width:4px; height:68px; background:linear-gradient(270deg,#3a3a3c,#2d2d2f); border-radius:0 2px 2px 0; box-shadow:1px 0 3px rgba(0,0,0,.4);"></div>
      </div>
    </div>
  </div>
</section>
`);
