'use strict';

/**
 * mail-subscriber service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mail-subscriber.mail-subscriber');
