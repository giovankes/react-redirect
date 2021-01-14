 const backend = "https://link.test/wp";
 const frontend = "https://frontend.glamrock.test";
 
 export const hikeConfig = {
   wordpress: {
     slugs: {
       post: "blog",
       page: "page",
     },
     routes: {
       redirection: `${backend}/wp-json/${project}/v1/redirection`,
       menus: `${backend}/wp-json/${project}/v1/menus`,
       options: `${backend}/wp-json/acf/v3/options/options`,
       frontPage: `${backend}/wp-json/${project}/v1/front-page`,
       search: `${backend}/wp-json/${project}/v1/search`,
     },
   },
 };
 
 module.exports = hikeConfig
