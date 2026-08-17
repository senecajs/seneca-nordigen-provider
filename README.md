![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](http://senecajs.org) plugin

# @seneca/nordigen-provider

[![npm version](https://img.shields.io/npm/v/@seneca/nordigen-provider.svg)](https://npmjs.com/package/@seneca/nordigen-provider)
[![build](https://github.com/senecajs/seneca-nordigen-provider/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-nordigen-provider/actions/workflows/build.yml)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-nordigen-provider/badge.svg)](https://snyk.io/test/github/senecajs/seneca-nordigen-provider)
[![Coverage Status](https://coveralls.io/repos/senecajs/seneca-nordigen-provider/badge.svg?branch=main)](https://coveralls.io/github/senecajs/seneca-nordigen-provider?branch=main)
[![Maintainability](https://api.codeclimate.com/v1/badges/08fb814c5070ad97330d/maintainability)](https://codeclimate.com/github/senecajs/seneca-nordigen-provider/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

```sh
$ npm install @seneca/nordigen-provider
```



<!--START:options-->

## Quick Example

```js

// Setup - get the key value (<SECRET>) separately from a vault or
// environment variable.
Seneca()
  .use('promisify')
  .use('entity')
  .use('provider', {
    provider: {
      nordigen: {
        keys: {
          secretId: { value: '<API-ID>' },
          secretKey: { value: '<API-KEY>' },
        }
      }
    }
  })
  .use('nordigen-provider')

let list = await seneca.entity('provider/nordigen/institution')
  .list$({country: 'IE'})

Console.log('IE institutions', list)

```

## More Examples

See [test/](test/) for more usage examples.

## Motivation

A [Seneca.js](http://senecajs.org) plugin.

## Support

If you're using this module and need help, you can:

- Post a [github issue](https://github.com/senecajs/seneca-nordigen-provider/issues)
- Tweet to [@senecajs](http://twitter.com/senecajs)
- Ask on the [Gitter](https://gitter.im/senecajs/seneca)

## API

### Options

*None.*


<!--END:options-->

<!--START:action-list-->

### Action Patterns

* ["role":"entity","base":"nordigen","cmd":"list","name":"institution","zone":"provider"](#-roleentitybasenordigencmdlistnameinstitutionzoneprovider-)
* ["sys":"provider","get":"info","provider":"nordigen"](#-sysprovidergetinfoprovidernordigen-)


<!--END:action-list-->

<!--START:action-desc-->

### Action Descriptions

### &laquo; `"role":"entity","base":"nordigen","cmd":"list","name":"institution","zone":"provider"` &raquo;

No description provided.



----------
### &laquo; `"sys":"provider","get":"info","provider":"nordigen"` &raquo;

Get information about the provider.



----------


<!--END:action-desc-->

### Testing

Note that since full tests can only bve run locally with valid API
keys, coverage is not generate by Github Actions, and the local
coverage is checked into git.

### TODO: fix @seneca/doc

## Contributing

The [Senecajs org](https://github.com/senecajs/) encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Part of the [Senecajs org](https://github.com/senecajs/).
