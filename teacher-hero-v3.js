(()=>{
  const PROFILE_URL='data/teacher-profile.json?v=20260826-3';
  const MEDIA_URL='data/teacher-profile-media.json?v=20260826-3';
  const CLASS_URL='data/class-info.json?v=20260825-1';
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  function navLink(){
    const desktop=document.querySelector('.nav nav');
    if(desktop&&!desktop.querySelector('a[href="#hoc-van"]')){
      const a=document.createElement('a');a.href='#hoc-van';a.innerHTML='<span>Giáo viên</span><small>主讲老师</small>';
      const faq=desktop.querySelector('a[href="#faq"]');faq?desktop.insertBefore(a,faq):desktop.appendChild(a);
    }
    const mobile=document.querySelector('.mobile-nav');
    if(mobile&&!mobile.querySelector('a[href="#hoc-van"]')){
      const a=document.createElement('a');a.href='#hoc-van';a.textContent='Giáo viên · 主讲老师';
      const faq=mobile.querySelector('a[href="#faq"]');faq?mobile.insertBefore(a,faq):mobile.appendChild(a);
    }
  }

  function renderHero(profile,media){
    const hero=document.querySelector('.hero');
    const copy=hero?.querySelector('.hero-copy');
    const art=hero?.querySelector('.hero-art');
    const snow=media?.images?.snow;
    if(!hero||!copy||!art||!snow?.src)return;
    hero.classList.add('teacher-hero-v3');
    const name=profile?.identity?.displayName||media?.teacher?.displayName||'Cô Trần Ánh Vân';
    copy.innerHTML=`
      <span class="eyebrow"><i></i>TIẾNG TRUNG CHO NGƯỜI VIỆT · 越南学习者中文课堂</span>
      <h1>Học tiếng Trung <em>có chiều sâu.</em></h1>
      <p class="hero-cn">学得懂，也学得会用。</p>
      <p>Không chỉ ghi nhớ từ vựng và ngữ pháp. Học để <strong>hiểu bản chất, diễn đạt tự nhiên và kết nối với văn hoá Trung Hoa</strong> — cùng ${esc(name)}.</p>
      <div class="actions"><a class="btn primary" href="#lien-he">Đăng ký học thử · 预约试听 <span>→</span></a><a class="link" href="#hoc-van">Gặp cô giáo · 认识老师 <span>↘</span></a></div>
      <div class="chips"><span><b>01</b>Học có hệ thống · 系统学习</span><span><b>02</b>Nói tự nhiên · 自然表达</span><span><b>03</b>Hiểu văn hoá · 文化连接</span></div>`;

    art.innerHTML=`
      <div class="hero-real-frame">
        <div class="hero-real-halo"></div>
        <img class="hero-real-photo" src="${snow.src}" alt="${esc(snow.alt?.vi||name)}" decoding="async" fetchpriority="high">
        <span class="hero-real-seal">色<br>华<br>语</span>
        <div class="hero-name-plaque"><small>主讲老师</small><strong>${esc(name)}</strong><span>Sắc Hoa Ngữ · 色华语</span></div>
        <div class="hero-float hero-float-a"><b>深度学习</b><span>Học với chiều sâu</span></div>
        <div class="hero-float hero-float-b"><b>学以致用</b><span>Học để dùng được</span></div>
      </div>`;
  }

  function renderQuickClass(data){
    if(!data||document.querySelector('.class-quick-v3'))return;
    const anchor=document.querySelector('.teacher-profile-section');
    if(!anchor)return;
    const audiences=(data.audiences||[]).slice(0,3).map(x=>x.vi).join(' · ');
    const formats=(data.formats||[]).slice(0,2).map(x=>x.vi).join(' · ');
    const flexible=(data.formats||[]).find(x=>x.id==='flexible');
    const strip=document.createElement('section');
    strip.className='class-quick-v3';
    strip.innerHTML=`<div class="container class-quick-wrap">
      <div class="class-quick-title"><small>THÔNG TIN LỚP · 班级信息</small><b>Chọn cách học phù hợp với bạn.</b></div>
      <div class="class-quick-item"><span>人</span><div><b>Đối tượng</b><small>${esc(audiences)}</small></div></div>
      <div class="class-quick-item"><span>课</span><div><b>Hình thức</b><small>${esc(formats)}</small></div></div>
      <div class="class-quick-item"><span>时</span><div><b>Tiến độ</b><small>${esc(flexible?.vi||'Linh hoạt theo quỹ thời gian')}</small></div></div>
      <a href="#lien-he" class="class-quick-cta">Học thử · 免费试听 →</a>
    </div>`;
    anchor.insertAdjacentElement('afterend',strip);
  }

  async function init(){
    navLink();
    try{
      const [p,m,c]=await Promise.all([fetch(PROFILE_URL,{cache:'no-store'}),fetch(MEDIA_URL,{cache:'no-store'}),fetch(CLASS_URL,{cache:'no-store'})]);
      const profile=p.ok?await p.json():null;const media=m.ok?await m.json():null;const classInfo=c.ok?await c.json():null;
      renderHero(profile,media);
      let tries=0;const timer=setInterval(()=>{tries++;if(document.querySelector('.teacher-profile-section')){clearInterval(timer);renderQuickClass(classInfo)}else if(tries>30)clearInterval(timer)},100);
    }catch(e){console.error('[Sắc Hoa Ngữ] teacher hero v3:',e)}
  }
  init();
})();
