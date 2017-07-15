const fs = require("fs");
const matter = require("gray-matter");
const twemoji = require("twemoji");
const prism = require("markdown-it-prism");
const slugify = require("./slugify");
const { promisify } = require("util");
const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const md = require("markdown-it")({
  quotes: "“”‘’"
});

md.use(prism, {});

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

  return {
    meta: Object.assign({}, data, {
      slug: data.title ? slugify(data.title) : ""
    }),
    content: twemoji.parse(md.render(content.toString()))
  };
};

const buildArticles = async () => {
  const files = await getFiles();

  const compiled = await Promise.all(files.map(fileToJSON));

  console.log("Compiled files in data/articles to md…");
  console.log(compiled);

  try {
    await writeFile("./src/_data/articles.json", JSON.stringify(compiled));
    console.log("Wrote files to src/_data/articles.json");
  } catch (error) {
    throw error;
  }
};

buildArticles();
