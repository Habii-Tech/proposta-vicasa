document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S6B — MODELO DE MONETIZAÇÃO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s6b" data-i="8">

  <!-- glows decorativos de fundo -->
  <div class="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.08) 0%,transparent 70%);"></div>
  <div class="absolute bottom-0 left-[5%] w-[320px] h-[320px] rounded-full pointer-events-none" style="background:radial-gradient(circle,rgba(29,185,84,.05) 0%,transparent 70%);"></div>

  <!-- header bar -->
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Modelo de Negócio</span>
  </div>

  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-8">
    <div class="mb-8">
      <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">Monetização</div>
      <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-3">Como a plataforma<br><em class="text-[#6EBF8B] not-italic">gera receita.</em></h2>
      <p class="text-[16px] text-[#5C6E64] leading-[1.65] max-w-[600px]">Modelo híbrido: mensalidades por plano + comissão sobre negócios fechados. Escalável conforme a base cresce.</p>
    </div>

    <div class="grid grid-cols-3 gap-5 flex-1">

      <!-- Planos para Corretores -->
      <div class="flex flex-col gap-4">
        <div class="text-[10px] font-bold tracking-[.14em] uppercase text-[#8FA398]">Corretores</div>

        <!-- Básico -->
        <div class="bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] p-6 flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-black text-[#0C1410] tracking-[-0.01em]">Básico</div>
            <div class="text-[10px] font-bold tracking-[.06em] bg-[#F4F8F5] border border-[#DDE8E2] text-[#5C6E64] px-2 py-[3px] rounded-full uppercase">Gratuito</div>
          </div>
          <div class="text-[24px] font-black text-[#0C1410] tracking-[-0.03em] leading-none">R$ 0<small class="text-[13px] font-normal text-[#8FA398]">/mês</small></div>
          <div class="h-px bg-[#DDE8E2]"></div>
          <div class="flex flex-col gap-[7px]">
            <div class="flex items-center gap-2 text-[12px] text-[#374840]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Até 3 imóveis ativos</div>
            <div class="flex items-center gap-2 text-[12px] text-[#374840]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Candidatura a imóveis</div>
            <div class="flex items-center gap-2 text-[12px] text-[#374840]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Filtros de busca</div>
            <div class="flex items-center gap-2 text-[12px] text-[#8FA398]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DDE8E2" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Acesso a imóveis Premium</div>
            <div class="flex items-center gap-2 text-[12px] text-[#8FA398]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DDE8E2" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Leads qualificados</div>
          </div>
        </div>

        <!-- Premium -->
        <div class="bg-[#0C1410] rounded-[20px] p-6 flex flex-col gap-3 relative overflow-hidden">
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#1DB954]/15 rounded-full blur-xl pointer-events-none"></div>
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-black text-white tracking-[-0.01em]">Premium</div>
            <div class="text-[10px] font-black tracking-[.06em] bg-[#1DB954] text-[#0C1410] px-2 py-[3px] rounded-full uppercase">Recomendado</div>
          </div>
          <div class="text-[24px] font-black text-white tracking-[-0.03em] leading-none">R$ 149<small class="text-[13px] font-normal text-white/40">/mês</small></div>
          <div class="h-px bg-white/10"></div>
          <div class="flex flex-col gap-[7px]">
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Imóveis ilimitados</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Acesso a imóveis Premium</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Leads qualificados</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Destaque no ranking</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Análise financeira do cliente</div>
          </div>
        </div>
      </div>

      <!-- Planos para Proprietários -->
      <div class="flex flex-col gap-4">
        <div class="text-[10px] font-bold tracking-[.14em] uppercase text-[#8FA398]">Proprietários</div>

        <!-- Básico -->
        <div class="bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] p-6 flex flex-col gap-3">
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-black text-[#0C1410] tracking-[-0.01em]">Básico</div>
            <div class="text-[10px] font-bold tracking-[.06em] bg-[#FFF7E6] border border-[#F6D28A] text-[#B45309] px-2 py-[3px] rounded-full uppercase">Por imóvel</div>
          </div>
          <div class="text-[24px] font-black text-[#0C1410] tracking-[-0.03em] leading-none">R$ 49–99<small class="text-[11px] font-normal text-[#8FA398]">/mês</small></div>
          <div class="text-[11px] text-[#8FA398] -mt-1">conforme faixa de valor do imóvel</div>
          <div class="h-px bg-[#DDE8E2]"></div>
          <div class="flex flex-col gap-[7px]">
            <div class="flex items-center gap-2 text-[12px] text-[#374840]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>1 imóvel anunciado</div>
            <div class="flex items-center gap-2 text-[12px] text-[#374840]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Corretores candidatos</div>
            <div class="flex items-center gap-2 text-[12px] text-[#374840]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Fotos e descrição com IA</div>
            <div class="flex items-center gap-2 text-[12px] text-[#8FA398]"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DDE8E2" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Destaque no feed</div>
          </div>
        </div>

        <!-- Premium -->
        <div class="bg-[#0C1410] rounded-[20px] p-6 flex flex-col gap-3 relative overflow-hidden">
          <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#1DB954]/15 rounded-full blur-xl pointer-events-none"></div>
          <div class="flex items-center justify-between">
            <div class="text-[13px] font-black text-white tracking-[-0.01em]">Premium</div>
            <div class="text-[10px] font-black tracking-[.06em] bg-[#1DB954] text-[#0C1410] px-2 py-[3px] rounded-full uppercase">Mais vendas</div>
          </div>
          <div class="text-[24px] font-black text-white tracking-[-0.03em] leading-none">R$ 149–249<small class="text-[11px] font-normal text-white/40">/mês</small></div>
          <div class="text-[11px] text-white/30 -mt-1">conforme faixa de valor do imóvel</div>
          <div class="h-px bg-white/10"></div>
          <div class="flex flex-col gap-[7px]">
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Múltiplos imóveis</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Destaque no feed</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Corretores Premium</div>
            <div class="flex items-center gap-2 text-[12px] text-white/80"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>Analytics e métricas</div>
          </div>
        </div>
      </div>

      <!-- Comissão & Escalabilidade -->
      <div class="flex flex-col gap-4">
        <div class="text-[10px] font-bold tracking-[.14em] uppercase text-[#8FA398]">Receita adicional</div>

        <div class="bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] p-6 flex flex-col gap-4">
          <div class="text-[13px] font-black text-[#0C1410] tracking-[-0.01em]">Comissão sobre negócios</div>
          <div class="flex flex-col gap-3">
            <div class="flex items-start gap-3 p-3 bg-white border border-[#DDE8E2] rounded-[12px]">
              <div class="w-8 h-8 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[8px] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <div class="text-[12px] font-bold text-[#0C1410]">Taxa sobre fechamento</div>
                <div class="text-[11px] text-[#5C6E64] mt-[2px] leading-[1.4]">% sobre o valor da comissão do corretor, descontada na plataforma</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-white border border-[#DDE8E2] rounded-[12px]">
              <div class="w-8 h-8 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[8px] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <div class="text-[12px] font-bold text-[#0C1410]">Escalabilidade</div>
                <div class="text-[11px] text-[#5C6E64] mt-[2px] leading-[1.4]">Modelo replicável para outras cidades da região com custo marginal baixo</div>
              </div>
            </div>
            <div class="flex items-start gap-3 p-3 bg-white border border-[#DDE8E2] rounded-[12px]">
              <div class="w-8 h-8 bg-[#F0FDF4] border border-[#BBF7D0] rounded-[8px] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>
              </div>
              <div>
                <div class="text-[12px] font-bold text-[#0C1410]">Futuros incrementos</div>
                <div class="text-[11px] text-[#5C6E64] mt-[2px] leading-[1.4]">Cursos para formação de corretores, anúncios patrocinados, seguros integrados</div>
              </div>
            </div>
          </div>
        </div>

        <!-- infra cost highlight -->
        <div class="bg-[#F0FDF4] border border-[#BBF7D0] rounded-[20px] p-5 flex flex-col gap-2">
          <div class="text-[10px] font-bold tracking-[.1em] uppercase text-[#158A3E]">Custo de infraestrutura</div>
          <div class="text-[28px] font-black text-[#0C1410] tracking-[-0.03em] leading-none">~R$ 250<small class="text-[13px] font-normal text-[#8FA398]">/mês</small></div>
          <div class="text-[12px] text-[#5C6E64] leading-[1.5]">Servidor cloud com alta disponibilidade e backups automáticos — custo previsível e escalável</div>
        </div>
      </div>

    </div>
  </div>
</section>
`);
