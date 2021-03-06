! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.TileLnglatTransform = e() : t.TileLnglatTransform = e()
}(this, function() {
	return function(t) {
		function e(i) {
			if(n[i]) return n[i].exports;
			var a = n[i] = {
				exports: {},
				id: i,
				loaded: !1
			};
			return t[i].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports
		}
		var n = {};
		return e.m = t, e.c = n, e.p = "", e(0)
	}([function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function a(t, e, n) {
			return e in t ? Object.defineProperty(t, e, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = n, t
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.TileLnglatTransformBing = e.TileLnglatTransformTencent = e.TileLnglatTransformBaidu = e.TileLnglatTransformOSM = e.TileLnglatTransformGoogle = e.TileLnglatTransformGaode = void 0;
		var o, r = n(1),
			l = i(r),
			u = n(2),
			f = i(u),
			h = n(4),
			s = i(h),
			c = n(5),
			g = i(c),
			p = {
				Gaode: "Gaode",
				Google: "Google",
				Baidu: "Baidu",
				OSM: "OSM",
				Tencent: "Tencent",
				Bing: "Bing"
			},
			T = (o = {}, a(o, p.Gaode, {
				min: 1,
				max: 19
			}), a(o, p.Google, {
				min: 0,
				max: 21
			}), a(o, p.OSM, {
				min: 0,
				max: 19
			}), a(o, p.Baidu, {
				min: 3,
				max: 18
			}), a(o, p.Tencent, {
				min: 3,
				max: 19
			}), a(o, p.Bing, {
				min: 3,
				max: 19
			}), o),
			v = new l.default(T[p.Gaode].max, T[p.Gaode].min),
			M = new l.default(T[p.Google].max, T[p.Google].min),
			y = new l.default(T[p.OSM].max, T[p.OSM].min),
			_ = new f.default(T[p.Baidu].max, T[p.Baidu].min),
			x = new s.default(T[p.Tencent].max, T[p.Tencent].mi),
			d = new g.default(T[p.Bing].max, T[p.Bing].min);
		e.TileLnglatTransformGaode = v, e.TileLnglatTransformGoogle = M, e.TileLnglatTransformOSM = y, e.TileLnglatTransformBaidu = _, e.TileLnglatTransformTencent = x, e.TileLnglatTransformBing = d
	}, function(t, e) {
		"use strict";

		function n(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t) {
			return(Math.exp(t) - Math.exp(-t)) / 2
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function t(t, e) {
					for(var n = 0; n < e.length; n++) {
						var i = e[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
					}
				}
				return function(e, n, i) {
					return n && t(e.prototype, n), i && t(e, i), e
				}
			}(),
			o = function() {
				function t(e, i) {
					n(this, t), this.levelMax = e, this.levelMin = i
				}
				return a(t, [{
					key: "_getMapSize",
					value: function(t) {
						return Math.pow(2, t)
					}
				}, {
					key: "getResolution",
					value: function(t, e) {
						var n = 12756274 * Math.PI * Math.cos(t) / 256 / this._getMapSize(e);
						return n
					}
				}, {
					key: "_lngToTileX",
					value: function(t, e) {
						var n = (t + 180) / 360,
							i = Math.floor(n * this._getMapSize(e));
						return i
					}
				}, {
					key: "_latToTileY",
					value: function(t, e) {
						var n = t * Math.PI / 180,
							i = (1 - Math.log(Math.tan(n) + 1 / Math.cos(n)) / Math.PI) / 2,
							a = Math.floor(i * this._getMapSize(e));
						return a
					}
				}, {
					key: "lnglatToTile",
					value: function(t, e, n) {
						var i = this._lngToTileX(t, n),
							a = this._latToTileY(e, n);
						return {
							tileX: i,
							tileY: a
						}
					}
				}, {
					key: "_lngToPixelX",
					value: function(t, e) {
						var n = (t + 180) / 360,
							i = Math.floor(n * this._getMapSize(e) * 256 % 256);
						return i
					}
				}, {
					key: "_latToPixelY",
					value: function(t, e) {
						var n = Math.sin(t * Math.PI / 180),
							i = .5 - Math.log((1 + n) / (1 - n)) / (4 * Math.PI),
							a = Math.floor(i * this._getMapSize(e) * 256 % 256);
						return a
					}
				}, {
					key: "lnglatToPixel",
					value: function(t, e, n) {
						var i = this._lngToPixelX(t, n),
							a = this._latToPixelY(e, n);
						return {
							pixelX: i,
							pixelY: a
						}
					}
				}, {
					key: "_pixelXTolng",
					value: function(t, e, n) {
						var i = t / 256,
							a = (e + i) / this._getMapSize(n) * 360 - 180;
						return a
					}
				}, {
					key: "_pixelYToLat",
					value: function(t, e, n) {
						var a = t / 256,
							o = 180 * Math.atan(i(Math.PI * (1 - 2 * (e + a) / this._getMapSize(n)))) / Math.PI;
						return o
					}
				}, {
					key: "pixelToLnglat",
					value: function(t, e, n, i, a) {
						var o = this._pixelXTolng(t, n, a),
							r = this._pixelYToLat(e, i, a);
						return {
							lng: o,
							lat: r
						}
					}
				}]), t
			}();
		e.default = o
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function a(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function() {
				function t(t, e) {
					for(var n = 0; n < e.length; n++) {
						var i = e[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
					}
				}
				return function(e, n, i) {
					return n && t(e.prototype, n), i && t(e, i), e
				}
			}(),
			r = n(3),
			l = i(r),
			u = function() {
				function t(e, n) {
					a(this, t), this.levelMax = e, this.levelMin = n, this.projection = new l.default.MercatorProjection
				}
				return o(t, [{
					key: "_getRetain",
					value: function(t) {
						return Math.pow(2, t - 18)
					}
				}, {
					key: "getResolution",
					value: function(t, e) {
						return Math.pow(2, 18 - e) * Math.cos(t)
					}
				}, {
					key: "lnglatToTilePixel",
					value: function(t, e) {
						for(var n = this.lnglatToPoint(t, e), i = [], a = 3; a <= 18; a++) {
							var o = a,
								r = Math.floor(n.pointX * this._getRetain(o) / 256),
								l = Math.floor(n.pointY * this._getRetain(o) / 256),
								u = Math.floor(n.pointX * this._getRetain(o) - 256 * r),
								f = Math.floor(n.pointY * this._getRetain(o) - 256 * l);
							i = [].concat(i, [a, r, l, u, f])
						}
						return i
					}
				}, {
					key: "lnglatToPoint",
					value: function(t, e) {
						var n = new l.default.Point(t, e),
							i = this.projection.lngLatToPoint(n);
						return {
							pointX: i.x,
							pointY: i.y
						}
					}
				}, {
					key: "pointToLnglat",
					value: function(t, e) {
						var n = new l.default.Pixel(t, e),
							i = this.projection.pointToLngLat(n);
						return {
							lng: i.lng,
							lat: i.lat
						}
					}
				}, {
					key: "_lngToTileX",
					value: function(t, e) {
						var n = this.lnglatToPoint(t, 0),
							i = Math.floor(n.pointX * this._getRetain(e) / 256);
						return i
					}
				}, {
					key: "_latToTileY",
					value: function(t, e) {
						var n = this.lnglatToPoint(0, t),
							i = Math.floor(n.pointY * this._getRetain(e) / 256);
						return i
					}
				}, {
					key: "lnglatToTile",
					value: function(t, e, n) {
						var i = this._lngToTileX(t, n),
							a = this._latToTileY(e, n);
						return {
							tileX: i,
							tileY: a
						}
					}
				}, {
					key: "_lngToPixelX",
					value: function(t, e) {
						var n = this._lngToTileX(t, e),
							i = this.lnglatToPoint(t, 0),
							a = Math.floor(i.pointX * this._getRetain(e) - 256 * n);
						return a
					}
				}, {
					key: "_latToPixelY",
					value: function(t, e) {
						var n = this._latToTileY(t, e),
							i = this.lnglatToPoint(0, t),
							a = Math.floor(i.pointY * this._getRetain(e) - 256 * n);
						return a
					}
				}, {
					key: "lnglatToPixel",
					value: function(t, e, n) {
						var i = this._lngToPixelX(t, n),
							a = this._latToPixelY(e, n);
						return {
							pixelX: i,
							pixelY: a
						}
					}
				}, {
					key: "_pixelXToLng",
					value: function(t, e, n) {
						var i = (256 * e + t) / this._getRetain(n),
							a = this.pointToLnglat(i, 0);
						return a.lng
					}
				}, {
					key: "_pixelYToLat",
					value: function(t, e, n) {
						var i = (256 * e + t) / this._getRetain(n),
							a = this.pointToLnglat(0, i);
						return a.lat
					}
				}, {
					key: "pixelToLnglat",
					value: function(t, e, n, i, a) {
						var o = (256 * n + t) / this._getRetain(a),
							r = (256 * i + e) / this._getRetain(a),
							l = this.pointToLnglat(o, r);
						return l
					}
				}]), t
			}();
		e.default = u
	}, function(t, e) {
		"use strict";

		function n(t, e) {
			for(var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
			return t
		}

		function i(t, e) {
			for(var n in e) t[n] = e[n]
		}

		function a(t) {
			return "string" == typeof t
		}

		function o(t, e) {
			isNaN(t) && (t = Ib(t), t = isNaN(t) ? 0 : t), a(t) && (t = parseFloat(t)), isNaN(e) && (e = Ib(e), e = isNaN(e) ? 0 : e), a(e) && (e = parseFloat(e)), this.lng = t, this.lat = e
		}

		function r(t, e) {
			this.x = t || 0, this.y = e || 0, this.x = this.x, this.y = this.y
		}

		function l() {}

		function u() {}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var f = void 0,
			h = null;
		o.TL = function(t) {
			return t && 180 >= t.lng && -180 <= t.lng && 74 >= t.lat && -74 <= t.lat
		}, o.prototype.lb = function(t) {
			return t && this.lat == t.lat && this.lng == t.lng
		}, r.prototype.lb = function(t) {
			return t && t.x == this.x && t.y == this.y
		}, l.prototype.nh = function() {
			aa("lngLatToPoint方法未实现")
		}, l.prototype.wi = function() {
			aa("pointToLngLat方法未实现")
		}, u.prototype = new l, n(u, {
			$O: 6370996.81,
			lG: [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
			Au: [75, 60, 45, 30, 15, 0],
			fP: [
				[1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2],
				[-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86],
				[-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37],
				[-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06],
				[3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4],
				[2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]
			],
			iG: [
				[-.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5],
				[.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5],
				[.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5],
				[.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
				[-.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
				[-.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45]
			],
			Z1: function(t, e) {
				if(!t || !e) return 0;
				var n, i, t = this.Fb(t);
				return t ? (n = this.Tk(t.lng), i = this.Tk(t.lat), e = this.Fb(e), e ? this.Pe(n, this.Tk(e.lng), i, this.Tk(e.lat)) : 0) : 0
			},
			Vo: function(t, e) {
				return t && e ? (t.lng = this.JD(t.lng, -180, 180), t.lat = this.ND(t.lat, -74, 74), e.lng = this.JD(e.lng, -180, 180), e.lat = this.ND(e.lat, -74, 74), this.Pe(this.Tk(t.lng), this.Tk(e.lng), this.Tk(t.lat), this.Tk(e.lat))) : 0
			},
			Fb: function(t) {
				if(t === h || t === f) return new o(0, 0);
				var e, n;
				e = new o(Math.abs(t.lng), Math.abs(t.lat));
				for(var i = 0; i < this.lG.length; i++)
					if(e.lat >= this.lG[i]) {
						n = this.fP[i];
						break
					}
				return t = this.gK(t, n), t = new o(t.lng.toFixed(6), t.lat.toFixed(6))
			},
			Eb: function(t) {
				if(t === h || t === f || 180 < t.lng || -180 > t.lng || 90 < t.lat || -90 > t.lat) return new o(0, 0);
				var e, n;
				t.lng = this.JD(t.lng, -180, 180), t.lat = this.ND(t.lat, -74, 74), e = new o(t.lng, t.lat);
				for(var i = 0; i < this.Au.length; i++)
					if(e.lat >= this.Au[i]) {
						n = this.iG[i];
						break
					}
				if(!n)
					for(i = 0; i < this.Au.length; i++)
						if(e.lat <= -this.Au[i]) {
							n = this.iG[i];
							break
						}
				return t = this.gK(t, n), t = new o(t.lng.toFixed(2), t.lat.toFixed(2))
			},
			gK: function(t, e) {
				if(t && e) {
					var n = e[0] + e[1] * Math.abs(t.lng),
						i = Math.abs(t.lat) / e[9],
						i = e[2] + e[3] * i + e[4] * i * i + e[5] * i * i * i + e[6] * i * i * i * i + e[7] * i * i * i * i * i + e[8] * i * i * i * i * i * i,
						n = n * (0 > t.lng ? -1 : 1),
						i = i * (0 > t.lat ? -1 : 1);
					return new o(n, i)
				}
			},
			Pe: function(t, e, n, i) {
				return this.$O * Math.acos(Math.sin(n) * Math.sin(i) + Math.cos(n) * Math.cos(i) * Math.cos(e - t))
			},
			Tk: function(t) {
				return Math.PI * t / 180
			},
			Z3: function(t) {
				return 180 * t / Math.PI
			},
			ND: function(t, e, n) {
				return e != h && (t = Math.max(t, e)), n != h && (t = Math.min(t, n)), t
			},
			JD: function(t, e, n) {
				for(; t > n;) t -= n - e;
				for(; t < e;) t += n - e;
				return t
			}
		}), n(u.prototype, {
			Jm: function(t) {
				return u.Eb(t)
			},
			nh: function(t) {
				return t = u.Eb(t), new r(t.lng, t.lat)
			},
			qh: function(t) {
				return u.Fb(t)
			},
			wi: function(t) {
				return t = new o(t.x, t.y), u.Fb(t)
			},
			fc: function(t, e, n, i, a) {
				if(t) return t = this.Jm(t, a), e = this.Lc(e), new r(Math.round((t.lng - n.lng) / e + i.width / 2), Math.round((n.lat - t.lat) / e + i.height / 2))
			},
			zb: function(t, e, n, i, a) {
				if(t) return e = this.Lc(e), this.qh(new o(n.lng + e * (t.x - i.width / 2), n.lat - e * (t.y - i.height / 2)), a)
			},
			Lc: function(t) {
				return Math.pow(2, 18 - t)
			}
		});
		var s = u.prototype;
		i(s, {
			lngLatToPoint: s.nh,
			pointToLngLat: s.wi
		});
		var c = {
			Point: o,
			Pixel: r,
			MercatorProjection: u
		};
		e.default = c
	}, function(t, e) {
		"use strict";

		function n(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function i(t) {
			return(Math.exp(t) - Math.exp(-t)) / 2
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function() {
				function t(t, e) {
					for(var n = 0; n < e.length; n++) {
						var i = e[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
					}
				}
				return function(e, n, i) {
					return n && t(e.prototype, n), i && t(e, i), e
				}
			}(),
			o = function() {
				function t(e, i) {
					n(this, t), this.levelMax = e, this.levelMin = i
				}
				return a(t, [{
					key: "_getMapSize",
					value: function(t) {
						return Math.pow(2, t)
					}
				}, {
					key: "getResolution",
					value: function(t, e) {
						var n = 12756274 * Math.PI * Math.cos(t) / 256 / this._getMapSize(e);
						return n
					}
				}, {
					key: "_lngToTileX",
					value: function(t, e) {
						var n = (t + 180) / 360,
							i = Math.floor(n * this._getMapSize(e));
						return i
					}
				}, {
					key: "_latToTileY",
					value: function(t, e) {
						var n = t * Math.PI / 180,
							i = (1 + Math.log(Math.tan(n) + 1 / Math.cos(n)) / Math.PI) / 2,
							a = Math.floor(i * this._getMapSize(e));
						return a
					}
				}, {
					key: "lnglatToTile",
					value: function(t, e, n) {
						var i = this._lngToTileX(t, n),
							a = this._latToTileY(e, n);
						return {
							tileX: i,
							tileY: a
						}
					}
				}, {
					key: "_lngToPixelX",
					value: function(t, e) {
						var n = (t + 180) / 360,
							i = Math.floor(n * this._getMapSize(e) * 256 % 256);
						return i
					}
				}, {
					key: "_latToPixelY",
					value: function(t, e) {
						var n = Math.sin(t * Math.PI / 180),
							i = .5 + Math.log((1 + n) / (1 - n)) / (4 * Math.PI),
							a = 255 - Math.floor(i * this._getMapSize(e) * 256 % 256);
						return a
					}
				}, {
					key: "lnglatToPixel",
					value: function(t, e, n) {
						var i = this._lngToPixelX(t, n),
							a = this._latToPixelY(e, n);
						return {
							pixelX: i,
							pixelY: a
						}
					}
				}, {
					key: "_pixelXTolng",
					value: function(t, e, n) {
						var i = t / 256,
							a = (e + i) / this._getMapSize(n) * 360 - 180;
						return a
					}
				}, {
					key: "_pixelYToLat",
					value: function(t, e, n) {
						var a = t / 256,
							o = 180 * Math.atan(i(Math.PI * (-1 + 2 * (e + 1 - a) / this._getMapSize(n)))) / Math.PI;
						return o
					}
				}, {
					key: "pixelToLnglat",
					value: function(t, e, n, i, a) {
						var o = this._pixelXTolng(t, n, a),
							r = this._pixelYToLat(e, i, a);
						return {
							lng: o,
							lat: r
						}
					}
				}]), t
			}();
		e.default = o
	}, function(t, e, n) {
		"use strict";

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function a(t, e) {
			if(!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function o(t, e) {
			if(!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" != typeof e && "function" != typeof e ? t : e
		}

		function r(t, e) {
			if("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var l = function() {
				function t(t, e) {
					for(var n = 0; n < e.length; n++) {
						var i = e[n];
						i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
					}
				}
				return function(e, n, i) {
					return n && t(e.prototype, n), i && t(e, i), e
				}
			}(),
			u = n(1),
			f = i(u),
			h = function(t) {
				function e(t, n) {
					return a(this, e), o(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
				}
				return r(e, t), l(e, [{
					key: "lnglatToQuadkey",
					value: function(t, e, n) {
						var i = t.toString(2),
							a = e.toString(2);
						i = "0".repeat(n - i.length) + i, a = "0".repeat(n - a.length) + a;
						for(var o = "", r = 0; r < n; r++) o = o + a[r] + i[r];
						o = o.replace(/^0*/, "");
						var l = Number.parseInt(o, 2),
							u = l.toString(4);
						return u
					}
				}, {
					key: "quadkeyToLnglat",
					value: function(t) {
						var e = t.length,
							n = Number.parseInt(t, 4),
							i = n.toString(2);
						i.length % 2 != 0 && (i = "0" + i);
						for(var a = "", o = "", r = 0; r < i.length; r++) r % 2 === 0 ? a += i[r] : o += i[r];
						var l = Number.parseInt(a, 2),
							u = Number.parseInt(o, 2);
						return {
							tileX: u,
							tileY: l,
							level: e
						}
					}
				}]), e
			}(f.default);
		e.default = h
	}])
});