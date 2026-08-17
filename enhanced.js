const knowledgeData={
  phonetics:{
    label:'语音 · NGỮ ÂM',
    title:'Nghe “đúng âm” chưa đủ — phải nghe được biến điệu và nhịp câu.',
    desc:'Tiếng Trung là ngôn ngữ thanh điệu, nhưng thanh điệu trong lời nói thật không đứng yên như bốn ô trong sách. Biến điệu, trọng âm và nhịp câu quyết định độ tự nhiên.',
    zh:'你好，你不是说你不来吗？',
    py:'nǐ hǎo, nǐ bú shì shuō nǐ bù lái ma?',
    vi:'Xin chào, chẳng phải bạn nói là bạn không đến sao?',
    points:[
      ['三声变调','你好 có dạng từ điển nǐ hǎo, nhưng trong chuỗi 3 + 3, âm đầu thường thực hiện gần thanh 2: ní hǎo.'],
      ['“不”的变调','不 bù đứng trước thanh 4 thường đổi thành bú: 不是 bú shì; trước thanh khác vẫn thường là bù: 不来 bù lái.'],
      ['轻声与节奏','Các âm tiết nhẹ như 吗、呢、的 không mang “độ nặng” như âm tiết chính; luyện nhịp giúp câu bớt cảm giác đọc từng chữ.']
    ]
  },
  hanzi:{
    label:'汉字 · CHỮ HÁN',
    title:'Nhìn chữ Hán như một hệ thống, không phải hàng nghìn hình vẽ rời rạc.',
    desc:'Một chữ có thể chứa manh mối về nghĩa, âm và quan hệ với cả “gia đình chữ”. Khi thấy cấu trúc, việc nhớ chữ trở nên logic hơn rất nhiều.',
    zh:'情 · 请 · 清 · 晴',
    py:'qíng · qǐng · qīng · qíng',
    vi:'tình cảm · mời/xin · trong/sạch · trời quang',
    points:[
      ['形声字','Bốn chữ đều có 青 làm thành phần gợi âm; phần bên trái thay đổi để gợi trường nghĩa. Đây là một mô hình hình thanh rất điển hình.'],
      ['义符','忄 liên quan tâm/tình cảm → 情; 讠 liên quan lời nói → 请; 氵 liên quan nước → 清; 日 liên quan mặt trời/thời tiết → 晴.'],
      ['不是“拆字故事”','Phân tích cấu tạo nên dựa vào chức năng bộ kiện và lịch sử chữ, không cần bịa câu chuyện chiết tự để nhớ. Hiểu hệ thống sẽ bền hơn mẹo.']
    ]
  },
  grammar:{
    label:'语法 · NGỮ PHÁP',
    title:'Ngữ pháp tiếng Trung không phải “công thức + dịch từng chữ”.',
    desc:'Cùng một chữ có thể đảm nhiệm nhiều chức năng. Học chức năng trong ngữ cảnh giúp bạn tự phán đoán câu mới thay vì phụ thuộc vào một bản dịch Việt cố định.',
    zh:'我吃了饭。／ 下雨了。／ 太好了！',
    py:'wǒ chī le fàn / xià yǔ le / tài hǎo le',
    vi:'Tôi ăn cơm rồi. / Trời mưa rồi. / Tuyệt quá!',
    points:[
      ['动态助词 了','Trong 我吃了饭, 了 đứng sau động từ đánh dấu sự việc được nhìn như đã hoàn tất/trọn vẹn trong ngữ cảnh.'],
      ['句末 了','Trong 下雨了, 了 ở cuối câu thường báo hiệu trạng thái/tình huống mới xuất hiện hoặc có sự thay đổi liên quan hiện tại.'],
      ['别机械翻译','Không nên học 了 = “đã”. Các mẫu như 太好了 hay 快要下雨了 cho thấy chức năng của 了 rộng hơn một từ chỉ quá khứ.']
    ]
  },
  contrast:{
    label:'辨析 · PHÂN BIỆT',
    title:'Hai từ cùng dịch một nghĩa Việt vẫn có thể không thay thế nhau.',
    desc:'Đây là nơi trình độ bắt đầu “lên chất”: phân biệt góc nhìn, văn phong, thời điểm, điều kiện và sắc thái giao tiếp.',
    zh:'我觉得他会来。／ 我认为这个方案可行。',
    py:'wǒ juéde tā huì lái / wǒ rènwéi zhège fāng’àn kěxíng',
    vi:'Tôi cảm thấy/nghĩ anh ấy sẽ đến. / Tôi cho rằng phương án này khả thi.',
    points:[
      ['觉得','Thường thiên về cảm nhận hoặc ý kiến chủ quan, rất phổ biến trong khẩu ngữ: 我觉得有点儿贵。'],
      ['认为','Thiên về nhận định có tính lý trí/chính thức hơn; thường gặp trong thảo luận, lập luận, văn viết: 专家认为……'],
      ['又 vs 再','又 thường nhìn một hành động lặp lại đã xảy ra: 他昨天又迟到了。再 thường hướng tới lần tiếp theo/chưa xảy ra: 明天再说。']
    ]
  },
  sense:{
    label:'语感 · NGỮ CẢM',
    title:'Câu “đúng” chưa chắc đã là câu người bản xứ muốn nói.',
    desc:'Ngữ cảm đến từ việc nhìn rất nhiều mẫu tự nhiên, hiểu collocation và biết chỗ nào tiếng Trung tổ chức ý tưởng khác tiếng Việt.',
    zh:'她很漂亮。／ 今天天气很好。',
    py:'tā hěn piàoliang / jīntiān tiānqì hěn hǎo',
    vi:'Cô ấy đẹp. / Hôm nay thời tiết đẹp.',
    points:[
      ['“很”不总是“rất”','Trong vị ngữ tính từ đơn giản, 很 nhiều khi làm câu tự nhiên/trung tính hơn chứ không nhất thiết nhấn mạnh mức độ “rất”.'],
      ['搭配很重要','Không học mỗi từ 单独. Ví dụ 提高 thường đi với 水平、能力、效率; 增加 thường đi với 数量、收入、机会…'],
      ['话题—说明','Tiếng Trung rất linh hoạt với cấu trúc chủ đề–thuyết minh: 这本书，我看过。 “Cuốn sách này, tôi đã đọc rồi.”']
    ]
  },
  culture:{
    label:'文化 · VĂN HOÁ',
    title:'Ngôn ngữ sống trong quan hệ giữa người với người.',
    desc:'Cùng một câu, nói với bạn bè, giáo viên, khách hàng hay người lớn tuổi sẽ cần mức độ trực tiếp và cách xưng hô khác nhau. Học văn hoá là học cách “đặt câu vào đời sống”.',
    zh:'请问，附近有地铁站吗？',
    py:'qǐngwèn, fùjìn yǒu dìtiě zhàn ma?',
    vi:'Xin hỏi, gần đây có ga tàu điện ngầm không?',
    points:[
      ['礼貌不是只加“请”','Độ lịch sự còn đến từ cách mở lời, modal, ngữ điệu và mức trực tiếp. 请问 là một khung mở lời rất thường dùng khi hỏi người lạ.'],
      ['称呼有关系感','老师、师傅、阿姨、叔叔… không chỉ là “từ vựng”; cách gọi phản ánh quan hệ xã hội và bối cảnh, cần học kèm tình huống.'],
      ['会说也要会听懂','Một câu như “有空再联系” đôi khi đơn giản là lời kết lịch sự; hiểu ý giao tiếp cần nhiều hơn nghĩa từ điển của từng chữ.']
    ]
  }
};

