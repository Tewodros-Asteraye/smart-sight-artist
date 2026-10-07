import { media } from '@/lib/media';
import video from '@/assets/savanna.mp4.asset.json';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function HeroMedia(){
 const ref=useRef<HTMLVideoElement>(null);
 const [ready,setReady]=useState(false);
 const [playing,setPlaying]=useState(false);
 useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const el=ref.current;if(el)el.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false))},[]);
 return <><img className="hero-media" src={media.landscape.url} alt="Lush agricultural landscape in Malawi" fetchPriority="high"/><video ref={ref} className={`hero-media ${ready?'opacity-100':'opacity-0'}`} src={video.url} muted loop playsInline preload="metadata" aria-label="Aerial stock footage of savanna landscape" onPlaying={()=>{setReady(true);setPlaying(true)}} onError={()=>{setReady(false);setPlaying(false)}}/><div className="absolute bottom-20 right-6 md:right-14"><Button variant="inverse" size="icon" aria-label={playing?'Pause landscape video':'Play landscape video'} title={playing?'Pause landscape video':'Play landscape video'} onClick={()=>{const el=ref.current;if(!el)return;if(playing){el.pause();setPlaying(false)}else{el.play().then(()=>setPlaying(true)).catch(()=>setPlaying(false))}}>{playing?<Pause/>:<Play/>}</Button></div></>
}
