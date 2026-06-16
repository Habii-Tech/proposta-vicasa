document.getElementById("slides-container").insertAdjacentHTML(
  "beforeend",
  `
<!-- S5 — INVESTIMENTO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#F4F8F5]" id="s5" data-i="9">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Investimento</span>
  </div>
  <div class="flex-1 grid grid-cols-2 gap-0 pt-20">
    <!-- left -->
    <div class="px-14 py-12 flex flex-col justify-center">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Valores</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-5">Investimento<br><em class="text-[#6EBF8B] not-italic">transparente.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.78] mb-[18px]">Sem surpresas. Você sabe exatamente o que paga e o que recebe em cada etapa do projeto.</p>
      <div class="inv-box bg-[#0C1410] rounded-[20px] p-10 mt-7 relative overflow-hidden">
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#1DB954] mb-[22px]">Investimento total · MVP Vicasa</div>
        <div class="text-[clamp(26px,3vw,42px)] font-black text-white tracking-[-0.03em] leading-[1.15] mb-[10px]">Entrada de <em class="text-[#1DB954] not-italic">R$ 16.000</em><br>+ 8 parcelas de <em class="text-[#1DB954] not-italic">R$ 8.000</em></div>
        <div class="text-[14px] text-white/30 mb-6">Valor total: <strong class="text-white/55 font-semibold">R$ 80.000,00</strong></div>
        <div class="h-px bg-white/[0.08] mb-[18px]"></div>
        <div class="text-[12px] text-white/25 leading-[1.6]">* Inclui PWA completo (web + mobile) para 3 perfis + painel admin.<br>* Não inclui domínio, hospedagem e manutenção pós-entrega.</div>
      </div>
    </div>
    <!-- right -->
    <div class="bg-white border-l border-[#DDE8E2] px-12 py-10 flex flex-col gap-[14px] justify-center">

      <!-- o que está incluído -->
      <div>
        <div class="text-[10px] font-bold tracking-[.12em] uppercase text-[#158A3E] mb-3">O que está incluído no MVP</div>
        <div class="flex flex-col gap-[8px]">
          <div class="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <div class="text-[13px] font-semibold text-[#0C1410]">Portal Proprietário · web & PWA</div>
          </div>
          <div class="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <div class="text-[13px] font-semibold text-[#0C1410]">Portal Corretor · com planos e concorrência</div>
          </div>
          <div class="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <div class="text-[13px] font-semibold text-[#0C1410]">Feed público · SEO + cliente final</div>
          </div>
          <div class="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <div class="text-[13px] font-semibold text-[#0C1410]">Painel admin + protótipo aprovado</div>
          </div>
          <div class="flex items-center gap-3 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[12px] px-4 py-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <div class="text-[13px] font-semibold text-[#0C1410]">3 meses de garantia pós-entrega</div>
          </div>
        </div>
      </div>

      <!-- custos recorrentes -->
      <div class="mt-1">
        <div class="text-[10px] font-bold tracking-[.12em] uppercase text-[#8FA398] mb-3">Custos adicionais recorrentes</div>
        <div class="flex flex-col gap-[8px]">
          <div class="flex items-center justify-between bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-4 py-3">
            <div>
              <div class="text-[10px] font-bold tracking-[.06em] uppercase text-[#158A3E]">Sustentação (opcional)</div>
              <div class="text-[11px] text-[#5C6E64] leading-[1.5] mt-[2px]">Bugs + atualizações + novas features</div>
            </div>
            <div class="text-[16px] font-black text-[#0C1410] tracking-[-0.02em] ml-4 shrink-0">R$ 800<small class="text-[11px] font-normal text-[#8FA398]">/mês</small></div>
          </div>
          <div class="flex items-center justify-between bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-4 py-3">
            <div>
              <div class="text-[10px] font-bold tracking-[.06em] uppercase text-[#158A3E]">Servidor Cloud</div>
              <div class="text-[11px] text-[#5C6E64] leading-[1.5] mt-[2px]">Alta disponibilidade + backups automáticos</div>
            </div>
            <div class="text-[16px] font-black text-[#0C1410] tracking-[-0.02em] ml-4 shrink-0">~R$ 250<small class="text-[11px] font-normal text-[#8FA398]">/mês</small></div>
          </div>
          <div class="flex items-center justify-between bg-[#F4F8F5] border border-[#DDE8E2] rounded-[14px] px-4 py-3">
            <div>
              <div class="text-[10px] font-bold tracking-[.06em] uppercase text-[#158A3E]">Gateway de pagamento</div>
              <div class="text-[11px] text-[#5C6E64] leading-[1.5] mt-[2px]">Iugu, Stripe ou similar · % por transação</div>
            </div>
            <div class="text-[16px] font-black text-[#0C1410] tracking-[-0.02em] ml-4 shrink-0">%<small class="text-[11px] font-normal text-[#8FA398]"> variável</small></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`,
);
