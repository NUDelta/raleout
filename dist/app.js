(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

var Person = require("./model/Person").Person;

global.app = function () {
    var christoph = new Person("Christoph", "Burgdorf");
    console.log(christoph.fullName);
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9DaHJpc3RpbmEvcHJvamVjdHMvZGVsdGEvcmFsZW91dC9zcmMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFRLE1BQU0sV0FBTyxnQkFBZ0IsRUFBN0IsTUFBTTs7QUFFZCxNQUFNLENBQUMsR0FBRyxHQUFHLFlBQVk7QUFDckIsUUFBSSxTQUFTLEdBQUcsSUFBSSxNQUFNLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3BELFdBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0NBQ25DLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGVyc29ufSBmcm9tICcuL21vZGVsL1BlcnNvbic7XG5cbmdsb2JhbC5hcHAgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNocmlzdG9waCA9IG5ldyBQZXJzb24oJ0NocmlzdG9waCcsICdCdXJnZG9yZicpO1xuICAgIGNvbnNvbGUubG9nKGNocmlzdG9waC5mdWxsTmFtZSk7XG59OyJdfQ==
},{"./model/Person":2}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var Person = (function () {
    function Person(firstName, lastName) {
        _classCallCheck(this, Person);

        this.firstName = firstName;
        this.lastName = lastName;
    }

    _createClass(Person, {
        fullName: {
            get: function () {
                return "" + this.firstName + " " + this.lastName;
            }
        }
    });

    return Person;
})();

exports.Person = Person;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwiL1VzZXJzL0NocmlzdGluYS9wcm9qZWN0cy9kZWx0YS9yYWxlb3V0L3NyYy9tb2RlbC9QZXJzb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztJQ1hNLE1BQU07QUFDRyxhQURULE1BQU0sQ0FDSSxTQUFTLEVBQUUsUUFBUSxFQUFFOzhCQUQvQixNQUFNOztBQUVKLFlBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFlBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0tBQzVCOztpQkFKQyxNQUFNO0FBTUosZ0JBQVE7aUJBQUEsWUFBRztBQUNYLDRCQUFVLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsQ0FBRzthQUMvQzs7OztXQVJDLE1BQU07OztRQVVKLE1BQU0sR0FBTixNQUFNIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbiAoZ2xvYmFsKXtcblwidXNlIHN0cmljdFwiO1xuXG52YXIgUGVyc29uID0gcmVxdWlyZShcIi4vbW9kZWwvUGVyc29uXCIpLlBlcnNvbjtcblxuZ2xvYmFsLmFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY2hyaXN0b3BoID0gbmV3IFBlcnNvbihcIkNocmlzdG9waFwiLCBcIkJ1cmdkb3JmXCIpO1xuICAgIGNvbnNvbGUubG9nKGNocmlzdG9waC5mdWxsTmFtZSk7XG59O1xuXG59KS5jYWxsKHRoaXMsdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB7fSlcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0OnV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpOVZjMlZ5Y3k5RGFISnBjM1JwYm1FdmNISnZhbVZqZEhNdlpHVnNkR0V2Y21Gc1pXOTFkQzl6Y21NdllYQndMbXB6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3T3p0SlFVRlJMRTFCUVUwc1YwRkJUeXhuUWtGQlowSXNSVUZCTjBJc1RVRkJUVHM3UVVGRlpDeE5RVUZOTEVOQlFVTXNSMEZCUnl4SFFVRkhMRmxCUVZrN1FVRkRja0lzVVVGQlNTeFRRVUZUTEVkQlFVY3NTVUZCU1N4TlFVRk5MRU5CUVVNc1YwRkJWeXhGUVVGRkxGVkJRVlVzUTBGQlF5eERRVUZETzBGQlEzQkVMRmRCUVU4c1EwRkJReXhIUVVGSExFTkJRVU1zVTBGQlV5eERRVUZETEZGQlFWRXNRMEZCUXl4RFFVRkRPME5CUTI1RExFTkJRVU1pTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCN1VHVnljMjl1ZlNCbWNtOXRJQ2N1TDIxdlpHVnNMMUJsY25OdmJpYzdYRzVjYm1kc2IySmhiQzVoY0hBZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdkbUZ5SUdOb2NtbHpkRzl3YUNBOUlHNWxkeUJRWlhKemIyNG9KME5vY21semRHOXdhQ2NzSUNkQ2RYSm5aRzl5WmljcE8xeHVJQ0FnSUdOdmJuTnZiR1V1Ykc5bktHTm9jbWx6ZEc5d2FDNW1kV3hzVG1GdFpTazdYRzU5T3lKZGZRPT0iLCJjbGFzcyBQZXJzb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpcnN0TmFtZSwgbGFzdE5hbWUpIHtcbiAgICAgICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcbiAgICB9XG5cbiAgICBnZXQgZnVsbE5hbWUoKSB7XG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XG4gICAgfVxufVxuZXhwb3J0IHtQZXJzb259XG4iXX0=
