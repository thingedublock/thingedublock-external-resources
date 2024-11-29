const arduinoViaBanhMi = () => ({
  name: 'VIA - BanhMi',
  extensionId: 'arduinoViaBanhMi',
  version: '1.0.0',
  supportDevice: ['viaBanhMi_arduinoEsp32', 'viaBanhMi_esp32'],
  author: 'MakerViet',
  blocks: 'blocks.js',
  generator: 'generator.js',
  toolbox: 'toolbox.js',
  translations: 'translations.js',
  hide: true,
  library: 'lib',
  helpLink: ''
})

module.exports = arduinoViaBanhMi;
