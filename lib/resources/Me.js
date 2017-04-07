function Me(uber) {
    this._uber = uber;
    this.path = 'partners/me';
}

module.exports = Me;

Me.prototype.getDriverInfo = function getDriverInfo(accessToken, callback) {
    console.log("accessToken:" + accessToken)
    if (!accessToken) {
        return callback(new Error('Invalid accessToken'));
    }

    return this._uber.get({
        url: this.path,
        params: {
        }
    }, callback, accessToken);
};