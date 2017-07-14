const fs = require("fs");
const matter = require("gray-matter");
const { promisify } = require("util");

const md = require("markdown-it")({
  quotes: "“”‘’"
});

const readDir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

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
    frontmatter: data,
    content: md.render(content.toString())
  };
};

const buildArticles = async () => {
  const files = await getFiles();

  const compiled = await Promise.all(files.map(fileToJSON));

  console.log("Compiled files in data/articles to md…");
  console.log(compiled);
};

buildArticles();
