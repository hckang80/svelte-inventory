// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }

  declare const __QUALITY__: number;

  declare module '*as-picture' {
    const imgMeta: ImgMeta;
    export default imgMeta;
  }

  declare module '*&imagetools' {
    const imgMeta: ImgMeta;
    export default imgMeta;
  }
}

export {};
