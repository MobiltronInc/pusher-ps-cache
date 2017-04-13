# pusher-ps-cache

An implementation of [ps-cache](https://github.com/MobiltronInc/ps-cache), pubsub caching library, using [pusher.com](https://pusher.com/) real-time messaging medium.

## Getting Started

```javascript
var pscache = require('ps-cache');
var cache = new pscache.Cache();

//Pusher configuration
var listenerOpts = {
  cache: cache,
  app_id: ...,
  key: ...,
  secret: ...,
  cluster: ...,
  channel: ...
};

//Create pusher listener
var pusherListener = new pusherBaseListener.PusherListener(listenerOpts);
cache.attachListener(pusherListener);

//Set to cache
cache.set(key, value, opts);

//Remove from cache
cache.remove(key)
```

## Requirements
Node.js >= 6.0

## Installation

With [npm](https://www.npmjs.com/) do:

```ruby
npm install pusher-ps-cache -save
```

## About

<img src="https://github.com/mobiltroninc/Foundation/blob/master/ASSETS/mobiltron_square.png?raw=true" width="70" />

This project is funded and maintained by [Mobiltron, Inc.](http://mobiltron.com). We :heart: open source software!

Check out our other [open source projects](https://github.com/mobiltroninc/) or say :wave: on twitter [@mobiltron](https://twitter.com/mobiltron).

## Contribute

Contributions are welcome :metal: We encourage developers like you to help us improve the projects we've shared with the community. Please see the [Contributing Guide](https://github.com/mobiltroninc/Foundation/blob/master/CONTRIBUTING.md) and the [Code of Conduct](https://github.com/mobiltroninc/Foundation/blob/master/CONDUCT.md).

## Authors

* **Vassilios Karakoidas** - *Initial work* - [Mobiltron, Inc.](http://mobiltron.com)
* **Stavros Schizas** - *Supporting work* - [Mobiltron, Inc.](http://mobiltron.com)

See also the list of [contributors](https://github.com/MobiltronInc/pusher-ps-cache/contributors) who participated in this project.

## License

pusher-ps-cache is available under the MIT license. See the [LICENSE](LICENSE.md) file for more info.
