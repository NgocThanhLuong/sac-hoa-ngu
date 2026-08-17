const benefits=[
  {icon:'声',no:'01',title:'Phản xạ trước, thuộc lòng sau',cn:'先开口，再把知识记牢',text:'Ưu tiên nghe – nói – đặt câu – xử lý tình huống để kiến thức trở thành kỹ năng dùng được.'},
  {icon:'理',no:'02',title:'Hiểu bản chất, không học mẹo',cn:'不只记规则，更理解语言逻辑',text:'Mỗi cấu trúc đều được giải thích bằng chức năng, ngữ cảnh và sắc thái thay vì chỉ ghi nhớ một công thức.'},
  {icon:'辨',no:'03',title:'Phân biệt những chỗ dễ nhầm',cn:'把“差不多”讲到“不一样”',text:'Đào sâu từ gần nghĩa, cách kết hợp từ, khẩu ngữ – văn viết và những lỗi người Việt thường gặp.'},
  {icon:'感',no:'04',title:'Từ đúng ngữ pháp đến tự nhiên',cn:'从“说得对”走向“说得自然”',text:'Xây ngữ cảm để nhận ra câu nào đúng nhưng gượng, câu nào người bản xứ thật sự hay dùng.'}
];

const paths=[
  {no:'01',tag:'零基础 · 从第一声开始',title:'Xây nền chuẩn ngay từ đầu · 把基础打稳',text:'Phát âm, thanh điệu, pinyin, chữ Hán cơ bản và mẫu câu thiết yếu được kết nối thành một hệ thống — học chắc nhưng không khô.',items:['发音更准确 · Đọc pinyin và thanh điệu chuẩn hơn','能完成基本对话 · Tự giới thiệu & hội thoại cơ bản','建立汉字思维 · Hình thành tư duy học chữ Hán']},
  {no:'02',tag:'HSK · 系统学习',title:'Học có hệ thống, thi có chiến lược · 学得懂，也考得好',text:'Từ vựng, ngữ pháp, nghe – đọc – viết được kết nối với mục tiêu HSK; mỗi lỗi sai đều trở thành dữ liệu để biết phần nào cần củng cố.',items:['理解语法功能 · Hiểu bản chất ngữ pháp','主题词汇网络 · Xây mạng lưới từ vựng theo chủ đề','真题+错题复盘 · Luyện đề đi cùng phân tích lỗi']},
  {no:'03',tag:'口语 · 真实表达',title:'Biến kiến thức thành phản xạ · 把“知道”变成“会说”',text:'Luyện tình huống thật, shadowing, hỏi – đáp nhanh, kể chuyện, sửa cách dùng từ và nhịp câu để lời nói tự nhiên hơn từng buổi.',items:['提高听说反应 · Tăng phản xạ nghe – nói','表达更地道 · Dùng câu tự nhiên hơn','真实场景会开口 · Tự tin giao tiếp theo tình huống']}
];

const lessons=[
  {no:'01',tag:'INPUT · 输入',title:'Hiểu rõ · 先听懂',text:'Từ mới và ngữ pháp đi vào bằng ngữ cảnh, hình ảnh, đối chiếu và câu hỏi “vì sao”.'},
  {no:'02',tag:'NOTICE · 注意',title:'Nhìn ra quy luật · 看出规律',text:'Nhận diện điểm mấu chốt: vị trí từ, sắc thái, collocation, biến điệu hoặc khác biệt với tiếng Việt.'},
  {no:'03',tag:'OUTPUT · 输出',title:'Nói ngay · 马上开口',text:'Biến mẫu câu thành lời của chính bạn qua hỏi – đáp, kể lại và tình huống thật.'},
  {no:'04',tag:'FEEDBACK · 反馈',title:'Sửa đúng chỗ · 精准纠错',text:'Không chỉ nói “sai”, mà chỉ ra sai ở âm, từ, cấu trúc hay ngữ cảnh và cách sửa tự nhiên hơn.'},
  {no:'05',tag:'REUSE · 复用',title:'Dùng lại · 换场景再用',text:'Lặp lại thông minh trong ngữ cảnh mới để kiến thức chuyển từ trí nhớ ngắn hạn thành phản xạ.'}
];

