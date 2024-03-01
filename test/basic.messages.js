/* Copyright © 2022 Seneca Project Contributors, MIT License. */

const Pkg = require('../package.json')

module.exports = {
  print: false,
  pattern: 'sys:provider,provider:nordigen',
  allow: { missing: true },

  calls: [
    {
      pattern: 'get:info',
      out: {
        ok: true,
        name: 'nordigen',
        version: Pkg.version,
        sdk: {
          name: 'nordigen-node',
          version: Pkg.dependencies['nordigen-node'],
          baseUrl: 'https://bankaccountdata.gocardless.com/api/v2'
        }
      },
    }
  ]
}
