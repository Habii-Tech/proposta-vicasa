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
    <!-- right: mockup de interface web/PWA -->
    <div class="s4b-right flex items-center justify-center relative overflow-hidden" style="background:linear-gradient(160deg,#F0FDF4 0%,#DCFCE7 100%);">
      <!-- browser mockup com feed de imóveis -->
      <div style="width:82%; max-height:76vh; display:flex; flex-direction:column; background:white; border-radius:16px; overflow:hidden; box-shadow:0 32px 64px rgba(27,94,32,.22); border:1px solid #DDE8E2;">
        <!-- browser bar -->
        <div style="display:flex; align-items:center; gap:6px; padding:10px 14px; background:#F4F8F5; border-bottom:1px solid #DDE8E2; flex-shrink:0;">
          <div style="width:8px;height:8px;border-radius:50%;background:#FF5F57;opacity:.75;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#FFBD2E;opacity:.75;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#28C840;opacity:.75;"></div>
          <div style="flex:1;margin:0 8px;background:#DDE8E2;border-radius:20px;height:18px;display:flex;align-items:center;padding:0 10px;">
            <span style="font-size:8px;color:#8FA398;font-family:monospace;white-space:nowrap;">vicasa.com.br/imoveis</span>
          </div>
        </div>
        <!-- app header -->
        <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid #E8F0EB;flex-shrink:0;">
          <span style="font-size:18px;font-weight:900;color:#0D5C3A;letter-spacing:-.02em;">Vicasa</span>
          <div style="display:flex;align-items:center;gap:8px;">
            <div style="background:#F0FDF4;border:1px solid #BBF7D0;border-radius:20px;padding:4px 12px;font-size:10px;font-weight:700;color:#158A3E;">Viçosa · MG</div>
            <div style="width:28px;height:28px;border-radius:8px;background:#1DB954;display:flex;align-items:center;justify-content:center;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </div>
          </div>
        </div>
        <!-- filters row -->
        <div style="display:flex;gap:6px;padding:10px 20px;border-bottom:1px solid #E8F0EB;flex-shrink:0;overflow:hidden;">
          <div style="background:#0D5C3A;color:white;border-radius:20px;padding:4px 12px;font-size:9px;font-weight:700;white-space:nowrap;">Todos</div>
          <div style="background:#F4F8F5;border:1px solid #DDE8E2;border-radius:20px;padding:4px 12px;font-size:9px;font-weight:600;color:#5C6E64;white-space:nowrap;">Venda</div>
          <div style="background:#F4F8F5;border:1px solid #DDE8E2;border-radius:20px;padding:4px 12px;font-size:9px;font-weight:600;color:#5C6E64;white-space:nowrap;">Aluguel</div>
          <div style="background:#F4F8F5;border:1px solid #DDE8E2;border-radius:20px;padding:4px 12px;font-size:9px;font-weight:600;color:#5C6E64;white-space:nowrap;">3 quartos</div>
          <div style="background:#F4F8F5;border:1px solid #DDE8E2;border-radius:20px;padding:4px 12px;font-size:9px;font-weight:600;color:#5C6E64;white-space:nowrap;">Centro</div>
        </div>
        <!-- property cards grid -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:14px 20px;overflow:hidden;flex:1;">
          <!-- card 1 -->
          <div style="border:1px solid #DDE8E2;border-radius:12px;overflow:hidden;background:white;">
            <div style="height:80px;background:linear-gradient(135deg,#A8D8C8,#6EBF8B);display:flex;align-items:center;justify-content:center;position:relative;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              <div style="position:absolute;top:6px;right:6px;background:#1DB954;color:white;font-size:7px;font-weight:800;padding:2px 6px;border-radius:6px;letter-spacing:.04em;">PREMIUM</div>
            </div>
            <div style="padding:8px 10px;">
              <div style="font-size:10px;font-weight:800;color:#0C1410;letter-spacing:-.01em;">Apto 3/4 · Centro</div>
              <div style="font-size:9px;color:#5C6E64;margin-top:2px;">Viçosa · MG</div>
              <div style="font-size:13px;font-weight:900;color:#158A3E;margin-top:4px;">R$ 320k</div>
              <div style="display:flex;gap:4px;margin-top:6px;">
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">3 quartos</div>
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">2 banhs</div>
              </div>
            </div>
          </div>
          <!-- card 2 -->
          <div style="border:1px solid #DDE8E2;border-radius:12px;overflow:hidden;background:white;">
            <div style="height:80px;background:linear-gradient(135deg,#B8D4C0,#8FB898);display:flex;align-items:center;justify-content:center;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            </div>
            <div style="padding:8px 10px;">
              <div style="font-size:10px;font-weight:800;color:#0C1410;letter-spacing:-.01em;">Casa 4/4 · Ramos</div>
              <div style="font-size:9px;color:#5C6E64;margin-top:2px;">Viçosa · MG</div>
              <div style="font-size:13px;font-weight:900;color:#158A3E;margin-top:4px;">R$ 480k</div>
              <div style="display:flex;gap:4px;margin-top:6px;">
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">4 quartos</div>
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">garagem</div>
              </div>
            </div>
          </div>
          <!-- card 3 -->
          <div style="border:1px solid #DDE8E2;border-radius:12px;overflow:hidden;background:white;">
            <div style="height:80px;background:linear-gradient(135deg,#C8DDD0,#A0C0B0);display:flex;align-items:center;justify-content:center;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            </div>
            <div style="padding:8px 10px;">
              <div style="font-size:10px;font-weight:800;color:#0C1410;letter-spacing:-.01em;">Apto 2/4 · Silvestre</div>
              <div style="font-size:9px;color:#5C6E64;margin-top:2px;">Viçosa · MG</div>
              <div style="font-size:13px;font-weight:900;color:#158A3E;margin-top:4px;">R$ 1.400/mês</div>
              <div style="display:flex;gap:4px;margin-top:6px;">
                <div style="font-size:8px;background:#EFF6FF;color:#1D4ED8;border:1px solid #BFDBFE;border-radius:4px;padding:2px 5px;font-weight:700;">Aluguel</div>
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">mobiliado</div>
              </div>
            </div>
          </div>
          <!-- card 4 -->
          <div style="border:1px solid #DDE8E2;border-radius:12px;overflow:hidden;background:white;">
            <div style="height:80px;background:linear-gradient(135deg,#D4E8D8,#B4D0B8);display:flex;align-items:center;justify-content:center;position:relative;">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="1.5"><rect x="2" y="7" width="20" height="15" rx="2"/></svg>
              <div style="position:absolute;top:6px;left:6px;background:#0C1410;color:white;font-size:7px;font-weight:800;padding:2px 6px;border-radius:6px;">NOVO</div>
            </div>
            <div style="padding:8px 10px;">
              <div style="font-size:10px;font-weight:800;color:#0C1410;letter-spacing:-.01em;">Terreno · Nova Era</div>
              <div style="font-size:9px;color:#5C6E64;margin-top:2px;">Viçosa · MG</div>
              <div style="font-size:13px;font-weight:900;color:#158A3E;margin-top:4px;">R$ 95k</div>
              <div style="display:flex;gap:4px;margin-top:6px;">
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">360m²</div>
                <div style="font-size:8px;background:#F0FDF4;color:#158A3E;border:1px solid #BBF7D0;border-radius:4px;padding:2px 5px;font-weight:700;">escriturado</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`);
