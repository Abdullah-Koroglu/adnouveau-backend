'use strict';

/**
 * mail-subscriber controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::mail-subscriber.mail-subscriber');