const faqs=[
  ['Tôi chưa biết gì về tiếng Trung, có học được không? · 我零基础，可以学吗？','Có. Lộ trình cho người mới bắt đầu đi từ phát âm, pinyin, thanh điệu đến chữ Hán và mẫu câu cơ bản. 零基础并不可怕，最重要的是一开始把发音、声调和学习方法建立正确。'],
  ['Tôi đi làm bận, sợ không theo được tiến độ? · 工作很忙，跟不上怎么办？','Lộ trình có thể điều chỉnh theo quỹ thời gian thực tế. 不追求一次学很多，而是抓住核心、短时高频复习，让学习能够长期坚持。'],
  ['Lớp có tập trung giao tiếp không? · 课堂重视口语吗？','Có. Dù học nền tảng hay HSK, học viên vẫn phải nói, đặt câu và phản xạ trong ngữ cảnh. 知识最终要变成表达，所以每节课都会有输出。'],
  ['Có học sâu về chữ Hán và ngữ pháp không? · 会深入讲汉字和语法吗？','Có. Không chỉ giải nghĩa, lớp còn khai thác bộ kiện, chữ hình thanh, collocation, chức năng ngữ pháp và ngữ cảm. 目标不是“记住答案”，而是理解系统。'],
  ['Làm sao biết mình phù hợp với lớp? · 怎么知道适不适合我？','Bạn có thể bắt đầu bằng một buổi trao đổi hoặc học thử để xác định nền tảng, mục tiêu và nhịp học phù hợp. 先试听、先了解，再决定是否长期学习。']
];

const benefitRoot=document.querySelector('#benefits');
if(benefitRoot){
  benefitRoot.innerHTML=benefits.map((b,i)=>`<article class="value reveal ${i?'delay1':''}"><div class="icon">${b.icon}</div><small>${b.no}</small><h3>${b.title}</h3><strong class="value-cn">${b.cn}</strong><p>${b.text}</p></article>`).join('');
}

const panel=document.querySelector('#path-panel');
function renderPath(index){
  if(!panel) return;
  const p=paths[index];
  panel.innerHTML=`<div class="path-main"><span class="path-number">${p.no}</span><div><small>${p.tag}</small><h3>${p.title}</h3><p>${p.text}</p></div></div><div class="outcomes">${p.items.map(x=>`<span>✓ ${x}</span>`).join('')}</div>`;
}
renderPath(0);

document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  renderPath(Number(btn.dataset.path));
}));

const lessonFlow=document.querySelector('#lesson-flow');
if(lessonFlow){
  lessonFlow.innerHTML=lessons.map((l,i)=>`<article class="lesson ${i===0?'active':''}"><span class="num">${l.no}</span><div><small>${l.tag}</small><h3>${l.title}</h3><p>${l.text}</p></div></article>`).join('');
}

const faqList=document.querySelector('#faq-list');
if(faqList){
  faqList.innerHTML=faqs.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button type="button" aria-expanded="${i===0}"><span>${f[0]}</span><i>${i===0?'−':'+'}</i></button><div class="faq-answer" ${i===0?'':'hidden'}><p>${f[1]}</p></div></article>`).join('');
}

document.querySelectorAll('.faq-item button').forEach(button=>button.addEventListener('click',()=>{
  const item=button.closest('.faq-item');
  const answer=item.querySelector('.faq-answer');
  const wasOpen=item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(x=>{
    x.classList.remove('open');
    x.querySelector('button').setAttribute('aria-expanded','false');
    x.querySelector('button i').textContent='+';
    x.querySelector('.faq-answer').hidden=true;
  });
  if(!wasOpen){
    item.classList.add('open');
    button.setAttribute('aria-expanded','true');
    button.querySelector('i').textContent='−';
    answer.hidden=false;
  }
}));

const menu=document.querySelector('.menu');
const mobileNav=document.querySelector('.mobile-nav');
if(menu&&mobileNav){
  menu.addEventListener('click',()=>{
    const open=menu.getAttribute('aria-expanded')==='true';
    menu.setAttribute('aria-expanded',String(!open));
    menu.textContent=open?'☰':'×';
    mobileNav.hidden=open;
  });
  mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    mobileNav.hidden=true;
    menu.setAttribute('aria-expanded','false');
    menu.textContent='☰';
  }));
}

const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header&&header.classList.toggle('scrolled',window.scrollY>20),{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const copyButton=document.querySelector('.copy-msg');
const toast=document.querySelector('.toast');
const message='Xin chào Sắc Hoa Ngữ! Mình muốn đăng ký buổi học thử tiếng Trung / 你好，我想预约一节中文试听课。Trình độ hiện tại / 目前水平: ... | Mục tiêu / 学习目标: ... | Thời gian có thể học / 可学习时间: ...';
if(copyButton){
  copyButton.addEventListener('click',async()=>{
    try{await navigator.clipboard.writeText(message)}catch(e){const area=document.createElement('textarea');area.value=message;document.body.appendChild(area);area.select();document.execCommand('copy');area.remove()}
    if(toast){toast.classList.add('show');clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>toast.classList.remove('show'),3200)}
  });
}

const year=document.querySelector('#year');
if(year) year.textContent=new Date().getFullYear();

// V2 WOW modules are kept separate so the core landing page stays maintainable.
(() => {
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='wow.css?v=20260817-2';
  document.head.appendChild(css);
  const js=document.createElement('script');
  js.src='wow.js?v=20260817-2';
  js.defer=true;
  document.body.appendChild(js);
})();
