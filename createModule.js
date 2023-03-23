// eslint-disable-next-line @typescript-eslint/no-var-requires,no-undef
const fs = require("fs");

// eslint-disable-next-line no-undef
const moduleNameArg = process.argv[2];

if (!moduleNameArg) {
  console.error("Укажите название модуля! Н-р: npm run module test");
  throw new Error("Укажите название модуля! Н-р: npm run module test");
}

/**
 * Вернет строку с заглавной первой буквой.
 *
 * @param {string} name - строка.
 * @returns {string}
 */
const capitalizeFirstLetter = (name) =>
  `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`;

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

  getIndexPath: (name) => `./src/data/${name}/index.ts`,
  indexTemplate: `export * from "./entity";
export * from "./service";
export * from "./repository";

export * from "./entity/types";
export * from "./repository/types";
export * from "./service/types";
`,
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

  /**
   * Создает корневой файл.
   */
  fs.writeFile(
    builder.getIndexPath(moduleName),
    builder.indexTemplate,
    errorCallback
  );
});

console.log(`The module ${moduleName} was created!`);

//советы от GPT, подумать на досуге!!!

//Первое, что мне бросается в глаза - это то, что у вас есть несколько повторяющихся функций в объекте builder. Это может быть улучшено, объединив эти функции в одну общую функцию с параметрами.
//
// Например, вы можете определить общую функцию generateFiles, которая принимает в качестве параметров тип, имя модуля и содержимое шаблона, а затем генерирует соответствующие файлы.
//
// Вот так это может выглядеть:
// function generateFiles(type, name, classTemplate, typeTemplate) {
//   const dirPath = builder[type].getDirectoryPath(name);
//   const classFilePath = builder[type].getClassFilePath(name);
//   const typeFilePath = builder[type].getTypeFilePath(name);
//
//   fs.mkdirSync(dirPath, { recursive: true });
//
//   fs.writeFile(classFilePath, classTemplate(name), errorCallback);
//   fs.writeFile(typeFilePath, typeTemplate(name), errorCallback);
// }
//
// types.forEach((type) => {
//   generateFiles(
//     type,
//     moduleName,
//     builder[type].getClassTemplate,
//     builder

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// был еще такой вариант
// const fs = require('fs');
// const { capitalize } = require('lodash/string');
//
// const DIRECTORY_TEMPLATE = './src/data/{name}/{type}';
// const FILE_TEMPLATE = './src/data/{name}/{type}/index.ts';
// const TYPE_TEMPLATE = './src/data/{name}/{type}/types.ts';
//
// function createDirectory(name, type) {
//   const directoryPath = DIRECTORY_TEMPLATE.replace('{name}', name).replace('{type}', type);
//   fs.mkdirSync(directoryPath, { recursive: true });
// }
//
// function writeFile(name, type, content) {
//   const filePath = FILE_TEMPLATE.replace('{name}', name).replace('{type}', type);
//   fs.writeFileSync(filePath, content);
// }
//
// function createModule(moduleName) {
//   const types = ['entity', 'repository', 'service', 'VM'];
//
//   types.forEach((type) => {
//     createDirectory(moduleName, type);
//
//     const className = capitalize(moduleName) + capitalize(type);
//     const typeName = `I${className}`;
//
//     const classContent = `
//       import { ${typeName} } from "./types";
//
//       export class ${className} implements ${typeName} {}
//     `;
//
//     const typeContent = `
//       export interface ${typeName} {}
//     `;
//
//     writeFile(moduleName, type, typeContent);
//     writeFile(moduleName, type, classContent);
//   });
//
//   const indexContent = `
//     export * from './entity';
//     export * from './repository';
//     export * from './service';
//
//     export * from './entity/types';
//     export * from './repository/types';
//     export * from './service/types';
//   `;
//
//   writeFile(moduleName, 'index', indexContent);
// }
//
// const moduleName = process.argv[2];
//
// if (!moduleName) {
//   console.error('Укажите название модуля! Н-р: npm run module test');
//   throw new Error('Укажите название модуля! Н-р: npm run module test');
// }
//
// createModule(moduleName);
