
export const SECTION_VIDEOS = {
  hero: 1,
  about: 2,
  services: 3,
  founders: 4,
  story: 5,
  buy: 6,
  sell: 7,
  rent: 8,
  contact: 9,
  footer: 10
};

export const getVideoPath = (num: number) => `/assets/dynamic/${num}.mp4`;
