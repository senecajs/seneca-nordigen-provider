/* Copyright © 2021 Seneca Project Contributors, MIT License. */


const messages = {

    get_info: {
        desc: 'Get information about the provider.',
    },
    list_institution: {
      desc: 'List Nordigen data into an entity.'
    }
}

const sections = {}

export default {
  messages,
  sections
}

if ('undefined' !== typeof (module)) {
    module.exports = {
      messages,
      sections
    }
}
