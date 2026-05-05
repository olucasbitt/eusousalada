import { Show, Video } from './types';

export const SHOWS: Show[] = [
  {
    id: '1',
    city: 'Viamão',
    state: 'RS',
    venue: 'Macanudo Rex',
    date: '28/04/2026',
    time: '20:00',
    ticketUrl: 'https://www.sympla.com.br/evento/salada-apresenta-so-tendel-stand-up-comedy/3371756',
   
  },
  {
    id: '2',
    city: 'Dois Irmãos',
    state: 'RS',
    venue: 'Teatro Adriano Schenkel',
    date: '16/05/2026',
    time: '20:00',
    ticketUrl: 'https://www.sympla.com.br/evento/salada-apresenta-so-tendel-stand-up-comedy/3352086',
	highlight: true, 
 },
 
];

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/eusouosalada/',
  youtube: 'https://youtube.com/@eusouosalada',
  tiktok: 'https://tiktok.com/@eusouosalada',
  whatsapp: 'https://wa.me/5551999999999',
};

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Uma palinha do Show AO VIVO',
    thumbnail: '/thumbs/sotendel.jpg',
    videoPath: '/videos/sotendel.mp4',
    url: 'https://www.instagram.com/reel/DXuyaryEQBq/?igsh=MXY0d2gzNzBqanV2bQ==',
    views: '1.2M',
  },
  {
    id: 'v2',
    title: 'Véia do bailão 😂',
    thumbnail: '/thumbs/veiadobailao.jpg',
    videoPath: '/videos/veiadobailao.mp4',
    url: 'https://www.instagram.com/reel/DNig8-Ju8lO/?igsh=dWFwMXE3em5mMDBp',
    views: '800K',
  },
];