const stage=document.querySelector('#knowledge-stage');
const knowledgeButtons=document.querySelectorAll('.knowledge-tabs button');

function renderKnowledge(key){
  const item=knowledgeData[key];
  if(!stage||!item) return;
  stage.innerHTML=`
    <div class="k-panel">
      <div class="k-lead">
        <small>${item.label}</small>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
      <div class="k-demo">
        <p class="zh">${item.zh}</p>
        <div class="py">${item.py}</div>
        <div class="vi">${item.vi}</div>
        <div class="k-points">
          ${item.points.map(([title,text])=>`<div class="k-point"><b>${title}</b><span>${text}</span></div>`).join('')}
        </div>
      </div>
    </div>`;
}

if(stage){
  renderKnowledge('phonetics');
  knowledgeButtons.forEach(button=>button.addEventListener('click',()=>{
    knowledgeButtons.forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});
    button.classList.add('active');
    button.setAttribute('aria-selected','true');
    renderKnowledge(button.dataset.knowledge);
  }));
}

// Real teacher Facebook contact
const teacherFacebook='https://www.facebook.com/tran.anhvan.18';

const socialStyle=document.createElement('style');
socialStyle.textContent=`
.fb-contact{display:inline-flex;align-items:center;gap:10px;border-radius:999px;padding:14px 20px;background:#1877f2;color:#fff!important;font-size:12px;font-weight:800;box-shadow:0 14px 30px rgba(24,119,242,.18);transition:.25s}.fb-contact:hover{transform:translateY(-2px);box-shadow:0 18px 34px rgba(24,119,242,.26)}
.fb-contact svg{width:18px;height:18px;fill:currentColor}.fb-contact small{font:500 9px var(--serif);opacity:.76}.hero-facebook{margin-top:14px}.hero-facebook .fb-contact{padding:11px 16px;background:#fff;color:#1877f2!important;border:1px solid rgba(24,119,242,.18)}
.cta-facebook{margin-top:12px;width:100%;justify-content:center}.floating-facebook{position:fixed;right:22px;bottom:22px;z-index:90;width:58px;height:58px;border-radius:50%;display:grid;place-items:center;background:#1877f2;color:#fff;box-shadow:0 16px 36px rgba(24,119,242,.3);transition:.25s}.floating-facebook:hover{transform:translateY(-3px) scale(1.03)}.floating-facebook svg{width:25px;height:25px;fill:currentColor}.floating-facebook:before{content:'Facebook · 联系老师';position:absolute;right:68px;white-space:nowrap;background:#102b28;color:#fff;border-radius:999px;padding:8px 12px;font-size:9px;font-weight:700;opacity:0;transform:translateX(8px);pointer-events:none;transition:.2s}.floating-facebook:hover:before{opacity:1;transform:none}
@media(max-width:680px){.hero-facebook{display:flex;justify-content:center}.floating-facebook{width:52px;height:52px;right:14px;bottom:14px}.floating-facebook:before{display:none}}
`;
document.head.appendChild(socialStyle);

