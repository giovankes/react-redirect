const fetch = require("isomorphic-unfetch");
const fs = require("fs");
const nextConfig = require("next/config");
const { publicRuntimeConfig = {} } = nextConfig.default() || {};
const { ENV = "development" } = publicRuntimeConfig;
const environment = ENV || "development";

function pluck(objects) {
  //Return all objects
  return objects;
}

function array_uniques(values) {
  //Check array values for duplicates
  return values.filter((value, index, self) => {
    //Has a value been found?
    return self.indexOf(value) === index;
  });
}

function initRedirection(config) {
  if (!config.wordpress.routes.redirection) return;
  fetch(config.wordpress.routes.redirection)
    .then((res) => res.json())
    .then((resp) => {
      if (resp.items && resp.items.length > -1) {
        fs.writeFile("redirection.json", JSON.stringify(resp.items), (e) => {
          if (e) console.error(e);
        });
      }
    });
  return;
}

export default class Redirection {
  constructor(config) {
    this.config = config;
    initRedirection(config);
  }
  redirect = async (req, res, next) => {
    const config = this.config;
    if (config.wordpress.routes.redirection) {
      try {
        //Try to fetch redirection routes.
        //If it can't fetch anything it'll throw.
        const redirect = await fetch(config.wordpress.routes.redirection);
        if (!redirect.ok) {
          throw new Error(redirect.statusText);
        }
        await redirect
          .json()
          .then((resp) => {
            //Check if the fetch got any responses.
            if (resp.items && resp.items.length > 0) {
              //get all unique urls from items array
              const urls = array_uniques(pluck(resp.items, "url"));
              urls.sort((a, b) => a.regex - b.regex);
              urls.some((redirect) => {
                const {
                  url,
                  url_from,
                  url_notfrom,
                  server,
                  action_code,
                  action_data,
                  enabled,
                  regex,
                } = redirect;
                console.log(redirect);
                //Check if the redirection is enabled and the window path is set to the
                //redirection url
                if (enabled && req.path === url) {
                  res.writeHead(action_code, {
                    Location: action_data.url_from,
                  });
                  res.end();
                  return {};
                }

                if (regex && enabled && req.path.match(url)) {
                  const match = req.path.match(url);
                  const matchUrl = action_data.url_from.replace("$1", match[1]);

                  res.writeHead(action_code, {
                    Location: matchUrl,
                  });
                  res.end();
                  return {};
                }
              });
            }
          })
          .catch((e) => console.error(e));
        next();
      } catch (err) {
        console.error(
          "%c Please activate the Redirection plug-in",
          "color:red"
        );
      }
    }
  };
}
