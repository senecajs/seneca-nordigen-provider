![Seneca Nordigen-Provider](http://senecajs.org/files/assets/seneca-logo.png)

> _Seneca Nordigen-Provider_ is a plugin for [Seneca](http://senecajs.org)


Provides access to the Nordigen API using the Seneca *provider*
convention. Nordigen API entities are represented as Seneca entities so
that they can be accessed using the Seneca entity API and messages.


[![npm version](https://img.shields.io/npm/v/@seneca/nordigen-provider.svg)](https://npmjs.com/package/@seneca/nordigen-provider)
[![build](https://nordigen.com/senecajs/seneca-nordigen-provider/actions/workflows/build.yml/badge.svg)](https://nordigen.com/senecajs/seneca-nordigen-provider/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/nordigen/senecajs/seneca-nordigen-provider/badge.svg?branch=main)](https://coveralls.io/nordigen/senecajs/seneca-nordigen-provider?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/nordigen/senecajs/seneca-nordigen-provider/badge.svg)](https://snyk.io/test/nordigen/senecajs/seneca-nordigen-provider)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/19462/branches/505954/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=19462&bid=505954)
[![Maintainability](https://api.codeclimate.com/v1/badges/f76e83896b731bb5d609/maintainability)](https://codeclimate.com/nordigen/senecajs/seneca-nordigen-provider/maintainability)


| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|


## Quick Example


```js

// Setup - get the key value (<SECRET>) separately from a vault or
// environment variable.
Seneca()
  .use('provider', {
    provider: {
      nordigen: {
        keys: {
          api: {
            value: '<SECRET>'
          },
        }
      }
    }
  })
  .use('nordigen-provider')

let repo = await seneca.entity('provider/nordigen/repo')
  .load$('senecajs/nordigen-api-test')

Console.log('REPO DATA', repo)

repo.description = 'New description'
repo = await repo.save$()

Console.log('UPDATED DATA', repo)

```

## Install

```sh
$ npm install @seneca/nordigen-provider
```



<!--START:options-->


## Options

* `debug` : boolean <i><small>false</small></i>


Set plugin options when loading with:
```js


seneca.use('NordigenProvider', { name: value, ... })


```


<small>Note: <code>foo.bar</code> in the list above means 
<code>{ foo: { bar: ... } }</code></small> 



<!--END:options-->

<!--START:action-list-->


## Action Patterns

* [role:entity,base:nordigen,cmd:load,name:repo,zone:provider](#-roleentitybasenordigencmdloadnamerepozoneprovider-)
* [role:entity,base:nordigen,cmd:save,name:repo,zone:provider](#-roleentitybasenordigencmdsavenamerepozoneprovider-)
* [sys:provider,get:info,provider:nordigen](#-sysprovidergetinfoprovidernordigen-)


<!--END:action-list-->

<!--START:action-desc-->


## Action Descriptions

### &laquo; `role:entity,base:nordigen,cmd:load,name:repo,zone:provider` &raquo;

Load Nordigen repository data into an entity.



----------
### &laquo; `role:entity,base:nordigen,cmd:save,name:repo,zone:provider` &raquo;

Update Nordigen repository data from an entity.



----------
### &laquo; `sys:provider,get:info,provider:nordigen` &raquo;

Get information about the provider.



----------


<!--END:action-desc-->




## Testing

Note that since full tests can only bve run locally with valid API
keys, coverage is not generate by Github Actions, and the local
coverage is checked into git.



