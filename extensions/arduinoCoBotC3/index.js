const arduinoCoBotC3 = () => ({
  name: 'CoBotC3',
  extensionId: 'arduinoCoBotC3',
  version: '1.0.0',
  supportDevice: ['coBot_esp32C3', 'coBot_arduinoEsp32C3'],
  author: 'MakerViet',
  blocks: 'blocks.js',
  generator: 'generator.js',
  toolbox: 'toolbox.js',
  translations: 'translations.js',
  hide: true,
  library: 'lib',
  helpLink: ''
})

module.exports = arduinoCoBotC3;
