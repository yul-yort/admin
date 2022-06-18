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
 * Обработчик ошибок.
 * @param err
 */
function errorCallback(err) {
  if (err) {
    return console.log(err);
  }
}

const builder = {
  entity: {
    getClassFilePath(name) {
      return `${this.getDirectoryPath(name)}/index.ts`;
    },
    getTypeFilePath(name) {
      return `${this.getDirectoryPath(name)}/types.ts`;
    },
    getDirectoryPath: (name) => {
      return `./src/data/${name}/entity`;
    },
    getClassTemplate: (name) => {
      const className = name;
      const typeName = "I" + className;

      return `import { ${typeName} } from "./types";

export class ${className} implements ${typeName} {}
`;
    },
    getTypeTemplate: (name) => {
      return `export interface I${name} {}
`;
    },
  },
  service: {
    getClassFilePath(name) {
      return `${this.getDirectoryPath(name)}/index.ts`;
    },
    getTypeFilePath(name) {
      return `${this.getDirectoryPath(name)}/types.ts`;
    },
    getDirectoryPath: (name) => {
      return `./src/data/${name}/service`;
    },
    getClassTemplate: (name) => {
      const className = name + "Service";
      const typeName = "I" + className;

      return `import { ${typeName} } from "./types";
import { I${name}Repository } from "../repository/types";

export class ${className} implements ${typeName} {
  constructor(private repository: I${name}Repository) {}
}
`;
    },
    getTypeTemplate: (name) =>
      `export interface I${name}Service {}
`,
  },
  repository: {
    getClassFilePath(name) {
      return `${this.getDirectoryPath(name)}/index.ts`;
    },
    getTypeFilePath(name) {
      return `${this.getDirectoryPath(name)}/types.ts`;
    },
    getDirectoryPath: (name) => {
      return `./src/data/${name}/repository`;
    },
    getClassTemplate: (name) => {
      const className = name + "Repository";
      const typeName = "I" + className;

      return `import { BaseRepository } from "../../BaseRepository";
import { ${typeName} } from "./types";

export class ${className} extends BaseRepository implements ${typeName} {}
`;
    },
    getTypeTemplate: (name) =>
      `export interface I${name}Repository {}
`,
  },
  VM: {
    getClassFilePath(name) {
      return `${this.getDirectoryPath(name)}/index.ts`;
    },
    getTypeFilePath(name) {
      return `${this.getDirectoryPath(name)}/types.ts`;
    },
    getDirectoryPath(name) {
      return `./src/view/viewModels/${name}`;
    },
    getClassTemplate(name) {
      const className = name + "VM";
      const typeName = "I" + className;

      return `import { makeObservable } from "mobx";
import { I${name}Service } from "../../../data/${name}/service/types";
import { INotificationsVM } from "../types";
import { BaseVM } from "../BaseVM";
import { ${typeName} } from "./types";

export class ${className} extends BaseVM implements ${typeName} {
  constructor(
    notificationsVM: INotificationsVM,
    private service: I${name}Service
  ) {
    super(notificationsVM);

    makeObservable(this, {});
  }
}
`;
    },
    getTypeTemplate: (name) => `import { IBaseVM } from "../types";

export interface I${name}VM extends IBaseVM {}
`,
  },
};

/**
 * Название модуля.
 * @type {string}
 */
const moduleName = capitalizeFirstLetter(moduleNameArg);
/**
 * Создаваемые типы.
 * @type {string[]}
 */
const types = ["entity", "repository", "service", "VM"];

types.forEach((type) => {
  /**
   * Создает соответствующую папку.
   */
  fs.mkdirSync(builder[type].getDirectoryPath(moduleName), { recursive: true });

  /**
   * Создает соответствующий класс.
   */
  fs.writeFile(
    builder[type].getClassFilePath(moduleName),
    builder[type].getClassTemplate(moduleName),
    errorCallback
  );

  /**
   * Создает соответствующий интерфейс.
   */
  fs.writeFile(
    builder[type].getTypeFilePath(moduleName),
    builder[type].getTypeTemplate(moduleName),
    errorCallback
  );
});

console.log(`The module ${moduleName} was created!`);
