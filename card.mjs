#!/usr/bin/env node

import boxen from "boxen";
import pc from "picocolors";

const boxenOptions = {
  padding: 1,
  margin: { top: 1, bottom: 1, left: 0, right: 0 },
  width: 62,
  title: "rogachev",
  titleAlignment: "center",
  borderStyle: "double",
  borderColor: "#f55376",
};

const intro = pc.bold(
  "Hi! I'm Sergei Rogachev. I build front-end things, and love what I do.\n\nGet in touch.\n\n",
);

const links = [
  { name: pc.bgBlack(pc.white("Website")), url: "   https://rogachev.pro" },
  { name: pc.bgMagenta(pc.white("GitHub")), url: "    https://github.com/Redknife" },
  { name: pc.bgCyan(pc.white("LinkedIn")), url: "  https://www.linkedin.com/in/sergei-rogachev" },
  { name: pc.bgRed(pc.white("Resume")), url: "    https://www.rogachev.pro/resume.docx" },
  { name: pc.bgYellow(pc.white("Email")), url: "     mailto:redknife183@gmail.com" },
];

const linkList = links.map((link) => `${link.name} ${link.url}`).join("\n");

console.log(boxen(intro + linkList, boxenOptions));
