function Trips(uber) {
    this._uber = uber;
    this.path = 'partners/trips';
}

module.exports = Trips;

Trips.prototype.getTrips = function getTrips(accessToken, limit, offset, from_time, to_time, callback) {
    if (!accessToken) {
        return callback(new Error('Invalid accessToken'));
    }

    var params = {
        limit: limit
    };
    if(offset != 0) {
        params.offset = offset;
    }
    if(from_time != 0) {
        params.from_time = from_time;
    }
    if(to_time != 0) {
        params.to_time = to_time;
    }

    return this._uber.get({
        url: this.path,
        params: params
    }, callback, accessToken);
};