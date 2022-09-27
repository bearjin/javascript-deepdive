const array = [1, 2, 3];

const [a, b, c] = array;

console.log(a, b, c);

const [x, y] = [1, 2];

console.log(x, y);

const [e, f = 10, g = 3] = [1, 2];

console.log(e, f, g);

const parseURL = (url = "") => {
  const parseURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
  console.log(parseURL);

  if (!parseURL) return {};

  const [, protocol, host, path] = parseURL;

  return { protocol, host, path };
};

const parsedURL = parseURL("https://www.musinsa.com/app/");

console.log(parsedURL);

const [h, ...i] = [1, 2, 3];

console.log(h, i);

const user = { firstName: "Woongjin", lastName: "Kim" };

const { firstName, lastName } = user;

console.log(firstName, lastName);
