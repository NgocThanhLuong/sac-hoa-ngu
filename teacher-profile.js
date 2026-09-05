(()=>{
  const DATA_URL='data/teacher-profile.json?v=20260825-1';
  const DESIGN_URL='data/teacher-profile-design-history.json?v=20260825-2';
  const MEDIA_URL='data/teacher-profile-media.json?v=20260905-3';
  const FACEBOOK='https://www.facebook.com/tran.anhvan.18/about';
  const escapeHTML=value=>String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  const icons={
    degree:'<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M8 25 32 13l24 12-24 12L8 25Z"/><path d="M18 31v11c7 7 21 7 28 0V31"/><path d="M54 27v14"/></svg>',
    certificate:'<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="13" y="10" width="38" height="44" rx="4"/><path d="M22 21h20M22 29h16M22 37h10"/><circle cx="43" cy="43" r="7"/><path d="m39 49-2 8 6-3 6 3-2-8"/></svg>',
    experience:'<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="23" cy="24" r="8"/><circle cx="42" cy="24" r="8"/><path d="M8 51c2-10 8-16 15-16s14 6 16 16M31 51c2-9 7-15 14-15 8 0 13 6 14 15"/></svg>'
  };
  const glyph={bilingual:'语',hsk:'证',pedagogy:'教','exam-prep':'考'};
  const cardIcon=item=>icons[item.type]||icons.certificate;

  function render(data,design,media){
    document.querySelector('.teacher-profile-section')?.remove();
    const photo=media?.teacherPhoto;
    const section=document.createElement('section');
    section.className='teacher-profile-section';
    section.id='hoc-van';
    section.dataset.design=design?.activeDesignId||'snow-portrait-editorial-v2';
    section.innerHTML=`<div class="teacher-profile-wrap">
      <div class="teacher-profile-showcase">
        <div class="teacher-profile-photo-column">
          <div class="teacher-profile-photo-frame">
            <span class="teacher-photo-seal">色<br>华<br>语</span>
            ${photo?.path?`<img class="teacher-profile-photo" src="${escapeHTML(photo.path)}" alt="${escapeHTML(photo.alt?.vi||'Ảnh cô giáo Sắc Hoa Ngữ')}" loading="eager" fetchpriority="high" decoding="async">`:`<div class="teacher-profile-photo-placeholder" aria-label="Ảnh giáo viên sẽ được cập nhật"><span>师</span><small>Ảnh giáo viên</small></div>`}
            <div class="teacher-photo-flower" aria-hidden="true">✦</div>
          </div>
          <div class="teacher-photo-caption"><b>Sắc Hoa Ngữ · 色华语</b><span>Học chắc nền tảng · Dùng tự tin · Giao tiếp tự nhiên</span></div>
        </div>

        <div class="teacher-profile-main">
          <div class="teacher-profile-kicker"><i></i><span>GIÁO VIÊN ĐỒNG HÀNH · 主讲老师</span></div>
          <h2 class="teacher-profile-title">Giáo viên đồng hành <em>· 主讲老师</em></h2>
          <div class="teacher-profile-title-sub"><strong>Truyền cảm hứng học tiếng Trung</strong><span>陪你学好中文</span></div>
          <blockquote class="teacher-profile-quote"><span>“</span><div><b>Học chắc nền tảng – Dùng tự tin – Giao tiếp tự nhiên</b><small>打好基础 · 学以致用 · 自然表达</small></div><span>”</span></blockquote>

          <div class="teacher-profile-credential-rail">
            ${data.credentials.map((item,index)=>`<article class="teacher-profile-mini-card">
              <div class="teacher-profile-mini-icon">${cardIcon(item)}</div>
              <small>0${index+1}</small>
              <h3>${escapeHTML(item.vi)}</h3>
              <p>${escapeHTML(item.zh)}</p>
            </article>`).join('')}
          </div>
        </div>
      </div>

      <div class="teacher-profile-qualifications">
        <div class="teacher-profile-qualifications-head">
          <div><span>HỒ SƠ CHUYÊN MÔN · 专业背景</span><h3>${escapeHTML(data.sectionTitle.vi)} <em>·</em> ${escapeHTML(data.sectionTitle.en)} <em>·</em> ${escapeHTML(data.sectionTitle.zh)}</h3></div>
          <p>${escapeHTML(data.intro.vi)}<br><span>${escapeHTML(data.intro.zh)}</span></p>
        </div>
        <div class="teacher-profile-trust-grid">
          ${data.highlights.map(item=>`<article class="teacher-profile-trust-item"><span class="teacher-profile-trust-icon">${escapeHTML(glyph[item.id]||'✓')}</span><div><b>${escapeHTML(item.vi)}</b><small>${escapeHTML(item.en)}</small><em>${escapeHTML(item.zh)}</em></div></article>`).join('')}
        </div>
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
      const [dataResponse,designResponse,mediaResponse]=await Promise.all([
        fetch(DATA_URL,{cache:'no-cache'}),
        fetch(DESIGN_URL,{cache:'no-cache'}),
        fetch(MEDIA_URL,{cache:'no-store'})
      ]);
      if(!dataResponse.ok) throw new Error(`teacher profile data ${dataResponse.status}`);
      const data=await dataResponse.json();
      const design=designResponse.ok?await designResponse.json():null;
      const media=mediaResponse.ok?await mediaResponse.json():null;
      render(data,design,media);
    }catch(error){
      console.error('[Sắc Hoa Ngữ] teacher profile:',error);
      const anchor=document.querySelector('.about');
      if(anchor&&!document.querySelector('.teacher-profile-error')) anchor.insertAdjacentHTML('afterend','<div class="container teacher-profile-error">Không tải được phần Học vấn & Năng lực. Vui lòng tải lại trang.</div>');
    }
  }
  init();
})();
