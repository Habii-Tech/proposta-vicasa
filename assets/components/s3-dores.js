document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S3 — DORES DO CLIENTE -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s3" data-i="3">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Problemas identificados</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div>
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Diagnóstico</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Os desafios do<br><em class="text-[#6EBF8B] not-italic">Fazendinhas.</em></h2>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-8 flex-1">

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Falhas de comunicação</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Comunicação entre moradores e portaria é falha e não padronizada, gerando ruído e retrabalho no dia a dia do condomínio.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Processo arcaico de encomendas</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Tudo anotado em papel — sem rastreio, sem notificação automática. Moradores ficam sem saber quando suas encomendas chegam.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Grande movimentação de prestadores</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Alta frequência de pessoas prestando serviço no condomínio, sem controle eficiente de acesso e liberações por parte dos moradores.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.85 12 19.79 19.79 0 0 1 1.8 3.4 2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Sinal de telefone instável</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Moradores relatam falta de sinal frequente. A comunicação via ligação convencional é inviável — o app opera via Wi-Fi/dados, contornando esse problema.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Filas na portaria</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">A necessidade de contato direto para cada liberação gera acúmulo de pessoas e espera desnecessária, especialmente em horários de pico.</div>
      </div>

      <div class="sc bg-white border border-[#DDE8E2] rounded-[20px] p-7 flex flex-col gap-[14px] shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="w-11 h-11 bg-[#FFF5F5] border border-[#FECACA] rounded-[10px] flex items-center justify-center flex-shrink-0">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EF4444" stroke-width="1.8" stroke-linecap="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>
        </div>
        <div class="text-[16px] font-extrabold text-[#0C1410] tracking-[-0.01em] leading-[1.25]">Falta de padronização</div>
        <div class="text-[14px] text-[#5C6E64] leading-[1.65]">Sem um sistema único, cada porteiro age de forma diferente. A ausência de processos claros compromete a segurança e a experiência dos moradores.</div>
      </div>

    </div>
  </div>
</section>
`);