const fbIcon=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8.5V6.7c0-.8.5-1 1-1h2.6V2.1L14.4 2C11.2 2 10 3.9 10 6.3v2.2H7v4h3V22h4v-9.5h3.3l.5-4H14z"/></svg>`;

const heroActions=document.querySelector('.hero .actions');
if(heroActions){
  const heroFb=document.createElement('div');
  heroFb.className='hero-facebook';
  heroFb.innerHTML=`<a class="fb-contact" href="${teacherFacebook}" target="_blank" rel="noopener noreferrer">${fbIcon}<span>Facebook giáo viên<br><small>联系老师 · Xem trang cá nhân</small></span></a>`;
  heroActions.insertAdjacentElement('afterend',heroFb);
}

const ctaAside=document.querySelector('.cta aside');
if(ctaAside){
  const directFb=document.createElement('a');
  directFb.className='fb-contact cta-facebook';
  directFb.href=teacherFacebook;
  directFb.target='_blank';
  directFb.rel='noopener noreferrer';
  directFb.innerHTML=`${fbIcon}<span>Liên hệ qua Facebook · 通过 Facebook 联系老师</span>`;
  const copyBtn=ctaAside.querySelector('.copy-msg');
  if(copyBtn) copyBtn.insertAdjacentElement('afterend',directFb); else ctaAside.appendChild(directFb);
}

const floatingFb=document.createElement('a');
floatingFb.className='floating-facebook';
floatingFb.href=teacherFacebook;
floatingFb.target='_blank';
floatingFb.rel='noopener noreferrer';
floatingFb.setAttribute('aria-label','Facebook giáo viên · 联系老师');
floatingFb.innerHTML=fbIcon;
document.body.appendChild(floatingFb);
