document.getElementById('slides-container').insertAdjacentHTML('beforeend', `
<!-- S7B — ETAPAS DO DESENVOLVIMENTO -->
<section class="slide w-full min-h-screen relative overflow-hidden flex flex-col bg-[#0C1410]" id="s7b" data-i="10">

  <!-- Glow de fundo -->
  <div style="position:absolute;top:-120px;left:50%;transform:translateX(-50%);width:800px;height:500px;background:radial-gradient(ellipse,rgba(29,185,84,.13) 0%,transparent 70%);pointer-events:none;"></div>

  <div class="absolute top-0 left-0 right-0 h-[72px] flex items-center justify-between px-[34px] z-10 overflow-visible">
    <img src="assets/images/logotipo_branco.png" alt="Habii.tech" style="height:150px;width:auto;display:block;padding-left:0;">
    <span class="text-[11px] font-bold tracking-[.1em] uppercase text-[#3A5A45]">Processo</span>
  </div>

  <div class="flex-1 flex flex-col items-center justify-center px-16 pb-8 pt-[88px] gap-10">

    <!-- Título -->
    <div class="text-center">
      <div style="font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#35E07A;margin-bottom:12px;">Como entregamos</div>
      <h2 style="font-size:clamp(40px,4.5vw,62px);font-weight:900;color:#fff;letter-spacing:-.03em;line-height:1;">Etapas do <em style="color:#6EBF8B;font-style:normal;">desenvolvimento</em></h2>
    </div>

    <!-- Pipeline -->
    <div style="width:100%;display:flex;align-items:center;justify-content:center;gap:0;position:relative;">

      <!-- Linha de conexão de fundo -->
      <div style="position:absolute;top:50%;left:calc(10% + 60px);right:calc(10% + 60px);height:1px;background:linear-gradient(to right,rgba(53,224,122,.4),rgba(53,224,122,.1) 50%,rgba(53,224,122,.4));transform:translateY(-50%);pointer-events:none;"></div>

      <!-- Step 1 — ATUAL -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:20px;position:relative;z-index:1;">
        <div style="position:relative;">
          <!-- Anel pulsante -->
          <div style="position:absolute;inset:-12px;border-radius:50%;border:1.5px solid rgba(53,224,122,.3);animation:ping 2.5s ease-in-out infinite;"></div>
          <div style="position:absolute;inset:-6px;border-radius:50%;border:1.5px solid rgba(53,224,122,.5);"></div>
          <!-- Círculo principal -->
          <div style="width:96px;height:96px;background:linear-gradient(135deg,#1a3d22,#0e2217);border:2px solid #35E07A;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 0 32px rgba(53,224,122,.35);">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#35E07A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
            </svg>
          </div>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#35E07A;margin-bottom:6px;">01 · Atual</div>
          <div style="font-size:15px;font-weight:800;color:#fff;line-height:1.25;">Análise de<br>Requisitos</div>
        </div>
      </div>

      <!-- Seta -->
      <div style="flex-shrink:0;width:32px;display:flex;align-items:center;justify-content:center;z-index:1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#35E07A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.6;"><polyline points="9 18 15 12 9 6"/></svg>
      </div>

      <!-- Step 2 -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:20px;position:relative;z-index:1;">
        <div style="width:96px;height:96px;background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#6EBF8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#3A5A45;margin-bottom:6px;">02</div>
          <div style="font-size:15px;font-weight:800;color:rgba(255,255,255,.75);line-height:1.25;">Protótipo<br>Navegável</div>
        </div>
      </div>

      <!-- Seta -->
      <div style="flex-shrink:0;width:32px;display:flex;align-items:center;justify-content:center;z-index:1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#35E07A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.3;"><polyline points="9 18 15 12 9 6"/></svg>
      </div>

      <!-- Step 3 -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:20px;position:relative;z-index:1;">
        <div style="width:96px;height:96px;background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#6EBF8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#3A5A45;margin-bottom:6px;">03</div>
          <div style="font-size:15px;font-weight:800;color:rgba(255,255,255,.75);line-height:1.25;">Desenvolvi-<br>mento</div>
        </div>
      </div>

      <!-- Seta -->
      <div style="flex-shrink:0;width:32px;display:flex;align-items:center;justify-content:center;z-index:1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#35E07A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.3;"><polyline points="9 18 15 12 9 6"/></svg>
      </div>

      <!-- Step 4 -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:20px;position:relative;z-index:1;">
        <div style="width:96px;height:96px;background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#6EBF8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#3A5A45;margin-bottom:6px;">04</div>
          <div style="font-size:15px;font-weight:800;color:rgba(255,255,255,.75);line-height:1.25;">Ajustes &<br>Garantia</div>
        </div>
      </div>

      <!-- Seta -->
      <div style="flex-shrink:0;width:32px;display:flex;align-items:center;justify-content:center;z-index:1;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#35E07A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:.3;"><polyline points="9 18 15 12 9 6"/></svg>
      </div>

      <!-- Step 5 -->
      <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:20px;position:relative;z-index:1;">
        <div style="width:96px;height:96px;background:rgba(255,255,255,.04);border:1.5px solid rgba(255,255,255,.1);border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#6EBF8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
          </svg>
        </div>
        <div style="text-align:center;">
          <div style="font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#3A5A45;margin-bottom:6px;">05</div>
          <div style="font-size:15px;font-weight:800;color:rgba(255,255,255,.75);line-height:1.25;">Publicação</div>
        </div>
      </div>

    </div>

    <!-- Badge inferior -->
    <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(53,224,122,.08);border:1px solid rgba(53,224,122,.25);border-radius:40px;padding:10px 22px;">
      <div style="width:8px;height:8px;background:#35E07A;border-radius:50%;box-shadow:0 0 8px #35E07A;flex-shrink:0;"></div>
      <span style="font-size:13px;color:rgba(255,255,255,.6);font-weight:500;">Você está aqui — ao fechar a proposta, iniciamos o <strong style="color:#fff;font-weight:700;">Protótipo Navegável</strong></span>
    </div>

  </div>

  <style>
    @keyframes ping {
      0%   { transform: scale(1);   opacity: .6; }
      70%  { transform: scale(1.4); opacity: 0;  }
      100% { transform: scale(1.4); opacity: 0;  }
    }
  </style>
</section>
`);
