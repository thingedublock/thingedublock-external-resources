const thing = formatMessage => ({
    name: formatMessage({
        id: 'thingc3.name',
        default: 'Thing V1'
    }),
    deviceId: 'thing_esp32C3',
    manufactor: 'MakerViet - ThingEdu',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'],
    iconURL: 'assets/cobot.png',
    description: formatMessage({
        id: 'thingc3.description',
        default: 'Thing by ThingEdu'
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
    helpLink: 'https://github.com/MEO-3'
});

const thingArduino = formatMessage => {
    const device = thing(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'thing_arduinoEsp32C3';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinothingc3'];
    device.deviceExtensionsCompatible = 'arduinoEsp32';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    thing(formatMessage),
    thingArduino(formatMessage)
]);
