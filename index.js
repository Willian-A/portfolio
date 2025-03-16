#!/usr/bin/env node

/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const shell = require("shelljs");
const yargs = require("yargs");

const { argv } = yargs;

const appName = argv._[0];

const myRepository = () => {
  return "";
};

const run = async () => {
  if (!shell.which("git")) {
    console.log(
      "Para esse script ser executado, precisa-se que o Git esteja instalado."
        .red
    );
    shell.exit(1);
  }

  if (!appName) {
    console.log("Por favor informe o nome do repositório".red);
    shell.exit(1);
  }

  console.log("\nClonando o repositório".cyan);
  shell.exec(`git clone ${myRepository()} ${appName} -q`);
  shell.cd(appName);

  shell.sed("-i", /"name":\s?".+"/, `"name": "${appName}"`, "package.json");

  console.log("\nIniciando o repositório".cyan);
  shell.rm("-rf", ".git");
  shell.exec("git init");
  shell.exec("git add .");
  shell.exec('git commit -m "Initial commit using Create Boilerplate" -q');

  console.log("\nInstalando as dependências\n".cyan);
  if (!argv.native) {
    if (shell.which("yarn")) {
      shell.exec("yarn");
    } else {
      shell.exec("yarn install");
    }
  }

  console.log("Seu projeto está pronto para ser iniciado!".green);
  console.log("Para iniciar o desenvolvimento, execute:");
  console.log(`cd ${appName}`);
  if (shell.which("yarn")) {
    console.log("yarn dev");
  } else {
    console.log("yarn run dev");
  }
  console.log("Tudo certo!".rainbow);
};

run();
