const thingBot = formatMessage => ({
    name: formatMessage({
        id: 'thingbot.name',
        default: 'ThingBot'
    }),
    deviceId: 'thingBot_esp32C3',
    manufactor: 'ThingEdu',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'],
    iconURL: 'assets/thingbot.png',
    description: formatMessage({
        id: 'thingbot.description',
        default: 'ThingBot by ThingEdu'
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [
        'USB\\VID_303A&PID_1001'
    ],
    connectionIconURL: 'assets/thingbot-illustration.svg',
    connectionSmallIconURL: 'assets/thingbot-small.svg',
    translations: 'translations.js',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp'],
    tags: ['kit'],
    helpLink: 'https://github.com/makerviet/cobot-arduino'
});

const thingBotArduino = formatMessage => {
    const device = thingBot(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'thingBot_arduinoEsp32C3';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinoThingBotC3', 'ps2'];
    device.deviceExtensionsCompatible = 'arduinoEsp32';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    thingBot(formatMessage),
    thingBotArduino(formatMessage)
]);
