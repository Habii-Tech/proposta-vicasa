document.getElementById("slides-container").insertAdjacentHTML(
  "beforeend",
  `
<!-- S2 — SOBRE HABII -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s2" data-i="1">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Quem somos</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20">
    <!-- left -->
    <div class="px-16 py-12 flex flex-col justify-center">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Quem somos</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">Transformamos<br><em class="text-[#6EBF8B] not-italic">ideias em produto.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">A <strong class="text-[#1F2B23] font-semibold">Habii.tech</strong> é especializada em desenvolvimento de aplicativos mobile e web para empresas de todos os portes. Nos comprometemos com <strong class="text-[#1F2B23] font-semibold">alta qualidade</strong>, <strong class="text-[#1F2B23] font-semibold">eficiência</strong> e <strong class="text-[#1F2B23] font-semibold">satisfação do usuário</strong> em cada entrega.</p>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Confie seu projeto a quem leva a sério o desenvolvimento de apps — com <strong class="text-[#1F2B23] font-semibold">expertise, confiança e excelência</strong>.</p>
      <div class="mt-8 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-[22px_26px] flex items-center gap-5">
        <div class="text-[44px] font-black text-[#158A3E] tracking-[-0.04em] flex-shrink-0 leading-none">30%</div>
        <div class="text-[14px] text-[#374840] leading-[1.65]">
          Apenas <strong class="text-[#0C1410] font-bold">30% dos projetos de software</strong> finalizam com sucesso. Nossos processos existem para colocar você nesse grupo.
          <div style="margin-top:10px; padding-top:10px; border-top:1px solid #BBF7D0; display:flex; flex-direction:column; gap:4px;">
            <div style="font-size:11px; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:#6EBF8B; margin-bottom:2px;">Referências</div>
            <div style="font-size:11.5px; color:#5C6E64; line-height:1.5;">📄 <strong style="color:#374840;">Standish Group CHAOS Report</strong> — taxa de sucesso de projetos de software.</div>
            <div style="font-size:11.5px; color:#5C6E64; line-height:1.5;">📄 <strong style="color:#374840;">McKinsey & Oxford University</strong> — apenas 16,2% dos grandes projetos atingem metas de prazo, custo e qualidade.</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="relative overflow-hidden border-l border-[#DDE8E2]">
      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85&auto=format&fit=crop" alt="Equipe Habii.tech" class="w-full h-full object-cover block">
      <div class="absolute inset-0" style="background:linear-gradient(to top, rgba(12,20,16,.65) 0%, rgba(12,20,16,.1) 55%)"></div>
      <div class="absolute bottom-7 left-7 right-7 bg-white border border-[#DDE8E2] rounded-[14px] p-[18px_22px] flex items-center gap-4 shadow-[0_8px_32px_rgba(0,0,0,.14)] z-[2]">
        <div class="w-11 h-11 bg-[#F0FDF4] border border-[#D1FAE5] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
        </div>
        <div>
          <div class="text-[20px] font-extrabold text-[#0C1410]">Habii.tech</div>
          <div class="text-[12px] text-[#5C6E64] mt-[2px]">Referência em inovação e versatilidade</div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
);
