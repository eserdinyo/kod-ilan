function setTypes(type) {
    switch (type) {
        case 1:
            return 'Tam Zamanlı';
        case 2:
            return 'Remote'
        default:
            break;
    }
}

export default setTypes;