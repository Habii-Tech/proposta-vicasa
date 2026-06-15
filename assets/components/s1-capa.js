document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S1 — CAPA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col" id="s1" data-i="0" style="background:linear-gradient(155deg,#071210 0%,#0F1E16 35%,#1A2E20 62%,#0E1A12 100%);">
  <!-- Atmospheric gradient layers -->
  <div class="absolute inset-0 pointer-events-none" style="background:
    radial-gradient(ellipse 70% 75% at 76% 48%, rgba(29,185,84,.22) 0%, rgba(18,120,55,.08) 45%, transparent 68%),
    radial-gradient(ellipse 50% 55% at 10% 92%, rgba(10,72,40,.35) 0%, transparent 55%),
    radial-gradient(ellipse 40% 38% at 55% -2%, rgba(29,185,84,.10) 0%, transparent 52%),
    radial-gradient(ellipse 30% 28% at 100% 100%, rgba(8,50,28,.50) 0%, transparent 60%),
    linear-gradient(195deg, rgba(29,185,84,.04) 0%, transparent 40%)
  "></div>
  <!-- Edge vignette to ground the mockup -->
  <div class="absolute inset-0 pointer-events-none" style="background:
    radial-gradient(ellipse 100% 100% at 50% 50%, transparent 55%, rgba(5,12,8,.55) 100%)
  "></div>
  <div class="bg-grid"></div>
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
    <!-- Phone mockup — real screenshot -->
    <div style="display:flex;justify-content:center;align-items:center;position:relative;z-index:5;height:100%;">
      <!-- Glow halos behind the phone — layered for depth -->
      <div style="position:absolute;width:560px;height:560px;border-radius:50%;background:radial-gradient(ellipse,rgba(29,185,84,.13) 0%,rgba(18,100,50,.06) 45%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-52%);pointer-events:none;"></div>
      <div style="position:absolute;width:300px;height:300px;border-radius:50%;background:radial-gradient(ellipse,rgba(29,185,84,.22) 0%,transparent 65%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;filter:blur(8px);"></div>
      <!-- Floor reflection -->
      <div style="position:absolute;bottom:-8%;left:50%;transform:translateX(-50%);width:280px;height:60px;background:radial-gradient(ellipse,rgba(29,185,84,.14) 0%,transparent 70%);border-radius:50%;pointer-events:none;filter:blur(6px);"></div>
      <img
        src="assets/images/mockup_vicasa.png"
        alt="Vicasa — app mobile"
        style="width:380px;max-height:92vh;object-fit:contain;filter:drop-shadow(0 40px 72px rgba(0,0,0,.75)) drop-shadow(0 0 56px rgba(29,185,84,.24)) drop-shadow(0 8px 24px rgba(0,0,0,.5));position:relative;z-index:1;"
      >
    </div>
  </div>
</section>
`);
