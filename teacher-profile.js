(()=>{
  const addStyle=(href,key)=>{if(document.querySelector(`link[data-${key}]`))return;const l=document.createElement('link');l.rel='stylesheet';l.href=href;l.dataset[key]='true';document.head.appendChild(l)};
  addStyle('teacher-profile-v3.css?v=20260826-3','teacherProfileV3');
  addStyle('teacher-hero-v3.css?v=20260826-3','teacherHeroV3');
  if(!document.querySelector('script[data-teacher-hero-v3]')){const s=document.createElement('script');s.src='teacher-hero-v3.js?v=20260826-3';s.defer=true;s.dataset.teacherHeroV3='true';document.body.appendChild(s)}
})();
(()=>{
 const DATA='data/teacher-profile.json?v=20260826-3', DESIGN='data/teacher-profile-design-history.json?v=20260826-3', MEDIA='data/teacher-profile-media.json?v=20260826-3';
 const FACEBOOK='https://www.facebook.com/tran.anhvan.18/about';
 const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 async function init(){
  try{
   const [dr,mr]=await Promise.all([fetch(DATA,{cache:'no-store'}),fetch(MEDIA,{cache:'no-store'})]);
   if(!dr.ok||!mr.ok)throw new Error('profile data unavailable');
   const d=await dr.json(),m=await mr.json();
   document.querySelector('.teacher-profile-section')?.remove();
   const name=d.identity?.displayName||m.teacher?.displayName||'Cô Trần Ánh Vân';
   const q=m.images?.qipao,w=m.images?.waterfront;
   const section=document.createElement('section');section.className='teacher-profile-section';section.id='hoc-van';section.dataset.design='three-photo-cultural-editorial-v3';
   section.innerHTML=`<div class="teacher-profile-wrap">
    <div class="teacher-profile-v3-head"><div><small>GIÁO VIÊN ĐỒNG HÀNH · 主讲老师</small><h2>${esc(name)} <em>· Sắc Hoa Ngữ</em></h2></div><p>${esc(d.intro.vi)}<br><span>${esc(d.intro.zh)}</span></p></div>
    <div class="teacher-profile-v3-grid">
      <article class="teacher-story-card teacher-story-academic"><img src="${q?.src||''}" alt="${esc(q?.alt?.vi||'Ảnh giáo viên')}" loading="lazy" decoding="async"><div class="teacher-story-copy"><small>深度学习 · HỌC VỚI CHIỀU SÂU</small><h3>Hiểu rõ trước khi ghi nhớ.</h3><p>Từ phát âm, chữ Hán đến ngữ pháp và ngữ cảm — bài học luôn đi tới câu hỏi “vì sao”, không dừng ở một đáp án mẫu.</p></div></article>
      <article class="teacher-credentials-card"><small>HỌC VẤN & NĂNG LỰC · 学历与资质</small><h3>Nền tảng chuyên môn rõ ràng.</h3><div class="teacher-credential-list-v3">${d.credentials.map((x,i)=>`<div class="teacher-credential-row-v3"><span>0${i+1}</span><div><b>${esc(x.vi)}</b><em>${esc(x.zh)}</em></div></div>`).join('')}</div><div class="teacher-profile-v3-actions"><a class="secondary" href="${FACEBOOK}" target="_blank" rel="noopener noreferrer">Nhắn cô giáo · 联系老师 ↗</a><a class="primary" href="#lien-he">Học thử · 预约试听 →</a></div></article>
      <article class="teacher-story-card teacher-story-life"><img src="${w?.src||''}" alt="${esc(w?.alt?.vi||'Ảnh giáo viên')}" loading="lazy" decoding="async"><div class="teacher-story-copy"><small>学以致用 · HỌC ĐỂ ỨNG DỤNG</small><h3>Đưa tiếng Trung vào đời sống.</h3><p>Giao tiếp, công việc, học tập hay những hành trình mới — mục tiêu cuối cùng là biến kiến thức thành khả năng biểu đạt thật sự.</p></div></article>
    </div>
    <div class="teacher-profile-v3-trust">${d.highlights.map(x=>`<article><b>${esc(x.vi)}</b><small>${esc(x.zh)}</small><span>${esc(x.en)}</span></article>`).join('')}</div>
   </div>`;
   const anchor=document.querySelector('.about');anchor?anchor.insertAdjacentElement('afterend',section):document.querySelector('main')?.prepend(section);
  }catch(e){console.error('[Sắc Hoa Ngữ] profile v3:',e)}
 }
 init();
})();
