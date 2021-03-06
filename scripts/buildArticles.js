const fs = require("fs");
const mkdirp = require("mkdirp");
const matter = require("gray-matter");
const twemoji = require("twemoji");
const prism = require("markdown-it-prism");
const slugify = require("./slugify");
const { promisify } = require("util");

const mkdir = promisify(mkdirp);
const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const md = require("markdown-it")({
  quotes: "“”‘’"
});

md.use(prism, {});
md.use(require("markdown-it-mark"));

const DATA_PATH = "./data/articles/";

const getFiles = async () => {
  try {
    const files = await readDir(DATA_PATH);
    return files.map(filename => `${DATA_PATH}${filename}`);
  } catch (error) {
    throw error;
  }
};

const fileToJSON = async pathToFile => {
  const buf = await readFile(pathToFile);
  const { data, content } = matter(buf.toString());
  const slug = data.slug ? data.slug : data.title ? slugify(data.title) : "";

  return {
    meta: Object.assign({}, data, { slug }),
    content: twemoji.parse(md.render(content.toString()))
  };
};

const buildArticles = async () => {
  const files = await getFiles();
  const compiled = await Promise.all(files.map(fileToJSON));

  console.log(`Compiled ${compiled.length} files in data/articles to md.`);

  try {
    await mkdir("./src/_data");
    await writeFile("./src/_data/articles.json", JSON.stringify(compiled));
    console.log("Wrote files to src/_data/articles.json");
  } catch (error) {
    throw error;
  }
};

buildArticles();
