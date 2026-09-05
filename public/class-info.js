(()=>{
  const DATA_URL='data/class-info.json?v=20260825-1';
  const DESIGN_URL='data/class-info-design-history.json?v=20260825-1';
  const escapeHTML=value=>String(value??'').replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));

  function render(data,design){
    if(document.querySelector('.class-info-section')) return;
    const section=document.createElement('section');
    section.className='class-info-section';
    section.id='thong-tin-lop';
    section.dataset.design=design?.activeDesignId||'class-map-editorial-v1';
    section.innerHTML=`<div class="class-info-wrap">
      <div class="class-info-kicker"><i></i><span>THÔNG TIN LỚP HỌC · 班级信息</span></div>
      <div class="class-info-heading">
        <div>
          <h2 class="class-info-title">Học đúng mục tiêu.<br><em>Hiểu sâu · Dùng tự nhiên.</em></h2>
          <p class="class-info-subtitle"><strong>${escapeHTML(data.sectionTitle.vi)}</strong> · ${escapeHTML(data.sectionTitle.en)} · ${escapeHTML(data.sectionTitle.zh)}</p>
        </div>
        <div class="class-info-intro"><p>${escapeHTML(data.intro.vi)}</p><p class="zh">${escapeHTML(data.intro.zh)}</p></div>
      </div>

      <div class="class-info-block">
        <div class="class-info-block-head"><div><small>01 · WHO IS IT FOR?</small><h3>Phù hợp với ai? · 适合谁？</h3></div><span>Chọn điểm bắt đầu phù hợp với bạn.</span></div>
        <div class="class-audience-grid">${data.audiences.map(item=>`<article class="class-audience-card"><span class="class-audience-icon">${escapeHTML(item.icon)}</span><h4>${escapeHTML(item.vi)}</h4><div class="zh">${escapeHTML(item.zh)}</div><p>${escapeHTML(item.descriptionVi)}</p></article>`).join('')}</div>
      </div>

      <div class="class-info-block">
        <div class="class-info-block-head"><div><small>02 · WHAT YOU LEARN</small><h3>Học gì để thật sự dùng được? · 学什么才能真正会用？</h3></div><span>Từ hệ thống ngôn ngữ đến khả năng biểu đạt.</span></div>
        <div class="class-focus-panel"><div class="class-focus-grid">${data.learningFocus.map(item=>`<article class="class-focus-item"><span class="class-focus-glyph">${escapeHTML(item.icon)}</span><b>${escapeHTML(item.vi)}</b><small>${escapeHTML(item.zh)}</small><p>${escapeHTML(item.descriptionVi)}</p></article>`).join('')}</div></div>
      </div>

      <div class="class-info-lower">
        <article class="class-info-card">
          <h3>Hình thức học</h3><div class="zh">学习方式</div>
          <div class="class-format-list">${data.formats.map(item=>`<div class="class-format-row"><span class="class-format-label">${escapeHTML(item.label)}</span><div><b>${escapeHTML(item.vi)}</b><small>${escapeHTML(item.zh)}</small><p>${escapeHTML(item.descriptionVi)}</p></div></div>`).join('')}</div>
        </article>

        <article class="class-info-card">
          <h3>Một buổi học diễn ra thế nào?</h3><div class="zh">一节课怎么学？</div>
          <div class="class-flow">${data.lessonFlow.map(item=>`<div class="class-flow-step"><span class="class-flow-no">0${item.step}</span><div class="class-flow-copy"><small>${escapeHTML(item.en)} · ${escapeHTML(item.zh)}</small><b>${escapeHTML(item.vi)}</b><p>${escapeHTML(item.descriptionVi)}</p></div></div>`).join('')}</div>
        </article>

        <article class="class-info-card class-start-card">
          <h3>Bắt đầu thế nào?</h3><div class="zh">怎么开始？</div>
          <div class="class-start-list">${data.startSteps.map(item=>`<div class="class-start-item"><i>${item.step}</i><span>${escapeHTML(item.vi)} · ${escapeHTML(item.zh)}</span></div>`).join('')}</div>
          <div class="class-start-note">Không cần chọn khóa học “mù”. Trước tiên hãy xác định nền tảng, mục tiêu và thời gian để chọn cách học phù hợp hơn.</div>
          <div class="class-start-actions"><a class="class-info-action primary" href="#lien-he">${escapeHTML(data.cta.primary.vi)} · ${escapeHTML(data.cta.primary.zh)} →</a><a class="class-info-action secondary" href="#lo-trinh">${escapeHTML(data.cta.secondary.vi)} · ${escapeHTML(data.cta.secondary.zh)} ↓</a></div>
        </article>
      </div>

      <div class="class-promise-strip">${data.learningPromises.map(item=>`<div class="class-promise-item"><b>${escapeHTML(item.vi)}</b><span>${escapeHTML(item.zh)}</span><p>${escapeHTML(item.descriptionVi)}</p></div>`).join('')}</div>
    </div>`;

    const teacherProfile=document.querySelector('.teacher-profile-section');
    const anchor=teacherProfile||document.querySelector('.about');
    if(anchor) anchor.insertAdjacentElement('afterend',section); else document.querySelector('main')?.prepend(section);
  }

  async function init(){
    try{
      const [dataResponse,designResponse]=await Promise.all([
        fetch(DATA_URL,{cache:'no-cache'}),
        fetch(DESIGN_URL,{cache:'no-cache'})
      ]);
      if(!dataResponse.ok) throw new Error(`class info data ${dataResponse.status}`);
      const data=await dataResponse.json();
      const design=designResponse.ok?await designResponse.json():null;
      render(data,design);
    }catch(error){
      console.error('[Sắc Hoa Ngữ] class info:',error);
      const anchor=document.querySelector('.teacher-profile-section')||document.querySelector('.about');
      if(anchor&&!document.querySelector('.class-info-error')) anchor.insertAdjacentHTML('afterend','<div class="class-info-error">Không tải được phần Thông tin lớp học. Vui lòng tải lại trang.</div>');
    }
  }

  init();
})();
