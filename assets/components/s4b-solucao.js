document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4b — MOCKUP / SOLUÇÃO VISUAL -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4b" data-i="5">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">A solução · Fazendinhas</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20 overflow-hidden">
    <!-- left -->
    <div class="s4b-left px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Prévia do produto</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">A solução<br><em class="text-[#6EBF8B] not-italic">em suas mãos.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Interface limpa e intuitiva, projetada para o dia a dia do morador. Todas as funcionalidades do condomínio a um toque de distância.</p>
      <div class="flex flex-col gap-3 mt-7">
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Encomendas & Visitantes</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Notificações instantâneas e controle de acesso</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Liberações & Prestadores</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Autorize acessos diretamente pelo app</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Ocorrências</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Registre e acompanhe problemas em tempo real</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="s4b-right flex items-center justify-center relative overflow-hidden" style="background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);">
      <img src="assets/images/mockup_fazendinhas.png" alt="Mockup do App Fazendinhas" class="relative z-[1] w-auto object-contain block" style="max-height:78vh;filter:drop-shadow(0 32px 64px rgba(27,94,32,.22));">
    </div>
  </div>
</section>
`);
