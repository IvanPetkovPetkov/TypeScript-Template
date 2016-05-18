var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Persons;
(function (Persons) {
    var ClientDecorator = (function (_super) {
        __extends(ClientDecorator, _super);
        function ClientDecorator(email, client) {
            _super.call(this, client, email);
        }
        ClientDecorator.prototype.introduce = function () {
            return _super.prototype.introduce.call(this) + "`operation` of ClientDecorator", this.email, " is being called!";
        };
        return ClientDecorator;
    }(Persons.Client));
    Persons.ClientDecorator = ClientDecorator;
})(Persons || (Persons = {}));
//# sourceMappingURL=ClientDecorator.js.map