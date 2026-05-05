export interface Show {
  id: string;
  city: string;
  state: string;
  venue: string;
  date: string;
  time: string;
  ticketUrl: string;
  soldOut?: boolean;
  highlight?: boolean;
}

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  url: string;
  videoPath: string;
}
