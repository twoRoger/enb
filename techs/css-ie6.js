/**
 * css-ie6
 * =======
 *
 * Склеивает *css* и *ie6.css*-файлы по deps'ам, обрабатывает инклуды и ссылки, сохраняет в виде `?.ie6.css`.
 *
 * **Опции**
 *
 * * *String* **target** — Результирующий таргет. По умолчанию `?.ie6.css`.
 * * *String* **filesTarget** — files-таргет, на основе которого получается список исходных файлов
 *   (его предоставляет технология `files`). По умолчанию — `?.files`.
 *
 * **Пример**
 *
 * ```javascript
 * nodeConfig.addTech(require('enb/techs/css-ie6'));
 * ```
 */

module.exports = require('./css').buildFlow()
    .name('css-ie6')
    .target('target', '?.ie6.css')
    .useFileList(['css', 'ie6.css'])
    .createTech();
