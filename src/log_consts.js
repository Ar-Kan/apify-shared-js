export const LOG_LEVELS = {
    // Turns off logging completely
    OFF: 0,
    // For unexpected errors in Apify system
    ERROR: 1,
    // For situations where error is caused by user (e.g. Meteor.Error), i.e. when the error is not
    // caused by Apify system, avoid the word "ERROR" to simplify searching in log
    SOFT_FAIL: 2,
    WARNING: 3,
    INFO: 4,
    DEBUG: 5,
    // for performance stats
    PERF: 6,
};

// Inverse of LOG_LEVELS = maps log level to string.
export const LOG_LEVEL_TO_STRING = Object.keys(LOG_LEVELS);
