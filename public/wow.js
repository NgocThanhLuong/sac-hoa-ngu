(() => {
  const facebook='https://www.facebook.com/tran.anhvan.18';
  const anchor=document.querySelector('.contrast-section') || document.querySelector('.masterclass') || document.querySelector('.paths');
  if(!anchor || document.querySelector('#wow-lab')) return;

  const section=document.createElement('section');
  section.id='wow-lab';
  section.className='wow-lab section';
  section.innerHTML=`
    <div class="wow-watermark" aria-hidden="true">悟</div>
    <div class="container wow-shell">
      <div class="wow-heading wow-reveal">
        <div class="title">
          <span>SPECIAL · 互动体验区 · TRẢI NGHIỆM THỬ NGAY TRÊN WEB</span>
          <h2>Đừng chỉ đọc về cách dạy.<br><em>Hãy học thử ngay 3 phút.</em></h2>
        </div>
        <div class="wow-heading-copy">
          <p class="zh-lead">真正的专业，不是把中文讲得复杂，<br>而是把复杂的中文讲得明白。</p>
          <p>4 trải nghiệm dưới đây mô phỏng cách Sắc Hoa Ngữ đi từ “đáp án” đến ngữ cảm, cấu trúc và cách dùng thật.</p>
          <div class="wow-progress"><div class="wow-progress-track"><div class="wow-progress-fill"></div></div><span class="wow-progress-label">0 / 4 已探索</span></div>
        </div>
      </div>

      <div class="wow-stack">
        <article class="wow-module wow-reveal" data-wow-module="sense">
          <div class="wow-module-head"><span class="wow-module-no">感</span><div><small>CHINESE SENSE TEST · 中文语感测试</small><h3>Câu nào người Trung sẽ chọn? <span>· 哪一句更自然？</span></h3></div><span class="wow-badge">CLICK TO PLAY</span></div>
          <div class="wow-module-body"><div class="sense-layout"><div class="sense-prompt" id="sense-prompt"></div><div class="sense-game" id="sense-game"></div></div></div>
        </article>

        <article class="wow-module wow-reveal" data-wow-module="levels">
          <div class="wow-module-head"><span class="wow-module-no">阶</span><div><small>ONE IDEA · FIVE LEVELS · 一句话五种层次</small><h3>Cùng một ý, càng học sâu càng biểu đạt “có chất”. <span>· 从会说到会表达</span></h3></div><span class="wow-badge">5 LEVELS</span></div>
          <div class="wow-module-body"><div class="levels-layout"><div class="levels-intro"><small>Ý GỐC · 原意</small><div class="seed">“Hôm nay tôi mệt.”</div><div class="seed-py">同一个意思，可以说出不同层次。</div><p>Không phải “câu càng dài càng giỏi”. Điểm khác biệt nằm ở cấu trúc, sắc thái và khả năng chọn cách nói đúng với cảm xúc.</p></div><div><div class="level-tabs" id="level-tabs"></div><div class="level-stage" id="level-stage" data-level="1"></div></div></div></div>
        </article>

        <article class="wow-module wow-reveal" data-wow-module="pitfalls">
          <div class="wow-module-head"><span class="wow-module-no">坑</span><div><small>VIETNAMESE LEARNER TRAPS · 越南学习者常见坑</small><h3>Không phải cứ dịch đúng từng từ là ra tiếng Trung đúng. <span>· 别把越南语直接搬进中文</span></h3></div><span class="wow-badge">AVOID THE TRAPS</span></div>
          <div class="wow-module-body"><div class="pitfall-filter" id="pitfall-filter"></div><div class="pitfall-grid" id="pitfall-grid"></div></div>
        </article>

        <article class="wow-module wow-reveal" data-wow-module="xray">
          <div class="wow-module-head"><span class="wow-module-no">字</span><div><small>HANZI X-RAY · 汉字透视镜</small><h3>Nhìn xuyên cấu trúc một chữ Hán. <span>· 看见偏旁、声旁和构字逻辑</span></h3></div><span class="wow-badge">TAP A CHARACTER</span></div>
          <div class="wow-module-body"><div class="xray-layout"><div class="xray-characters" id="xray-characters"></div><div class="xray-stage" id="xray-stage"></div></div></div>
        </article>
      </div>

      <div class="wow-finish wow-reveal" id="wow-finish">
        <div><small>学到了吗？ · BẠN VỪA HỌC ĐƯỢC GÌ ĐÓ RỒI ĐẤY</small><h3>Website mới chỉ là 3 phút. Một buổi học thật còn đi sâu hơn.</h3><p>如果你喜欢这种“讲清楚、讲透、马上会用”的方式，就来试一节课。 · Nếu bạn thích cách học “hiểu rõ – hiểu sâu – dùng ngay”, hãy thử một buổi.</p></div>
        <a class="btn" href="${facebook}" target="_blank" rel="noopener noreferrer">Nhắn cô giáo · 联系老师 →</a>
      </div>
    </div>`;

  if(anchor.classList.contains('paths')) anchor.insertAdjacentElement('beforebegin',section);
  else anchor.insertAdjacentElement('afterend',section);

  const completed=new Set();
  const fill=section.querySelector('.wow-progress-fill');
  const label=section.querySelector('.wow-progress-label');
  const finish=section.querySelector('#wow-finish');
  function markComplete(key){
    if(completed.has(key)) return;
    completed.add(key);
    const count=completed.size;
    fill.style.width=`${count*25}%`;
    label.textContent=`${count} / 4 已探索`;
    const module=section.querySelector(`[data-wow-module="${key}"]`);
    if(module) module.querySelector('.wow-badge').textContent='✓ 已探索';
    if(count===4){finish.classList.add('wow-complete-pop');setTimeout(()=>finish.classList.remove('wow-complete-pop'),650)}
  }

  // 1) Chinese Sense Test
  const senseQuestions=[
    {ctx:'事情已经发生了：昨天他……迟到了。',vi:'Sự việc đã xảy ra: Hôm qua anh ấy lại đến muộn.',q:'“Lại” ở đây chọn từ nào?',options:[['他昨天又迟到了。','tā zuótiān yòu chídào le'],['他昨天再迟到了。','tā zuótiān zài chídào le']],correct:0,why:'又 thường nhìn vào một lần lặp lại đã xảy ra. 再 thường hướng tới lần tiếp theo hoặc việc chưa xảy ra. → 昨天 + 已发生，所以用“又”。'},
    {ctx:'今天先到这里，我们……谈。',vi:'Hôm nay dừng ở đây, ngày mai chúng ta nói tiếp.',q:'Một hành động sẽ tiếp tục trong tương lai?',options:[['我们明天又谈。','wǒmen míngtiān yòu tán'],['我们明天再谈。','wǒmen míngtiān zài tán']],correct:1,why:'再 rất tự nhiên khi nói “lần sau / rồi sẽ làm tiếp”: 明天再谈、下次再说. 又 trong ngữ cảnh này dễ gợi việc đã lặp lại hoặc thái độ khác.'},
    {ctx:'这道菜对我来说……',vi:'Món này với tôi hơi cay — và tôi thấy mức cay đó hơi quá.',q:'Cách nào thể hiện sắc thái “hơi… (không như ý)”?',options:[['这道菜有点儿辣。','zhè dào cài yǒudiǎnr là'],['这道菜辣一点儿。','zhè dào cài là yìdiǎnr']],correct:0,why:'有点儿 + tính từ thường mang sắc thái nhẹ, hay đi với điều chưa thật vừa ý: 有点儿贵、累、冷. “辣一点儿” thường là “cay hơn một chút” hoặc yêu cầu tăng mức cay.'},
    {ctx:'你在博物馆想先确认规则。',vi:'Bạn ở bảo tàng và muốn hỏi có được phép chụp ảnh không.',q:'Hỏi về sự cho phép, dùng gì?',options:[['这里会拍照吗？','zhèlǐ huì pāizhào ma'],['这里可以拍照吗？','zhèlǐ kěyǐ pāizhào ma']],correct:1,why:'可以 rất thường dùng để hỏi sự cho phép/điều kiện: 可以拍照吗？ 会 chủ yếu liên quan kỹ năng/khả năng học được hoặc khả năng xảy ra tùy ngữ cảnh.'}
  ];
  let senseIndex=0,senseScore=0,answered=false;
  const sensePrompt=section.querySelector('#sense-prompt');
  const senseGame=section.querySelector('#sense-game');
  function renderSense(){
    answered=false;
    const s=senseQuestions[senseIndex];
    sensePrompt.innerHTML=`<span class="sense-round">${senseIndex+1} / ${senseQuestions.length}</span><small>语境 · NGỮ CẢNH</small><p class="sense-context">${s.ctx}</p><p class="sense-context-vi">${s.vi}</p>`;
    senseGame.innerHTML=`<p class="sense-question">${s.q}</p><div class="sense-options">${s.options.map((o,i)=>`<button class="sense-option" data-choice="${i}"><span class="zh">${o[0]}</span><span class="py">${o[1]}</span></button>`).join('')}</div><div class="sense-explain"><strong></strong><p></p></div><div style="display:flex;align-items:center"><span class="sense-score">Điểm · 得分 ${senseScore}/${senseQuestions.length}</span><button class="sense-next" type="button">Câu tiếp · 下一题 →</button></div>`;
    senseGame.querySelector('.sense-next').style.visibility='hidden';
    senseGame.querySelectorAll('.sense-option').forEach(btn=>btn.addEventListener('click',()=>chooseSense(Number(btn.dataset.choice))));
    senseGame.querySelector('.sense-next').addEventListener('click',()=>{senseIndex=(senseIndex+1)%senseQuestions.length;renderSense()});
  }
  function chooseSense(choice){
    if(answered) return; answered=true;
    const s=senseQuestions[senseIndex];
    const opts=[...senseGame.querySelectorAll('.sense-option')];
    opts.forEach((b,i)=>b.classList.add(i===s.correct?'correct':i===choice?'wrong':'dim'));
    if(choice===s.correct) senseScore++;
    const exp=senseGame.querySelector('.sense-explain');
    exp.querySelector('strong').textContent=choice===s.correct?'✓ 对了 · Chính xác':'✦ 差一点 · Gần đúng rồi';
    exp.querySelector('p').textContent=s.why; exp.classList.add('show');
    senseGame.querySelector('.sense-score').textContent=`Điểm · 得分 ${senseScore}/${senseQuestions.length}`;
    senseGame.querySelector('.sense-next').style.visibility='visible';
    markComplete('sense');
  }
  renderSense();

  // 2) One idea, five levels
  const levels=[
    {n:'1',name:'基础',vn:'Cơ bản',zh:'我很累。',py:'wǒ hěn lèi',vi:'Tôi mệt.',note:'Câu nền tảng, rõ và tự nhiên. 很 ở đây không nhất thiết phải nhấn mạnh thành “rất”; nó thường giúp vị ngữ tính từ nghe trung tính hơn.'},
    {n:'2',name:'细腻',vn:'Tinh hơn',zh:'我今天有点儿累。',py:'wǒ jīntiān yǒudiǎnr lèi',vi:'Hôm nay tôi hơi mệt.',note:'Thêm 有点儿 để tạo mức độ nhẹ và sắc thái cảm nhận chủ quan — một bước từ “nói đúng” sang “nói đúng cảm giác”.'},
    {n:'3',name:'结果',vn:'Có kết quả',zh:'我累得不想动。',py:'wǒ lèi de bù xiǎng dòng',vi:'Tôi mệt đến mức chẳng muốn cử động.',note:'Cấu trúc tính từ/động từ + 得 + kết quả/mức độ giúp bạn mô tả “mệt đến mức nào”, thay vì chỉ tăng cường độ bằng 很、非常.'},
    {n:'4',name:'强调',vn:'Nhấn mạnh',zh:'今天真把我累坏了。',py:'jīntiān zhēn bǎ wǒ lèi huài le',vi:'Hôm nay đúng là làm tôi mệt rã rời.',note:'把 + tân ngữ + kết quả làm nổi bật tác động lên “tôi”; 累坏了 là cách nói giàu cảm xúc hơn trong khẩu ngữ.'},
    {n:'5',name:'语感',vn:'Biểu đạt',zh:'我今天累到连话都不想说了。',py:'wǒ jīntiān lèi dào lián huà dōu bù xiǎng shuō le',vi:'Hôm nay tôi mệt đến mức ngay cả nói cũng chẳng muốn nói nữa.',note:'累到… + 连…都… tạo một bức tranh cảm xúc cụ thể. Đây không phải “câu dài để khoe”, mà là biết chọn cấu trúc để biểu đạt đúng mức độ.'}
  ];
  const levelTabs=section.querySelector('#level-tabs');
  const levelStage=section.querySelector('#level-stage');
  function renderLevel(index){
    const l=levels[index];
    levelTabs.querySelectorAll('button').forEach((b,i)=>b.classList.toggle('active',i===index));
    levelStage.dataset.level=l.n;
    levelStage.innerHTML=`<span class="level-label">LEVEL ${l.n} · ${l.name} · ${l.vn}</span><div class="level-zh">${l.zh}</div><div class="level-py">${l.py}</div><div class="level-vi">${l.vi}</div><div class="level-note">老师拆解 · Phân tích: ${l.note}</div>`;
    if(index>0) markComplete('levels');
  }
  levelTabs.innerHTML=levels.map((l,i)=>`<button type="button" class="level-tab ${i===0?'active':''}" data-level="${i}"><b>${l.n}</b>${l.vn}</button>`).join('');
  levelTabs.querySelectorAll('.level-tab').forEach(b=>b.addEventListener('click',()=>renderLevel(Number(b.dataset.level))));
  renderLevel(0);

  // 3) Common traps for Vietnamese learners
  const pitfalls=[
    {cat:'grammar',tag:'TÍNH TỪ · 形容词谓语',wrong:'我是很累。',right:'我很累。',why:'Trong câu trung tính “Tôi mệt”, tính từ có thể trực tiếp làm vị ngữ; không cần 是 như “to be” trong tiếng Anh.',nuance:'Nhưng 是很累 có thể xuất hiện khi nhấn mạnh/đối lập: 我是很累，但是我还能坚持。'},
    {cat:'link',tag:'“VÀ” · 和',wrong:'我去北京和看朋友。',right:'我去北京看朋友。',why:'和 chủ yếu nối danh từ/cụm danh từ. Đừng bê “và” của tiếng Việt vào giữa hai hành động một cách máy móc.',nuance:'Nếu là hai sự việc song song: 我去了北京，也见了朋友。'},
    {cat:'order',tag:'TRẬT TỰ · 语序',wrong:'我学中文每天。',right:'我每天学中文。',why:'Thành phần thời gian thường đứng trước động từ/vị ngữ: 我 + 每天 + 学中文.',nuance:'时间地点先搭舞台，再说动作：我每天在家学中文。'},
    {cat:'words',tag:'LƯỢNG TỪ · 量词',wrong:'三书',right:'三本书',why:'Số từ thường không đứng thẳng trước danh từ đếm được: 数词 + 量词 + 名词.',nuance:'书 thường đi với 本; người → 个/位, cốc → 杯, chiếc xe → 辆.'},
    {cat:'meaning',tag:'“了 = ĐÃ?” · 语法功能',wrong:'了 = “đã”',right:'快下雨了。',why:'了 không phải một từ quá khứ cố định. Ở cuối 快下雨了, nó báo một tình huống mới/sắp thay đổi: “Sắp mưa rồi”.',nuance:'Học 了 theo chức năng và vị trí, không theo một nghĩa Việt duy nhất.'},
    {cat:'meaning',tag:'“很 = RẤT?” · 语感',wrong:'很 luôn = “rất”',right:'她很漂亮。',why:'Trong vị ngữ tính từ trung tính, 很 nhiều khi không cần dịch thành “rất”. Câu có thể đơn giản là “Cô ấy đẹp”.',nuance:'Muốn nhấn mạnh mạnh hơn có thể dùng 非常、特别、真… tùy ngữ cảnh.'}
  ];
  const filters=[['all','Tất cả · 全部'],['grammar','Ngữ pháp · 语法'],['order','Trật tự · 语序'],['meaning','Ngữ cảm · 语感'],['words','Từ & lượng · 词语'],['link','Liên kết · 连接']];
  const filterRoot=section.querySelector('#pitfall-filter');
  const pitfallGrid=section.querySelector('#pitfall-grid');
  function renderPitfalls(cat='all'){
    const list=cat==='all'?pitfalls:pitfalls.filter(p=>p.cat===cat);
    pitfallGrid.innerHTML=list.map(p=>`<article class="pitfall-card"><span class="pitfall-tag">${p.tag}</span><div class="pitfall-wrong"><small>✕ DỄ DỊCH MÁY · 直译陷阱</small><b>${p.wrong}</b></div><div class="pitfall-right"><small>✓ TƯ DUY TIẾNG TRUNG · 中文表达</small><b>${p.right}</b></div><p>${p.why}</p><p class="pitfall-nuance">↳ ${p.nuance}</p></article>`).join('');
  }
  filterRoot.innerHTML=filters.map((f,i)=>`<button type="button" class="${i===0?'active':''}" data-filter="${f[0]}">${f[1]}</button>`).join('');
  filterRoot.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{filterRoot.querySelectorAll('button').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderPitfalls(b.dataset.filter);markComplete('pitfalls')}));
  renderPitfalls();

  // 4) Hanzi X-Ray
  const xrayData={
    '休':{py:'xiū',type:'会意 · hội ý',title:'休 · nghỉ ngơi',parts:[['亻','người · 人'],['木','cây · 树木']],desc:'Trong cách phân tích truyền thống, 人 bên cạnh 木 tạo hình ảnh “người dựa/nghỉ bên cây”, gợi nghĩa nghỉ ngơi. Đây là ví dụ dễ thấy về cách thành phần cùng góp nghĩa.',note:'Học cấu tạo để thấy logic, nhưng không nên biến mọi chữ thành một “câu chuyện chiết tự” tùy ý.'},
    '信':{py:'xìn',type:'会意 · hội ý',title:'信 · tin, thư',parts:[['亻','người · 人'],['言','lời nói · 话语']],desc:'Cấu trúc 人 + 言 được truyền thống giải thích gắn với lời nói đáng tin, từ đó liên hệ tới “tin, tín”. Trong tiếng hiện đại, 信 còn là “thư”: 一封信.',note:'Một chữ có thể mở rộng nghĩa qua lịch sử sử dụng; đừng chỉ nhớ một nghĩa Việt.'},
    '情':{py:'qíng',type:'形声字 · hình thanh',title:'情 · tình cảm, tình hình',parts:[['忄','gợi nghĩa: tâm/cảm xúc'],['青','gợi âm: qīng/qíng']],desc:'忄 là thành phần gợi trường nghĩa liên quan tâm lý/cảm xúc; 青 chủ yếu làm phần gợi âm. Đây là mô hình hình thanh cực phổ biến trong chữ Hán.',note:'Thấy 青, bạn có thể liên hệ cả “gia đình âm”: 情、晴、清、请… nhưng thanh điệu/âm hiện đại không hoàn toàn giống nhau.'},
    '清':{py:'qīng',type:'形声字 · hình thanh',title:'清 · trong, sạch',parts:[['氵','gợi nghĩa: nước'],['青','gợi âm: qīng']],desc:'氵 hướng người đọc tới trường nghĩa liên quan nước/chất lỏng; 青 gợi âm. Từ 清 phát triển nhiều kết hợp: 清楚、清水、清洁、看清楚.',note:'Học chữ cùng collocation sẽ mạnh hơn chỉ học “清 = trong”.'},
    '请':{py:'qǐng',type:'形声字 · hình thanh',title:'请 · mời, xin, vui lòng',parts:[['讠','gợi nghĩa: lời nói'],['青','gợi âm gần']],desc:'讠 liên quan lời nói/ngôn ngữ; 青 đóng vai trò gợi âm. Từ 请 xuất hiện trong nhiều hành vi giao tiếp lịch sự: 请问、请坐、请进.',note:'Bộ kiện cho manh mối, còn cách dùng thật phải học trong ngữ cảnh.'},
    '晴':{py:'qíng',type:'形声字 · hình thanh',title:'晴 · trời quang',parts:[['日','gợi nghĩa: mặt trời/thời tiết'],['青','gợi âm: qīng/qíng']],desc:'日 hướng tới trường nghĩa ánh sáng/thời tiết; 青 gợi âm. 晴 thường gặp trong 晴天、晴朗，与 阴、雨 tạo mạng từ vựng thời tiết.',note:'情 qíng và 晴 qíng đồng âm hiện đại, nhưng bộ kiện giúp phân biệt nghĩa ngay bằng mắt.'}
  };
  const xChars=section.querySelector('#xray-characters');
  const xStage=section.querySelector('#xray-stage');
  function renderXray(ch){
    const x=xrayData[ch];
    xChars.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b.dataset.char===ch));
    xStage.innerHTML=`<div class="xray-big"><div class="xray-big-char">${ch}</div><div class="xray-py">${x.py}</div></div><div class="xray-detail"><span class="xray-type">${x.type}</span><h4>${x.title}</h4><div class="xray-parts">${x.parts.map((p,i)=>`${i?'<span class="xray-plus">+</span>':''}<span class="xray-part"><b>${p[0]}</b><small>${p[1]}</small></span>`).join('')}</div><p>${x.desc}</p><p class="xray-note">老师提醒 · Lưu ý: ${x.note}</p></div>`;
  }
  xChars.innerHTML=Object.keys(xrayData).map((ch,i)=>`<button type="button" class="xray-char ${i===0?'active':''}" data-char="${ch}">${ch}</button>`).join('');
  xChars.querySelectorAll('button').forEach(b=>b.addEventListener('click',()=>{renderXray(b.dataset.char);markComplete('xray')}));
  renderXray('休');

  // Observe dynamically inserted blocks.
  if('IntersectionObserver' in window){
    const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
    section.querySelectorAll('.wow-reveal').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .65s ease, transform .65s ease';obs.observe(el)});
    const style=document.createElement('style');style.textContent='.wow-reveal.visible{opacity:1!important;transform:none!important}@media(prefers-reduced-motion:reduce){.wow-reveal{opacity:1!important;transform:none!important}}';document.head.appendChild(style);
  }
})();
