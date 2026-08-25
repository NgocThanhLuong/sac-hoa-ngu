(()=>{
  const DATA_URL='data/teacher-profile.json?v=20260825-1';
  const DESIGN_URL='data/teacher-profile-design-history.json?v=20260825-1';
  const FACEBOOK='https://www.facebook.com/tran.anhvan.18/about';
  const escapeHTML=value=>String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));
  const icons={
    degree:'<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 25 32 13l24 12-24 12L8 25Z"/><path d="M18 31v11c7 7 21 7 28 0V31"/><path d="M54 27v14"/><path d="M14 49h36"/></svg>',
    certificate:'<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="13" y="10" width="38" height="44" rx="4"/><path d="M22 21h20M22 29h16M22 37h10"/><circle cx="43" cy="43" r="7"/><path d="m39 49-2 8 6-3 6 3-2-8"/></svg>',
    experience:'<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="24" cy="25" r="8"/><circle cx="42" cy="25" r="8"/><path d="M8 50c2-10 8-15 16-15s14 5 16 15M30 50c2-9 7-14 14-14 8 0 13 5 14 14"/></svg>'
  };
  const trustGlyph={bilingual:'语',hsk:'证',pedagogy:'教','exam-prep':'考'};
  function cardIcon(item){return icons[item.type]||icons.certificate}
  function render(data,design){
    if(document.querySelector('.teacher-profile-section')) return;
    const section=document.createElement('section');
    section.className='teacher-profile-section';
    section.id='hoc-van';
    section.dataset.design=design?.activeDesignId||'jade-credential-cards-v1';
    section.innerHTML=`<div class="teacher-profile-wrap">
      <div class="teacher-profile-head">
        <div>
          <div class="teacher-profile-kicker"><i></i><span>HỒ SƠ GIÁO VIÊN · 老师资质</span></div>
          <h2 class="teacher-profile-title">${escapeHTML(data.sectionTitle.vi.split('&')[0].trim())} <em>&</em> ${escapeHTML((data.sectionTitle.vi.split('&')[1]||'Năng lực').trim())}</h2>
          <div class="teacher-profile-title-sub"><strong>${escapeHTML(data.sectionTitle.en)}</strong><span>/ ${escapeHTML(data.sectionTitle.zh)}</span></div>
          <div class="teacher-profile-intro"><p class="vi">${escapeHTML(data.intro.vi)}</p><p class="en">${escapeHTML(data.intro.en)}</p><p class="zh">${escapeHTML(data.intro.zh)}</p></div>
        </div>
        <aside class="teacher-profile-trust" aria-label="Điểm nổi bật về năng lực giáo viên">
          ${data.highlights.map(item=>`<div class="teacher-profile-trust-item"><span class="teacher-profile-trust-icon">${escapeHTML(trustGlyph[item.id]||'✓')}</span><div class="teacher-profile-trust-copy"><b>${escapeHTML(item.vi)}</b><small>${escapeHTML(item.en)}</small><em>${escapeHTML(item.zh)}</em></div></div>`).join('')}
        </aside>
      </div>
      <div class="teacher-credential-grid">
        ${data.credentials.map((item,index)=>`<article class="teacher-credential-card"><span class="teacher-credential-no">${index+1}</span><div class="teacher-credential-icon">${cardIcon(item)}</div><h3>${escapeHTML(item.vi)}</h3><i class="teacher-credential-divider"></i><p class="en">${escapeHTML(item.en)}</p><p class="zh">${escapeHTML(item.zh)}</p></article>`).join('')}
      </div>
      <div class="teacher-profile-foot">
        <div class="teacher-profile-foot-copy"><b>Học chuẩn · Dạy tâm huyết · Tiến vững tương lai</b><span>学得扎实 · 教得用心 · 一步一步走向真正会用中文</span></div>
        <div class="teacher-profile-actions"><a class="teacher-profile-action secondary" href="${FACEBOOK}" target="_blank" rel="noopener noreferrer">${escapeHTML(data.cta.message.vi)} · ${escapeHTML(data.cta.message.zh)} ↗</a><a class="teacher-profile-action primary" href="#lien-he">${escapeHTML(data.cta.trial.vi)} · ${escapeHTML(data.cta.trial.zh)} →</a></div>
      </div>
    </div>`;
    const anchor=document.querySelector('.about');
    if(anchor) anchor.insertAdjacentElement('afterend',section); else document.querySelector('main')?.prepend(section);
  }
  async function init(){
    try{
      const [dataResponse,designResponse]=await Promise.all([fetch(DATA_URL,{cache:'no-cache'}),fetch(DESIGN_URL,{cache:'no-cache'})]);
      if(!dataResponse.ok) throw new Error(`teacher profile data ${dataResponse.status}`);
      const data=await dataResponse.json();
      const design=designResponse.ok?await designResponse.json():null;
      render(data,design);
    }catch(error){
      console.error('[Sắc Hoa Ngữ] teacher profile:',error);
      const anchor=document.querySelector('.about');
      if(anchor&&!document.querySelector('.teacher-profile-error')) anchor.insertAdjacentHTML('afterend','<div class="container teacher-profile-error">Không tải được phần Học vấn & Năng lực. Vui lòng tải lại trang.</div>');
    }
  }
  init();

  // Class information is a separate JSON-driven module. The English-class reference poster supplied by the owner is used only for information architecture inspiration, never as a factual source.
  (()=>{
    const css=document.createElement('link');
    css.rel='stylesheet';
    css.href='class-info.css?v=20260825-1';
    document.head.appendChild(css);
    const js=document.createElement('script');
    js.src='class-info.js?v=20260825-1';
    js.defer=true;
    document.body.appendChild(js);
  })();
})();
