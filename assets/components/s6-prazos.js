document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S6 — PRAZOS -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s6" data-i="7">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Cronograma</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="flex items-end justify-between gap-8 mb-0">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Cronograma</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Prazos<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[380px] leading-[1.65] pb-1 flex-shrink-0">Entregas incrementais a cada sprint com visibilidade total do progresso.</p>
    </div>
    <!-- timeline -->
    <div class="flex flex-row gap-4 my-8">
      <div style="flex:2;background:linear-gradient(135deg,#1a2e1f 0%,#162318 100%);border:1px solid rgba(53,224,122,.22);border-radius:20px;padding:44px 42px;display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden;">
        <div style="position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,rgba(53,224,122,.12) 0%,transparent 70%);pointer-events:none;"></div>
        <div>
          <div style="font-size:10.5px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#35E07A;margin-bottom:20px;">Prazo estimado</div>
          <div style="display:flex;align-items:baseline;gap:18px;line-height:1;">
            <span style="font-size:100px;font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1;">3–4</span>
            <span style="font-size:36px;font-weight:800;color:#35E07A;letter-spacing:-.02em;line-height:1;">meses</span>
          </div>
        </div>
        <div style="margin-top:24px;padding-top:24px;border-top:1px solid rgba(53,224,122,.15);">
          <div style="font-size:15px;color:rgba(255,255,255,.55);line-height:1.5;">MVP PWA completo · 3 perfis + painel admin</div>
        </div>
      </div>
      <div class="flex flex-col gap-[14px] flex-1">
        <div style="flex:1;background:#fff;border:1px solid #D1DDD6;border-radius:20px;padding:24px 26px;display:flex;flex-direction:column;justify-content:space-between;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#9A9A9A;">Ciclo de sprint</div>
          <div>
            <div style="display:flex;align-items:baseline;gap:8px;margin-top:10px;">
              <span style="font-size:44px;font-weight:900;color:#2A2E2C;letter-spacing:-.03em;line-height:1;">1–2</span>
              <span style="font-size:15px;font-weight:600;color:#9A9A9A;">semanas</span>
            </div>
            <div style="font-size:12.5px;color:#9A9A9A;margin-top:6px;">Review e feedback ao final</div>
          </div>
        </div>
        <div style="flex:1;background:#fff;border:1px solid #D1DDD6;border-radius:20px;padding:24px 26px;display:flex;flex-direction:column;justify-content:space-between;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#2A2E2C;">Garantia pós-entrega</div>
          <div>
            <div style="display:flex;align-items:baseline;gap:8px;margin-top:10px;">
              <span style="font-size:44px;font-weight:900;color:#2A2E2C;letter-spacing:-.03em;line-height:1;">3</span>
              <span style="font-size:15px;font-weight:600;color:#9A9A9A;">meses</span>
            </div>
            <div style="font-size:12.5px;color:#9A9A9A;margin-top:6px;">Cobertura total de correções</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] p-[26px_30px] flex gap-[18px] items-start">
      <div class="flex-shrink-0 mt-[3px]">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </div>
      <div class="text-[15px] text-[#374840] leading-[1.75] italic">"Trabalharemos com sprints de 1 a 2 semanas. A cada final de sprint, você recebe uma versão funcional para <strong class="text-[#0C1410] not-italic font-bold">testar, validar e dar feedback</strong> antes de seguirmos para a próxima etapa."</div>
    </div>
    <div class="flex items-center justify-between mt-4 p-[13px_18px] bg-[#F4F8F5] border border-[#DDE8E2] rounded-[10px]">
      <span class="text-[13px] text-[#8FA398]">* Prazos podem variar conforme aprovação de requisitos adicionais.</span>
      <span class="bg-[#FEF9C3] border border-[#FDE047] text-[#713F12] text-[12px] font-bold px-3 py-[5px] rounded-full">Proposta válida por 2 semanas</span>
    </div>
  </div>
</section>
`);
