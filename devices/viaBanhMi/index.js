const viaBanhMi = formatMessage => ({
    name: formatMessage({
        id: 'viaBanhMi.name',
        default: 'VIA Banh Mi'
    }),
    deviceId: 'viaBanhMi_esp32',
    manufactor: 'MakerViet',
    learnMore: '', // A link you can learn more about the device
    typeList: ['arduino'],
    iconURL: 'assets/viaBanhMi.png',
    description: formatMessage({
        id: 'viaBanhMi.description',
        default: 'VIA B – Banh Mi is a hardware development board by MakerViet. It\'s designed for Vietnamese student to create robotics and autonomous vehicle projects.'
    }),
    featured: true,
    disabled: false,
    bluetoothRequired: false,
    serialportRequired: true,
    pnpidList: [
        'USB\\VID_10C4&PID_EA60', // CP2102
        'USB\\VID_1A86&PID_7523' // CH340
    ],
    connectionIconURL: 'assets/viaBanhMi-illustration.svg',
    connectionSmallIconURL: 'assets/viaBanhMi-small.svg',
    translations: 'translations.js',
    programMode: ['realtime', 'upload'],
    defaultProgramMode: 'upload',
    programLanguage: ['block', 'c', 'cpp'],
    tags: ['kit'],
    helpLink: ''
});

const viaBanhMiArduino = formatMessage => {
    const device = viaBanhMi(formatMessage);
    device.defaultBaudRate = '115200';
    device.deviceId = 'viaBanhMi_arduinoEsp32';
    device.programMode = ['realtime', 'upload'];
    device.deviceExtensions = ['arduinoViaBanhMi'];
    device.deviceExtensionsCompatible = 'arduinoEsp32';
    device.hide = true;
    return device;
};

module.exports = formatMessage => ([
    viaBanhMi(formatMessage),
    viaBanhMiArduino(formatMessage),
]);
