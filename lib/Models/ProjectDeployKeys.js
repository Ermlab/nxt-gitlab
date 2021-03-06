// Generated by CoffeeScript 1.7.1
(function() {
  var BaseModel, ProjectKeys, Utils,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  BaseModel = require('../BaseModel');

  Utils = require('../Utils');

  ProjectKeys = (function(_super) {
    __extends(ProjectKeys, _super);

    function ProjectKeys() {
      this.addKey = __bind(this.addKey, this);
      this.getKey = __bind(this.getKey, this);
      this.listKeys = __bind(this.listKeys, this);
      return ProjectKeys.__super__.constructor.apply(this, arguments);
    }

    ProjectKeys.prototype.listKeys = function(projectId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("ProjectKeys::listKeys()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/keys", (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectKeys.prototype.getKey = function(projectId, keyId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("ProjectKeys::getKey()");
      return this.get("projects/" + (Utils.parseProjectId(projectId)) + "/keys/" + (parseInt(keyId)), (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    ProjectKeys.prototype.addKey = function(projectId, params, fn) {
      if (params == null) {
        params = {};
      }
      if (fn == null) {
        fn = null;
      }
      this.debug("ProjectKeys::addKey()");
      return this.post("projects/" + (Utils.parseProjectId(projectId)) + "/keys", params, (function(_this) {
        return function(data) {
          if (fn) {
            return fn(data);
          }
        };
      })(this));
    };

    return ProjectKeys;

  })(BaseModel);

  module.exports = function(client) {
    return new ProjectKeys(client);
  };

}).call(this);
