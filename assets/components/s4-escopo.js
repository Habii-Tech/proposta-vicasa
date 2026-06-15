document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="5">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · Vicasa</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-8 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[360px] leading-[1.65] pb-1 flex-shrink-0">Plataforma PWA unificada para <strong class="text-[#1F2B23] font-semibold">três perfis</strong> — proprietário, corretor e cliente final — com painel administrativo.</p>
    </div>
    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(3,1fr);">

      <!-- Portal Proprietário -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Portal · Proprietário</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">10 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro com verificação de identidade (RG, CPF, selfie)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Upload de fotos com apoio de IA para descrição</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Publicação de imóvel com definição de comissão</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Aceite ou rejeição de corretores candidatos</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Acompanhamento de negociações e status</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Edição e exclusão de anúncios</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Planos Básico e Premium com destaque</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Histórico e status de cada imóvel</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Notificações em tempo real</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Cobrança mensal proporcional à faixa do imóvel</div>
        </div>
      </div>

      <!-- Portal Corretor -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Portal · Corretor</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">10 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro com validação CRECI (manual ou API)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Feed com filtros avançados de imóveis</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Candidatura a imóveis conforme limite do plano</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Concorrência entre corretores por imóvel</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Link WhatsApp direto para contato com proprietário</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Acesso a dados e leads qualificados (Premium)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Gestão da carteira de imóveis ativos</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Planos Básico e Premium</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Sistema de avaliação e reputação</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Notificações de aceite, rejeição e leads</div>
        </div>
      </div>

      <!-- Cliente Final + Admin -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Cliente Final + Admin</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">10 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Cadastro rápido de cliente final</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Pré-qualificação (financiamento, entrada)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Feed visual de imóveis (estilo Instagram)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Filtros: quartos, bairro, preço, tipo</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Manifestação de interesse em imóveis</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">SEO-friendly para tráfego orgânico (Google)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Admin: validação de cadastros e aprovações</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Admin: gestão de usuários e imóveis</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Admin: painel de métricas e relatórios</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">PWA instalável: web + mobile sem app nativo</div>
        </div>
      </div>

    </div>
  </div>
</section>
`);
