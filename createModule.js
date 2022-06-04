const fs = require("fs");

const moduleNameArg = process.argv[2];

if (!moduleNameArg) {
  return console.error("Укажите название модуля! Н-р: npm run module test");
}

/**
 * Вернет строку с заглавной первой буквой.
 *
 * @param {string} name - строка.
 * @returns {string}
 */
function capitalizeFirstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

/**
 * Вернет шаблон класса согласно указанному типу.
 * @param {string} name - название модуля.
 * @param {string} type - тип создаваемого класса.
 * @returns {string}
 */
function getDataClassTemplate(name, type) {
  let localType = type !== "entity" ? capitalizeFirstLetter(type) : "";
  const className = name + localType;
  const typeName = "I" + className;

  return `import { ${typeName} } from "./types";

export class ${className} implements ${typeName} {}
`;
}
/**
 * Вернет шаблон класса для ViewModel.
 * @param {string} name - название модуля.
 * @param {string} type - тип создаваемого класса.
 * @returns {string}
 */
function getVMClassTemplate(name, type) {
  const className = name + type;
  const typeName = "I" + className;

  return `import { BaseVM } from "../BaseVM";
import { ${typeName} } from "./types";

export class ${className} extends BaseVM implements ${typeName} {}
`;
}
/**
 * Вернет шаблон интерфейса согласно указанному типу.
 * @param {string} name - название модуля.
 * @param {string} type - тип создаваемого интерфейса.
 * @returns {string}
 */
function getDataInterfaceTemplate(name, type) {
  const localType = type !== "entity" ? capitalizeFirstLetter(type) : "";

  return `export interface I${name}${localType} {}
`;
}
/**
 * Вернет шаблон интерфейса для ViewModel.
 * @param {string} name - название модуля.
 * @param {string} type - тип создаваемого интерфейса.
 * @returns {string}
 */
function getVMInterfaceTemplate(name, type) {
  return `import { IBaseVM } from "../types";

export interface I${name}${type} extends IBaseVM {}
`;
}

/**
 * Обработчик ошибок.
 * @param err
 */
function errorCallback(err) {
  if (err) {
    return console.log(err);
  }
}

/**
 * Название модуля.
 * @type {string}
 */
const moduleName = capitalizeFirstLetter(moduleNameArg);
/**
 * Создаваемые типы.
 * @type {string[]}
 */
const dirs = ["entity", "repository", "service", "VM"];

dirs.forEach((dir) => {
  const isVM = dir === "VM";

  const dirName = isVM
    ? `./src/view/viewModels/${moduleName}`
    : `./src/data/${moduleName}/${dir}`;

  /**
   * Создает соответствующую папку.
   */
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName, { recursive: true });
  } else {
    return console.error(`Directory ${dirName} is existed`);
  }

  /**
   * Создает соответствующий класс.
   */
  fs.writeFile(
    `${dirName}/index.ts`,
    isVM
      ? getVMClassTemplate(moduleName, dir)
      : getDataClassTemplate(moduleName, dir),
    errorCallback
  );

  /**
   * Создает соответствующий интерфейс.
   */
  fs.writeFile(
    `${dirName}/types.ts`,
    isVM
      ? getVMInterfaceTemplate(moduleName, dir)
      : getDataInterfaceTemplate(moduleName, dir),
    errorCallback
  );
});

console.log(`The module ${moduleName} was created!`);
