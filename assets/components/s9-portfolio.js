document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S9 — PORTFÓLIO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[rgb(31,43,35)] text-white" id="s9" data-i="3">
  <div class="pf-bg-grid"></div>
  <div class="absolute" style="right:-15%;top:-20%;width:70%;height:80%;background:radial-gradient(60% 70% at 70% 30%, rgba(29,185,84,.06) 0%, transparent 70%);pointer-events:none;"></div>
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logo.png" alt="Habii.tech" style="height:28px;width:auto;display:block;margin-left:20px">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-white/30">Portfólio</span>
  </div>
  <div class="pf-content relative z-[5] flex-1 flex flex-col px-14 pt-12 pb-6">
    <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 14px; gap: 40px;">
      <div>
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#1DB954;margin-bottom:12px;margin-top:20px;">Cases de sucesso</div>
        <h2 style="font-size:44px;font-weight:900;line-height:1;letter-spacing:-.03em;color:#fff;margin:0;">Projetos entregues. <em style="color:rgba(29,185,84,.28);font-style:normal;">Clientes satisfeitos.</em></h2>
      </div>
      <div style="text-align:right;">
        <div style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin-bottom:6px;">Volume &amp; alcance</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);max-width:320px;line-height:1.55;"><strong style="color:#fff;font-weight:600;">8 apps em produção</strong>, em 6 segmentos, para clientes no Brasil, EUA e Reino Unido.</div>
      </div>
    </div>
    <div style="position:relative;background:linear-gradient(135deg,rgba(255,255,255,.043) 0%,rgba(255,255,255,.016) 100%);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:36px 40px;flex:1 1 0%;min-height:0;overflow:hidden;display:flex;">
      <div id="pf-glow" style="position:absolute;left:-8%;bottom:-30%;width:50%;height:120%;border-radius:50%;background:rgb(255,179,71);opacity:0.09;filter:blur(60px);pointer-events:none;transition:background .4s ease;"></div>
      <div id="pf-detail" class="pf-detail-panel" style="position:relative;z-index:5;width:420px;display:flex;flex-direction:column;flex-shrink:0;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:20px;">
          <span style="display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:100px;background:rgba(29,185,84,.12);border:1px solid rgba(29,185,84,.25);">
            <span style="width:5px;height:5px;border-radius:50%;background:#1DB954;"></span>
            <span style="font-size:9.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#1DB954;">Em destaque</span>
          </span>
          <span style="width:14px;height:1px;background:rgba(255,255,255,.18);"></span>
          <span id="pf-counter" style="font-size:10px;font-weight:600;letter-spacing:.08em;color:rgba(255,255,255,.5);">01 / 09</span>
        </div>
        <div id="pf-name" style="font-size:64px;font-weight:900;color:rgb(255,179,71);letter-spacing:-.035em;line-height:.95;margin-bottom:8px;"><img src="assets/images/logo_havanna.png" style="height:72px;width:auto;object-fit:contain;display:block;" alt="HAVANNA"></div>
        <div id="pf-meta" style="font-size:14px;font-weight:600;color:rgba(255,255,255,.5);margin-bottom:22px;letter-spacing:.02em;">E-commerce · Brasil</div>
        <div id="pf-desc" style="font-size:17px;line-height:1.55;color:rgba(255,255,255,.82);font-weight:400;margin-bottom:22px;max-width:380px;">Tiramos a fila do balcão. App de pedidos e cashback para a maior rede de chocolaterias do Brasil.</div>
        <div id="pf-stat" style="display:flex;gap:22px;align-items:stretch;margin-bottom:22px;">
          <div style="padding-right:22px;border-right:1px solid rgba(255,255,255,.1);">
            <div id="pf-stat-n" style="font-size:30px;font-weight:900;color:#fff;letter-spacing:-.025em;line-height:1;">+200 lojas</div>
            <div id="pf-stat-l" style="font-size:11px;color:rgba(255,255,255,.45);margin-top:6px;font-weight:500;max-width:140px;line-height:1.4;">integradas em todo país</div>
          </div>
          <div style="display:flex;align-items:center;">
            <span id="pf-platform" style="font-size:10.5px;font-weight:700;padding:6px 12px;border-radius:100px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.12);color:rgba(255,255,255,.7);letter-spacing:.04em;">iOS · Android</span>
          </div>
        </div>
      </div>
      <div style="position:relative;flex:1 1 0%;min-width:0;">
        <div id="pf-phones"></div>
      </div>
    </div>
    <div style="margin-top:10px;">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:10px;">
        <span style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.35);">8 entregues</span>
        <div style="flex:1;height:1px;background:rgba(255,255,255,.08);"></div>
        <span style="font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:rgba(29,185,84,.85);">1 em andamento</span>
      </div>
      <div id="pf-cards" style="display:flex;gap:10px;"></div>
    </div>
  </div>
</section>
`);
