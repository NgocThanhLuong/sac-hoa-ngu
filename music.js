(()=>{
  const TRACK={
    title:'Piano Refreshing',
    subtitle:'钢琴 · Piano solo',
    artist:'PeriTune',
    license:'CC BY 3.0',
    commons:'https://commons.wikimedia.org/wiki/File:%E3%80%90%E7%84%A1%E6%96%99%E3%83%95%E3%83%AA%E3%83%BCBGM%E3%80%91%E7%88%BD%E3%82%84%E3%81%8B%E3%81%AA%E3%83%94%E3%82%A2%E3%83%8E%E3%82%BD%E3%83%AD%E3%80%8CPiano_Refreshing%E3%80%8D.opus',
    mp3:'https://upload.wikimedia.org/wikipedia/commons/transcoded/9/93/%E3%80%90%E7%84%A1%E6%96%99%E3%83%95%E3%83%AA%E3%83%BCBGM%E3%80%91%E7%88%BD%E3%82%84%E3%81%8B%E3%81%AA%E3%83%94%E3%82%A2%E3%83%8E%E3%82%BD%E3%83%AD%E3%80%8CPiano_Refreshing%E3%80%8D.opus/%E3%80%90%E7%84%A1%E6%96%99%E3%83%95%E3%83%AA%E3%83%BCBGM%E3%80%91%E7%88%BD%E3%82%84%E3%81%8B%E3%81%AA%E3%83%94%E3%82%A2%E3%83%8E%E3%82%BD%E3%83%AD%E3%80%8CPiano_Refreshing%E3%80%8D.opus.mp3',
    ogg:'https://upload.wikimedia.org/wikipedia/commons/9/93/%E3%80%90%E7%84%A1%E6%96%99%E3%83%95%E3%83%AA%E3%83%BCBGM%E3%80%91%E7%88%BD%E3%82%84%E3%81%8B%E3%81%AA%E3%83%94%E3%82%A2%E3%83%8E%E3%82%BD%E3%83%AD%E3%80%8CPiano_Refreshing%E3%80%8D.opus'
  };
  const KEY='sac-hoa-ngu-music';
  const prefersReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const mobile=window.matchMedia('(max-width: 680px)').matches;
  const targetVolume=mobile?0.045:0.07;
  let desired=localStorage.getItem(KEY)!=='off', activated=false, fading=0;

  const style=document.createElement('style');
  style.textContent=`
    .music-dock{position:fixed;left:20px;bottom:20px;z-index:91;display:flex;align-items:center;gap:10px;padding:8px 12px 8px 8px;border:1px solid rgba(255,255,255,.72);border-radius:999px;background:rgba(255,250,241,.9);backdrop-filter:blur(18px);box-shadow:0 16px 36px rgba(20,61,55,.16);color:#143d37;cursor:pointer;transition:.25s;user-select:none}
    .music-dock:hover{transform:translateY(-2px);box-shadow:0 20px 42px rgba(20,61,55,.2)}
    .music-disc{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:#143d37;color:#fff;position:relative;overflow:hidden}
    .music-disc:before{content:'';position:absolute;inset:6px;border:1px solid rgba(255,255,255,.22);border-radius:50%}
    .music-disc:after{content:'';width:5px;height:5px;border-radius:50%;background:#efc978;position:absolute}
    .music-note{font-size:14px;position:relative;z-index:1}.music-copy{display:flex;flex-direction:column;line-height:1.1;min-width:122px}
    .music-copy b{font:700 12px 'Noto Serif SC',serif}.music-copy small{font-size:8px;letter-spacing:.04em;opacity:.58;margin-top:4px}
    .music-bars{display:flex;align-items:center;gap:2px;height:16px;margin-left:2px}.music-bars i{display:block;width:2px;border-radius:4px;background:#b84739;height:4px}
    .music-dock.playing .music-bars i{animation:musicBar .85s ease-in-out infinite alternate}.music-dock.playing .music-bars i:nth-child(2){animation-delay:.18s}.music-dock.playing .music-bars i:nth-child(3){animation-delay:.35s}.music-dock.playing .music-disc{animation:musicSpin 9s linear infinite}
    .music-dock.muted .music-copy small:after{content:' · 已静音';color:#b84739}.music-credit{display:block;margin-top:9px;font-size:8px!important;opacity:.48!important;text-decoration:none}.music-credit:hover{opacity:.8!important}
    .music-toast{position:fixed;left:22px;bottom:82px;z-index:92;background:#143d37;color:#fff;border-radius:14px;padding:10px 13px;font-size:9px;box-shadow:0 14px 32px rgba(20,61,55,.2);opacity:0;transform:translateY(8px);pointer-events:none;transition:.25s}.music-toast.show{opacity:1;transform:none}
    @keyframes musicSpin{to{transform:rotate(360deg)}}@keyframes musicBar{from{height:4px}to{height:15px}}
    @media(max-width:680px){.music-dock{left:12px;bottom:12px;padding:6px 9px 6px 6px}.music-disc{width:34px;height:34px}.music-copy{min-width:0}.music-copy b{font-size:11px}.music-copy small,.music-bars{display:none}.music-toast{left:12px;bottom:62px}}
    @media(prefers-reduced-motion:reduce){.music-dock.playing .music-bars i,.music-dock.playing .music-disc{animation:none}}
  `;
  document.head.appendChild(style);

  const audio=document.createElement('audio');
  audio.id='sac-hoa-ngu-bgm';audio.loop=true;audio.preload='metadata';audio.setAttribute('playsinline','');
  audio.innerHTML=`<source src="${TRACK.mp3}" type="audio/mpeg"><source src="${TRACK.ogg}" type="audio/ogg">`;
  audio.volume=0;document.body.appendChild(audio);

  const dock=document.createElement('button');
  dock.type='button';dock.className='music-dock muted';dock.setAttribute('aria-pressed','false');
  dock.innerHTML='<span class="music-disc"><span class="music-note">♪</span></span><span class="music-copy"><b>清风 · Piano</b><small>钢琴 · Background ambience</small></span><span class="music-bars"><i></i><i></i><i></i></span>';
  document.body.appendChild(dock);

  const toast=document.createElement('div');toast.className='music-toast';toast.textContent='♪ Piano nhẹ đang phát · 轻柔钢琴';document.body.appendChild(toast);

  const footer=document.querySelector('footer .copyright');
  if(footer){
    const credit=document.createElement('a');credit.className='music-credit';credit.href=TRACK.commons;credit.target='_blank';credit.rel='noopener noreferrer';
    credit.textContent=`音乐 · Music: ${TRACK.title} — ${TRACK.artist} · ${TRACK.license}`;footer.appendChild(credit);
  }

  function fadeTo(value,duration=650){
    cancelAnimationFrame(fading);const start=audio.volume,t0=performance.now();
    const step=now=>{const p=Math.min(1,(now-t0)/duration),eased=1-Math.pow(1-p,3);audio.volume=Math.max(0,Math.min(1,start+(value-start)*eased));if(p<1)fading=requestAnimationFrame(step);else if(value===0&&!desired)audio.pause()};
    if(prefersReduced){audio.volume=value;if(value===0&&!desired)audio.pause();return}fading=requestAnimationFrame(step);
  }
  function syncUI(){const playing=!audio.paused&&desired;dock.classList.toggle('playing',playing);dock.classList.toggle('muted',!desired);dock.setAttribute('aria-pressed',String(playing));dock.setAttribute('aria-label',desired?'Tắt nhạc nền · 关闭背景音乐':'Bật nhạc nền · 开启背景音乐')}
  async function start(showToast=false){desired=true;localStorage.setItem(KEY,'on');try{await audio.play();activated=true;fadeTo(targetVolume,1000);syncUI();if(showToast){toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200)}}catch(e){syncUI()}}
  function stop(){desired=false;localStorage.setItem(KEY,'off');fadeTo(0,450);setTimeout(()=>{if(!desired)audio.pause();syncUI()},480);syncUI()}

  dock.addEventListener('click',e=>{e.stopPropagation();if(desired&&!audio.paused)stop();else start(true)});
  const firstGesture=e=>{if(e.target?.closest?.('.music-dock'))return;if(desired&&!activated)start(false);window.removeEventListener('pointerdown',firstGesture,true);window.removeEventListener('keydown',firstGesture,true)};
  window.addEventListener('pointerdown',firstGesture,true);window.addEventListener('keydown',firstGesture,true);

  document.addEventListener('visibilitychange',()=>{if(document.hidden){if(!audio.paused)fadeTo(0,300);setTimeout(()=>audio.pause(),330)}else if(desired&&activated){audio.play().then(()=>fadeTo(targetVolume,650)).catch(()=>{})}syncUI()});
  audio.addEventListener('play',syncUI);audio.addEventListener('pause',syncUI);audio.addEventListener('error',()=>{dock.classList.add('muted');dock.title='Không tải được nhạc nền · 背景音乐加载失败'});syncUI();
})();