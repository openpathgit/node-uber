function Trips(uber) {
    this._uber = uber;
    this.path = '/partners/trips';
}

module.exports = Trips;

Trips.prototype.getTrips = function getVehicles(accessToken, limit, offset, callback) {
    console.log("accessToken:" + accessToken)
    if (!accessToken) {
        return callback(new Error('Invalid accessToken'));
    }

    return this._uber.get({
        url: this.path,
        params: {
            limit: 50,
            offset: offset
        }
    }, callback, accessToken);
};