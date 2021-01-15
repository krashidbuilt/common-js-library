let { NODE_ENV = 'development' } = process.env;

if (typeof window !== 'undefined') {
    try {

        // eslint-disable-next-line no-undef
        if (window.location.hostname !== 'localhost') {
            // eslint-disable-next-line no-undef
            if (window.location.hostname.indexOf('staging') >= 0) {
                NODE_ENV = 'staging';
            } else {
                NODE_ENV = 'production';
            }
        }
    } catch (error) { }
}

module.exports = {
    NODE_ENV,
};