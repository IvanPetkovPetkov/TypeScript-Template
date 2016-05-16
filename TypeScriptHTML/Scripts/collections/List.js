//generic
var Collections;
(function (Collections) {
    var List = (function () {
        function List() {
            this._collection = [];
        }
        List.prototype.add = function (item) {
            this._collection.push(item);
        };
        Object.defineProperty(List.prototype, "count", {
            get: function () {
                return this._collection.length;
            },
            enumerable: true,
            configurable: true
        });
        return List;
    })();
    Collections.List = List;
    var ListWorkers = (function () {
        function ListWorkers() {
            this._collection = [];
        }
        ListWorkers.prototype.add = function (item) {
            this._collection.push(item);
        };
        Object.defineProperty(ListWorkers.prototype, "count", {
            get: function () {
                return this._collection.length;
            },
            enumerable: true,
            configurable: true
        });
        return ListWorkers;
    })();
    Collections.ListWorkers = ListWorkers;
})(Collections || (Collections = {}));
//# sourceMappingURL=List.js.map