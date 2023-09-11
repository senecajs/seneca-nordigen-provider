![Seneca Nordigen-Provider](http://senecajs.org/files/assets/seneca-logo.png)

> _Seneca Nordigen-Provider_ is a plugin for [Seneca](http://senecajs.org)


Provides access to the Nordigen API using the Seneca *provider*
convention. Nordigen API entities are represented as Seneca entities so
that they can be accessed using the Seneca entity API and messages.


[![npm version](https://img.shields.io/npm/v/@seneca/nordigen-provider.svg)](https://npmjs.com/package/@seneca/nordigen-provider)
[![build](https://github.com/senecajs/seneca-nordigen-provider/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-nordigen-provider/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/senecajs/seneca-nordigen-provider/badge.svg?branch=main)](https://coveralls.io/github/senecajs/seneca-nordigen-provider?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-nordigen-provider/badge.svg)](https://snyk.io/test/github/senecajs/seneca-nordigen-provider)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/21342/branches/611017/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=21342&bid=611017)
[![Maintainability](https://api.codeclimate.com/v1/badges/08fb814c5070ad97330d/maintainability)](https://codeclimate.com/github/senecajs/seneca-nordigen-provider/maintainability)


| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|


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

## Install

```sh
$ npm install @seneca/nordigen-provider
```



<!--START:options-->


## Options

*None.*


<!--END:options-->

<!--START:action-list-->


## Action Patterns

* ["role":"entity","base":"nordigen","cmd":"list","name":"institution","zone":"provider"](#-roleentitybasenordigencmdlistnameinstitutionzoneprovider-)
* ["sys":"provider","get":"info","provider":"nordigen"](#-sysprovidergetinfoprovidernordigen-)


<!--END:action-list-->

<!--START:action-desc-->


## Action Descriptions

### &laquo; `"role":"entity","base":"nordigen","cmd":"list","name":"institution","zone":"provider"` &raquo;

No description provided.



----------
### &laquo; `"sys":"provider","get":"info","provider":"nordigen"` &raquo;

Get information about the provider.



----------


<!--END:action-desc-->




## Testing

Note that since full tests can only bve run locally with valid API
keys, coverage is not generate by Github Actions, and the local
coverage is checked into git.

### TODO: fix @seneca/doc


