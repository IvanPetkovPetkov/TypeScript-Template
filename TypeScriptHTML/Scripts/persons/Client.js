var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Persons;
(function (Persons) {
    var Client = (function (_super) {
        __extends(Client, _super);
        function Client(firstName, lastName, Gender, age, email) {
            _super.call(this, firstName, lastName, Gender, age); //reuse the base functionality
            this._email = email;
        }
        Object.defineProperty(Client.prototype, "email", {
            //define getter
            get: function () {
                return this._email;
            },
            enumerable: true,
            configurable: true
        });
        //method log
        Client.prototype.introduce = function () {
            return _super.prototype.introduce.call(this) + ' - ' + this.email;
        };
        Client.prototype.updateMail = function (newEmail) {
            this._email = newEmail;
        };
        __decorate([
            log
        ], Client.prototype, "_email", void 0);
        __decorate([
            log
        ], Client.prototype, "introduce", null);
        __decorate([
            log,
            __param(0, log)
        ], Client.prototype, "updateMail", null);
        Client = __decorate([
            log
        ], Client);
        return Client;
    }(Persons.Person));
    Persons.Client = Client;
})(Persons || (Persons = {}));
//# sourceMappingURL=Client.js.map