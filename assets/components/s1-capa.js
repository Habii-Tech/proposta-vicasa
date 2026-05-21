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
      <h1 class="text-[clamp(52px,6vw,82px)] font-black leading-[.95] tracking-[-0.04em] text-white mb-6">Proposta<br><em class="text-[#1DB954] not-italic">Comercial</em><br><span class="text-white/20"> Belo Vale</span></h1>
      <p class="text-[17px] text-white/45 leading-[1.72] max-w-[460px] mb-[52px]">Desenvolvimento de <strong class="text-white/75 font-semibold">aplicativo mobile + painel administrativo web</strong> para o condomínio <strong class="text-white/75 font-semibold">Fazendinhas Belo Vale — Juiz de Fora/MG</strong></p>
    </div>
    <!-- Phone mockup — iPhone style -->
    <div style="display:flex; justify-content:center; align-items:center; position:relative; z-index:5;">
      <div style="position:relative; width:270px; height:548px;">
        <div style="position:absolute; inset:0; border-radius:48px; box-shadow:0 40px 80px rgba(0,0,0,.55), 0 0 0 1px rgba(255,255,255,.06); pointer-events:none;"></div>
        <div style="position:absolute; inset:0; border-radius:48px; background:linear-gradient(145deg,#4a4a4a 0%,#1c1c1e 40%,#2d2d2f 70%,#3a3a3c 100%); padding:3px;">
          <div style="width:100%; height:100%; border-radius:45px; background:#000; overflow:hidden; position:relative;">
            <div style="position:absolute; inset:0; background:linear-gradient(160deg,#E8F5E9 0%,#C8E6C9 60%,#A5D6A7 100%); display:flex; flex-direction:column; align-items:stretch; overflow:hidden;">
              <div style="height:54px; display:flex; align-items:flex-end; justify-content:space-between; padding:0 24px 8px; flex-shrink:0;">
                <span style="font-family:'Work Sans',sans-serif; font-size:13px; font-weight:700; color:#1B5E20;">9:41</span>
                <div style="display:flex; align-items:center; gap:5px;">
                  <svg width="17" height="12" viewBox="0 0 17 12" fill="none"><rect x="0" y="7" width="3" height="5" rx="1" fill="#1B5E20"/><rect x="4.5" y="4.5" width="3" height="7.5" rx="1" fill="#1B5E20"/><rect x="9" y="2" width="3" height="10" rx="1" fill="#1B5E20"/><rect x="13.5" y="0" width="3" height="12" rx="1" fill="#1B5E20" opacity=".35"/></svg>
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none"><path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#1B5E20"/><path d="M4.1 7.2A5.5 5.5 0 0 1 11.9 7.2" stroke="#1B5E20" stroke-width="1.3" stroke-linecap="round" fill="none"/><path d="M1.3 4.5A9.3 9.3 0 0 1 14.7 4.5" stroke="#1B5E20" stroke-width="1.3" stroke-linecap="round" fill="none" opacity=".5"/></svg>
                  <svg width="25" height="13" viewBox="0 0 25 13" fill="none"><rect x="0.5" y="0.5" width="20" height="12" rx="3.5" stroke="#1B5E20" stroke-opacity=".35"/><rect x="2" y="2" width="15" height="9" rx="2" fill="#1B5E20"/><path d="M21.5 4.5v4a2 2 0 0 0 0-4z" fill="#1B5E20" opacity=".4"/></svg>
                </div>
              </div>
              <div style="position:absolute; top:12px; left:50%; transform:translateX(-50%); width:80px; height:22px; background:#000; border-radius:12px; z-index:10; opacity:.85;"></div>
              <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:0 20px 16px; position:relative;">
                <div style="position:absolute; top:-20px; right:-20px; width:120px; height:120px; border-radius:50%; background:rgba(76,175,80,.18);"></div>
                <div style="position:absolute; bottom:40px; left:-20px; width:90px; height:90px; border-radius:50%; background:rgba(56,142,60,.12);"></div>
                <div style="width:86px; height:86px; background:linear-gradient(135deg,#4CAF50,#1B5E20); border-radius:22px; display:flex; align-items:center; justify-content:center; box-shadow:0 14px 36px rgba(30,100,40,.35); margin-bottom:18px; position:relative; z-index:1; flex-shrink:0;">
                  <svg width="44" height="44" viewBox="0 0 40 40" fill="none"><rect x="8" y="16" width="24" height="18" rx="1.5" stroke="white" stroke-width="2" fill="none" opacity=".9"/><path d="M14 34V26a6 6 0 0 1 12 0v8" stroke="white" stroke-width="2" fill="none" opacity=".9"/><path d="M8 16 L20 6 L32 16" stroke="white" stroke-width="2" stroke-linecap="round" fill="none" opacity=".8"/><circle cx="20" cy="22" r="2" fill="white" opacity=".7"/></svg>
                </div>
                <div style="font-family:'Work Sans',sans-serif; font-size:24px; font-weight:900; color:#1B5E20; letter-spacing:-.025em; position:relative; z-index:1; text-align:center;">Fazendinhas</div>
                <div style="font-family:'Work Sans',sans-serif; font-size:11px; color:#2E7D32; font-weight:700; letter-spacing:.08em; text-transform:uppercase; margin-top:4px; position:relative; z-index:1;">Belo Vale</div>
                <div style="font-family:'Work Sans',sans-serif; font-size:12.5px; color:#388E3C; text-align:center; line-height:1.5; max-width:160px; margin-top:10px; position:relative; z-index:1;">Sua portaria inteligente.</div>
                <div style="width:130px; height:3px; background:rgba(30,100,40,.15); border-radius:2px; overflow:hidden; margin-top:32px; position:relative; z-index:1;">
                  <div style="height:100%; width:55%; background:linear-gradient(90deg,#4CAF50,#1B5E20); border-radius:2px; animation:prog 2s ease-in-out infinite alternate;"></div>
                </div>
                <div style="font-family:'Work Sans',sans-serif; font-size:10px; color:rgba(30,100,40,.5); margin-top:8px; position:relative; z-index:1;">Carregando…</div>
              </div>
              <div style="height:32px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
                <div style="width:120px; height:5px; background:#1B5E20; border-radius:3px; opacity:.25;"></div>
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
