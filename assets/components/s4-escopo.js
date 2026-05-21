document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S4 — ESCOPO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-white" id="s4" data-i="4">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#8FA398]">Escopo · Fazendinhas</span>
  </div>
  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">
    <div class="mb-8 flex items-end justify-between gap-8">
      <div>
        <div class="text-[11px] font-bold tracking-[.1em] uppercase text-[#158A3E] mb-[14px]">O que vamos construir</div>
        <h2 class="text-[clamp(36px,4vw,54px)] font-black leading-none tracking-[-0.03em] text-[#0C1410] mb-0">Escopo<br><em class="text-[#6EBF8B] not-italic">do projeto.</em></h2>
      </div>
      <p class="text-[15px] text-[#5C6E64] max-w-[360px] leading-[1.65] pb-1 flex-shrink-0">App mobile para moradores + painel web para portaria/admin + <strong class="text-[#1F2B23] font-semibold">site institucional</strong> do Fazendinhas Belo Vale.</p>
    </div>
    <div class="flex-1 grid gap-4" style="grid-template-columns: repeat(3,1fr);">

      <!-- App Moradores -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">App Mobile · Moradores</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">13 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Visitantes — Listar, Cadastrar, Editar, Deletar</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Liberações — Listar e Cadastrar (visitas/prestador)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Encomendas — Listar minhas encomendas</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Histórico de encomendas</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Reclamações — Cadastrar, Responder, Excluir</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Notificações — Listagem (encomendas + alertas)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Disparo de notificações via WhatsApp/Email (sugestão)</div>
        </div>
      </div>

      <!-- Painel Portaria/Admin -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Painel · Portaria / Admin</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">14 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Usuários — Listar, Cadastrar, Editar, Deletar</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Moradores — Listar, Cadastrar, Editar, Deletar</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Liberações — Listar (visitas e prestadores)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Encomendas — Listar, Cadastrar, Editar</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Reclamações — Listar e Responder</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Notificações — Criar e disparar</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium leading-[1.35]">Relatórios</div>
        </div>
      </div>

      <!-- Site Institucional -->
      <div class="sc bg-[#F4F8F5] border border-[#DDE8E2] rounded-[20px] flex flex-col overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,.06)]">
        <div class="sc-head px-7 py-[26px] flex items-center gap-4 relative overflow-hidden" style="background:linear-gradient(135deg,#0D5C2E 0%,#158A3E 100%);">
          <div class="w-11 h-11 bg-white/15 border border-white/20 rounded-[11px] flex items-center justify-center flex-shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          </div>
          <div class="flex-1">
            <div class="text-[16px] font-extrabold text-white leading-[1.2] tracking-[-0.015em]">Site Institucional</div>
            <div class="text-[11px] font-semibold text-white/55 mt-[5px] tracking-[.06em] uppercase">8 funcionalidades</div>
          </div>
        </div>
        <div class="px-7 py-[22px] flex-1 bg-white">
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Página inicial com apresentação do condomínio</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Galeria de fotos e infraestrutura</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Localização (mapa integrado)</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Área de contato / formulário</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Informações sobre regras e regulamento</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Link para download do app</div>
          <div class="si flex items-baseline gap-3 text-[15px] text-[#374840] py-[9px] font-medium border-b border-[#E8F0EB] leading-[1.35]">Design responsivo (mobile e desktop)</div>
        </div>
      </div>

    </div>
  </div>
</section>
`);
