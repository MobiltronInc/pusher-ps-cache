var psCache = require('ps-cache');
var PusherServer = require('pusher');
var PusherClient = require('pusher-js/node');


exports.PusherListener = class PusherListener extends psCache.BaseListener{
	constructor(opts) {
		super(opts.cache);

		// set the options
		this.opts = opts;
		this.app_id = opts.app_id;
		this.key = opts.key;
		this.secret = opts.secret;
		this.cluster = opts.cluster;
		this.channel = opts.channel;

		// initialising the client library
		this.pusherClientSocket = new Pusher(this.key);

		// subscribe to the channel with the preferred name
		this.pusherChannel = pusherClientSocket.subscribe(this.channel);

		// bind with the event
		var clazzRef = this;

		this.pusherChannel.bind('invalidate_pscache_key', function(data) {
			clazzRef.onDelete(data.key);
		});

		this.pusherServer = new Pusher({
  		appId: clazzRef.app_id,
  		key: clazzRef.key,
  		secret: clazzRef.secret,
  		encrypted: true,
	  	cluster: clazzRef.cluster
		});
	}

	doDelete(key) {
		this.pusherServer.trigger(this.channel, 'invalidate_pscache_key', {key: key});
	}
};
