const coBot = formatMessage => ({
    name: formatMessage({
        id: 'coBotC3.name',
        default: 'CoBot v1'
    }),
    deviceId: 'coBot_esp32C3',
    manufactor: 'ThingEdu',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'],
    iconURL: 'assets/cobot.png',
    description: formatMessage({
        id: 'coBotC3.description',
        default: 'CoBot by ThingEdu'
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [
        'USB\\VID_303A&PID_1001'
    ],
    connectionIconURL: 'assets/cobot-illustration.svg',
    connectionSmallIconURL: 'assets/cobot-small.svg',
    translations: 'translations.js',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp'],
    tags: ['kit'],
    helpLink: 'https://github.com/makerviet/cobot-arduino'
});

const coBotArduino = formatMessage => {
    const device = coBot(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'coBot_arduinoEsp32C3';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinoCoBotC3'];
    device.deviceExtensionsCompatible = 'arduinoEsp32';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    coBot(formatMessage),
    coBotArduino(formatMessage)
]);
