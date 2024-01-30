var SWF = require('@aws-sdk/client-swf');

/**
 * Create a AWS SWF client using the aws-sdk.
 */
exports.createClient = function (config) {
    var swfClient = new SWF.SWFClient(config);
    return swfClient;
};

