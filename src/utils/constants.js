export const LOGO="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_LOGIN="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/bbfea491-8423-467c-bd2c-0502b97b76ea/AE-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const USER_AVATAR="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp";

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer'+process.env.REACT_APP_TMDB_KEY
    }
  };
  export const IMAGE_CDN_URL="https://image.tmdb.org/t/p/w500/";
  export const SUPPORTED_LANGUAGES = [
    { identifier: "english", name: "English" },
    { identifier: "hindi", name: "Hindi" },
    { identifier: "tamil", name: "Tamil" },
    ];
  export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY