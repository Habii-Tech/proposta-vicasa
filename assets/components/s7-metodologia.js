document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S7 — METODOLOGIA -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-surface-page" id="s7" data-i="2">
  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-eyebrow uppercase text-ink-soft">Metodologia</span>
  </div>

  <div class="flex-1 flex flex-col pt-[88px] px-16 pb-6">

    <!-- ░░ HEADER ░░ -->
    <div class="flex items-end justify-between gap-8 mb-5">
      <div>
        <div class="text-eyebrow uppercase text-brand-dark mb-3">Como entregamos</div>
        <h2 class="text-h2 text-ink m-0">Tecnologia de ponta.<br><em class="text-brand-soft not-italic">Processo próprio.</em></h2>
      </div>
      <p class="text-body text-ink-muted max-w-[400px] pb-1 flex-shrink-0">O mesmo stack das grandes — Facebook, Netflix, Uber — guiado por um método ágil exclusivo: a <strong class="text-ink font-semibold">Metodologia Habii</strong>.</p>
    </div>

    <!-- ░░ BLOCO 1 — POR QUE A HABII / STACK ░░ -->
    <div class="bg-surface-card border border-surface-line rounded-[20px] p-[22px_28px] mb-4 shadow-[0_4px_20px_rgba(0,0,0,.04)]">
      <div class="grid gap-7 items-start" style="grid-template-columns: 1fr 1.05fr;">
        <div>
          <div class="text-eyebrow-sm uppercase text-brand-dark mb-[10px]">Por que a Habii.Tech</div>
          <p class="text-body-sm text-ink-body">Trabalhamos com as <strong class="text-ink font-semibold">tecnologias mais atuais do mercado</strong>, tendo como referência o stack usado por gigantes como <strong class="text-ink font-semibold">Facebook, Netflix e Uber</strong>. Além da seleção criteriosa, contamos com um diferencial próprio: a Metodologia Habii.</p>
        </div>
        <div class="grid grid-cols-3 gap-3">
          <div class="bg-[#F8FBF9] border border-surface-line rounded-[12px] p-[14px_14px]">
            <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-[10px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2.5"/><line x1="12" y1="18" x2="12" y2="18"/></svg>
            </div>
            <div class="text-caption font-extrabold text-ink leading-[1.15] mb-[2px]">React Native</div>
            <div class="text-micro text-ink-soft">Mobile · iOS &amp; Android</div>
          </div>
          <div class="bg-[#F8FBF9] border border-surface-line rounded-[12px] p-[14px_14px]">
            <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-[10px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="2" y1="9" x2="22" y2="9"/></svg>
            </div>
            <div class="text-caption font-extrabold text-ink leading-[1.15] mb-[2px]">React &amp; Next.js</div>
            <div class="text-micro text-ink-soft">Aplicações web</div>
          </div>
          <div class="bg-[#F8FBF9] border border-surface-line rounded-[12px] p-[14px_14px]">
            <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-[10px]">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>
            </div>
            <div class="text-caption font-extrabold text-ink leading-[1.15] mb-[2px]">Rails + Postgres</div>
            <div class="text-micro text-ink-soft">Backend · Banco de dados</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ░░ BLOCO 2 — METODOLOGIA HABII ░░ -->
    <div class="relative bg-surface-dark rounded-[20px] p-[26px_30px] mb-4 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none" style="background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:48px 48px;"></div>
      <div class="absolute" style="right:-10%;top:-40%;width:55%;height:160%;background:radial-gradient(50% 50% at 50% 50%, rgba(29,185,84,.12) 0%, transparent 70%);pointer-events:none;"></div>

      <div class="relative z-[2] grid gap-7" style="grid-template-columns: 0.95fr 1.15fr;">
        <div>
          <div class="inline-flex items-center gap-[7px] bg-[rgba(29,185,84,.14)] border border-[rgba(29,185,84,.32)] text-brand text-eyebrow-sm uppercase px-[12px] py-[5px] rounded-full mb-3">
            <span class="w-[5px] h-[5px] bg-brand rounded-full block"></span>O que é a Metodologia Habii
          </div>
          <h3 class="text-h3 text-white mb-[14px]">Sprints semanais.<br><em class="text-brand-soft not-italic">Entrega contínua.</em></h3>
          <p class="text-body-sm text-white/70 mb-[10px]">Baseada em <strong class="text-white font-semibold">práticas ágeis</strong>, com sprints semanais ou quinzenais alinhadas ao cronograma — um processo de desenvolvimento <strong class="text-white font-semibold">flexível e adaptativo</strong>.</p>
          <p class="text-body-sm text-white/55">Resultado: um produto que evolui de forma contínua e se adapta às demandas reais do negócio.</p>
        </div>
        <div class="flex flex-col gap-[10px]">
          <div class="bg-white/[.04] border border-white/[.08] rounded-[12px] p-[14px_18px] flex items-start gap-[14px]">
            <div class="w-9 h-9 bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] rounded-[9px] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div class="text-eyebrow uppercase text-brand mb-[4px]">01 · Sprints curtas</div>
              <div class="text-body-sm text-white/75">Ciclos de <strong class="text-white font-semibold">1 a 2 semanas</strong> com escopo definido, garantindo entregas alinhadas ao cronograma.</div>
            </div>
          </div>
          <div class="bg-white/[.04] border border-white/[.08] rounded-[12px] p-[14px_18px] flex items-start gap-[14px]">
            <div class="w-9 h-9 bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] rounded-[9px] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <div>
              <div class="text-eyebrow uppercase text-brand mb-[4px]">02 · Ambiente de testes</div>
              <div class="text-body-sm text-white/75">A cada sprint, disponibilizamos <strong class="text-white font-semibold">acesso à aplicação em tempo real</strong> — você acompanha o produto sendo construído.</div>
            </div>
          </div>
          <div class="bg-white/[.04] border border-white/[.08] rounded-[12px] p-[14px_18px] flex items-start gap-[14px]">
            <div class="w-9 h-9 bg-[rgba(29,185,84,.12)] border border-[rgba(29,185,84,.28)] rounded-[9px] flex items-center justify-center flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1DB954" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
            </div>
            <div>
              <div class="text-eyebrow uppercase text-brand mb-[4px]">03 · Ajustes guiados</div>
              <div class="text-body-sm text-white/75">Pontos de melhoria identificados <strong class="text-white font-semibold">ao longo do desenvolvimento</strong>, conforme as necessidades percebidas pelo cliente.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ░░ BLOCO 3 — BENEFÍCIOS ░░ -->
    <div>
      <div class="flex items-center gap-3 mb-[10px]">
        <div class="text-eyebrow uppercase text-brand-dark">Benefícios da Metodologia Habii</div>
        <div class="flex-1 h-[1px] bg-surface-line"></div>
      </div>
      <div class="grid grid-cols-4 gap-3">
        <div class="bg-surface-card border border-surface-line rounded-[16px] p-[16px_18px]">
          <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-3">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l4-4 4 4 5-5"/></svg>
          </div>
          <div class="text-caption font-extrabold text-ink mb-[5px]">Previsibilidade</div>
          <div class="text-body-sm text-ink-muted">Acompanhamento claro do que será entregue em cada etapa.</div>
        </div>
        <div class="bg-surface-card border border-surface-line rounded-[16px] p-[16px_18px]">
          <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-3">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div class="text-caption font-extrabold text-ink mb-[5px]">Cronograma organizado</div>
          <div class="text-body-sm text-ink-muted">Prazos definidos e entregas estruturadas em ciclos curtos.</div>
        </div>
        <div class="bg-surface-card border border-surface-line rounded-[16px] p-[16px_18px]">
          <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-3">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9 9 9 0 0 1-9-9 9 9 0 0 1 9-9 9 9 0 0 1 6 2.3"/><polyline points="21 4 21 10 15 10"/></svg>
          </div>
          <div class="text-caption font-extrabold text-ink mb-[5px]">Flexibilidade real</div>
          <div class="text-body-sm text-ink-muted">Ajustes durante o desenvolvimento, sem retrabalho excessivo.</div>
        </div>
        <div class="bg-surface-card border border-surface-line rounded-[16px] p-[16px_18px]">
          <div class="w-8 h-8 bg-brand-bg border border-brand-border rounded-[8px] flex items-center justify-center mb-3">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#158A3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7L9 18l-5-5"/></svg>
          </div>
          <div class="text-caption font-extrabold text-ink mb-[5px]">Aderência ao negócio</div>
          <div class="text-body-sm text-ink-muted">Software alinhado ao momento atual e às reais necessidades da empresa.</div>
        </div>
      </div>
    </div>

  </div>
</section>
`);
