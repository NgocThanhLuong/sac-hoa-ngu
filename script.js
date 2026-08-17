const benefits=[
  {icon:'声',no:'01',title:'Phản xạ trước, thuộc lòng sau',text:'Ưu tiên nghe – nói – đặt câu – xử lý tình huống để kiến thức trở thành kỹ năng dùng được.'},
  {icon:'路',no:'02',title:'Biết hôm nay học gì, vì sao phải học',text:'Mỗi giai đoạn có mục tiêu rõ, tránh cảm giác học mãi nhưng không biết mình đang ở đâu.'},
  {icon:'暖',no:'03',title:'Năng lượng tích cực, không tạo áp lực',text:'Sai được sửa cụ thể, tiến bộ được ghi nhận và lớp học đủ thoải mái để bạn dám mở miệng.'},
  {icon:'真',no:'04',title:'Tiếng Trung thật, không chỉ sách vở',text:'Ví dụ gần gũi, ngữ cảnh tự nhiên và cách diễn đạt có thể mang ra dùng ngay sau buổi học.'}
];

const paths=[
  {no:'01',tag:'START · 从零开始',title:'Xây nền chuẩn ngay từ đầu',text:'Phát âm, thanh điệu, pinyin, chữ Hán cơ bản và mẫu câu thiết yếu — học chắc nhưng không khô.',items:['Đọc pinyin đúng hơn','Tự giới thiệu & hội thoại cơ bản','Hình thành thói quen học chữ Hán']},
  {no:'02',tag:'BUILD · 打好基础',title:'Học có hệ thống, thi có chiến lược',text:'Từ vựng, ngữ pháp, nghe – đọc – viết được kết nối thành một hệ thống để vừa chắc nền vừa hướng tới mục tiêu HSK.',items:['Hiểu bản chất điểm ngữ pháp','Tăng tốc từ vựng theo chủ đề','Luyện đề đi cùng sửa lỗi']},
  {no:'03',tag:'USE · 开口表达',title:'Biến kiến thức thành phản xạ',text:'Luyện tình huống thật, shadowing, hỏi – đáp nhanh và sửa cách diễn đạt để bạn nói tự nhiên hơn từng buổi.',items:['Tăng phản xạ nghe – nói','Dùng câu tự nhiên hơn','Tự tin giao tiếp theo tình huống']}
];

const lessons=[
  {no:'01',tag:'INPUT · 输入',title:'Hiểu nhanh',text:'Từ mới và ngữ pháp được giải thích bằng ngữ cảnh dễ hình dung.'},
  {no:'02',tag:'OUTPUT · 输出',title:'Nói ngay',text:'Biến mẫu câu thành lời của chính bạn bằng hỏi – đáp và tình huống.'},
  {no:'03',tag:'FEEDBACK · 反馈',title:'Sửa đúng chỗ',text:'Phát âm, dùng từ, ngữ pháp được phản hồi cụ thể thay vì chỉ nói “sai rồi”.'},
  {no:'04',tag:'REUSE · 复用',title:'Dùng lại',text:'Lặp lại thông minh trong ngữ cảnh mới để biến kiến thức ngắn hạn thành phản xạ.'}
];

const faqs=[
  ['Tôi chưa biết gì về tiếng Trung, có học được không?','Có. Lộ trình cho người mới bắt đầu đi từ phát âm, pinyin, thanh điệu đến chữ Hán và mẫu câu cơ bản. Quan trọng nhất là học đúng nền từ đầu, không cần biết trước.'],
  ['Tôi đi làm bận, sợ không theo được tiến độ?','Lộ trình có thể điều chỉnh theo quỹ thời gian thực tế. Thay vì giao thật nhiều, ưu tiên phần cốt lõi và cách ôn ngắn nhưng đều để duy trì tiến bộ.'],
  ['Lớp có tập trung giao tiếp không?','Có. Dù học nền tảng hay HSK, học viên vẫn được khuyến khích nói, đặt câu và phản xạ trong ngữ cảnh. Kiến thức được học để dùng chứ không chỉ để làm bài.'],
  ['Làm sao biết mình phù hợp với lớp?','Bạn có thể bắt đầu bằng một buổi trao đổi hoặc học thử để xác định nền tảng, mục tiêu và nhịp học phù hợp trước khi chọn lộ trình dài hơn.']
];

const benefitRoot=document.querySelector('#benefits');
benefitRoot.innerHTML=benefits.map((b,i)=>`<article class="value reveal ${i?'delay1':''}"><div class="icon">${b.icon}</div><small>${b.no}</small><h3>${b.title}</h3><p>${b.text}</p></article>`).join('');

const panel=document.querySelector('#path-panel');
function renderPath(index){
  const p=paths[index];
  panel.innerHTML=`<div class="path-main"><span class="path-number">${p.no}</span><div><small>${p.tag}</small><h3>${p.title}</h3><p>${p.text}</p></div></div><div class="outcomes">${p.items.map(x=>`<span>✓ ${x}</span>`).join('')}</div>`;
}
renderPath(0);

document.querySelectorAll('.tabs button').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  renderPath(Number(btn.dataset.path));
}));

document.querySelector('#lesson-flow').innerHTML=lessons.map((l,i)=>`<article class="lesson ${i===0?'active':''}"><span class="num">${l.no}</span><div><small>${l.tag}</small><h3>${l.title}</h3><p>${l.text}</p></div></article>`).join('');

document.querySelector('#faq-list').innerHTML=faqs.map((f,i)=>`<article class="faq-item ${i===0?'open':''}"><button type="button" aria-expanded="${i===0}"><span>${f[0]}</span><i>${i===0?'−':'+'}</i></button><div class="faq-answer" ${i===0?'':'hidden'}><p>${f[1]}</p></div></article>`).join('');

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

const header=document.querySelector('.header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20),{passive:true});

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}
}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const copyButton=document.querySelector('.copy-msg');
const toast=document.querySelector('.toast');
const message='Xin chào Sắc Hoa Ngữ! Mình muốn đăng ký buổi học thử tiếng Trung. Trình độ hiện tại: ... | Mục tiêu: ... | Thời gian có thể học: ...';
copyButton.addEventListener('click',async()=>{
  try{
    await navigator.clipboard.writeText(message);
  }catch(e){
    const area=document.createElement('textarea');area.value=message;document.body.appendChild(area);area.select();document.execCommand('copy');area.remove();
  }
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>toast.classList.remove('show'),3200);
});

document.querySelector('#year').textContent=new Date().getFullYear();
