export interface HeroModel {
  id: string,
  nickname: string,
  real_name: string,
  origin_description: string,
  superpowers: string,
  catch_phrase: string,
  main_image?: string,
  images?: string[],
}