# React-Redirection 🚀

## Please know this package is still under development.

[Redirection](https://en.wordpress.org/plugins/redirection/) is a plugin in wordpress that handles redirects.

This package is for handling redirects using a headless wordpress template.

## How to use.

You can use the packages by importing `{Link}` from `"react-redirection"`

It's a React component, so you can just pass down the things you need as a prop.

:white_check_mark:

```jsx
import { Link } from "@hike/react-redirection";

const App = (data) => (
  <Link
    uri={data?.uri}
    url={data?.url}
    title={data?.title}
    target={data?.target}
  >
    Link
  </Link>
);

export default App;
```

## Features

Currently we support:

- [x] URI redirects (default).
- [x] Regex redirects.

Up and coming:

- [ ] Server name redirects.(from gohike.eu to gohike.nl/en)
- [ ] URL and language (Redirects)
- [ ] 404 (Response)
- [ ] URL and header (Redirect)
- [ ] HTTP codes (Response)

Never going to be supported:

- Redirect to random post

- URL and cookie

- URL and user agent

- URL and login status

- URL and referrer

- URL and IP

- URL and custom filter
