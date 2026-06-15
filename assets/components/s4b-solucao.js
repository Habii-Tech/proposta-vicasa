document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4b — MOCKUP / SOLUÇÃO VISUAL -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4b" data-i="6">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">A solução · Vicasa</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20 overflow-hidden">
    <!-- left -->
    <div class="s4b-left px-14 py-12 flex flex-col justify-center border-r border-[#DDE8E2]">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Prévia do produto</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">A solução<br><em class="text-[#6EBF8B] not-italic">em suas mãos.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Interface moderna e intuitiva, pensada para cada perfil de usuário. Proprietário anuncia, corretor compete, comprador encontra — tudo em uma só plataforma.</p>
      <div class="flex flex-col gap-3 mt-7">
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Feed Imobiliário Visual</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Descoberta de imóveis com visual atrativo e filtros avançados</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Sistema de Corretores</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Candidatura, concorrência e comissões digitalizadas</div>
          </div>
        </div>
        <div class="s4b-feature flex items-center gap-[14px] px-[18px] py-[14px] bg-[#F0FDF4] border border-[#BBF7D0] rounded-[14px]">
          <div class="w-[38px] h-[38px] flex-shrink-0 bg-gradient-to-br from-[#4CAF50] to-[#1B5E20] rounded-[10px] flex items-center justify-center shadow-[0_4px_12px_rgba(27,94,32,.25)]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <div class="text-[13px] font-bold text-[#1B5E20]">Verificação & Segurança</div>
            <div class="text-[11.5px] text-[#5C6E64] mt-[2px] leading-[1.4]">Validação de proprietários, corretores e clientes</div>
          </div>
        </div>
      </div>
    </div>
    <!-- right: mockups reais — web + mobile -->
    <div class="s4b-right relative overflow-hidden" style="background:linear-gradient(160deg,#EEF9F2 0%,#D4F0DF 100%);">
      <!-- Desktop mockup in browser chrome -->
      <div style="position:absolute;left:5%;right:18%;top:6%;bottom:6%;background:white;border-radius:14px;overflow:hidden;box-shadow:0 24px 64px rgba(27,94,32,.28);border:1px solid #DDE8E2;display:flex;flex-direction:column;">
        <!-- browser bar -->
        <div style="display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F4F8F5;border-bottom:1px solid #DDE8E2;flex-shrink:0;">
          <div style="width:8px;height:8px;border-radius:50%;background:#FF5F57;opacity:.75;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#FFBD2E;opacity:.75;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#28C840;opacity:.75;"></div>
          <div style="flex:1;margin:0 8px;background:#DDE8E2;border-radius:20px;height:18px;display:flex;align-items:center;padding:0 10px;">
            <span style="font-size:8px;color:#8FA398;font-family:monospace;white-space:nowrap;">vicasa.com.br</span>
          </div>
        </div>
        <img src="assets/images/mockup_vicasa.png" alt="Vicasa — plataforma web" style="width:100%;flex:1;min-height:0;object-fit:cover;object-position:top;display:block;">
      </div>
      <!-- Mobile mockup floating bottom-right -->
      <div style="position:absolute;bottom:5%;right:2%;width:17%;z-index:10;filter:drop-shadow(0 20px 48px rgba(0,0,0,.55)) drop-shadow(0 0 24px rgba(29,185,84,.22));">
        <img src="assets/images/mockup_vicasa_celular.png" alt="Vicasa — app mobile" style="width:100%;display:block;">
      </div>
    </div>
  </div>
</section>
`);
