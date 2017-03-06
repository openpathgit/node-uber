function Vehicles(uber) {
    this._uber = uber;
    this.path = '/partners/vehicles';
}

module.exports = Vehicles;

Vehicles.prototype.getVehicles = function getVehicles(accessToken, callback) {
    console.log("accessToken:" + accessToken)
    if (!accessToken) {
        return callback(new Error('Invalid accessToken'));
    }

    return this._uber.get({
        url: this.path,
        params: {
            limit: 50
        }
    }, callback, accessToken);
};