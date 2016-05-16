//generic
module Collections {
    export class List<T>  {
        private _collection: T[];

        constructor() {
            this._collection = [];
        }

        add(item: T): void {
            this._collection.push(item);
        }

        get count(): number {
            return this._collection.length;
        }
    }

    export class ListWorkers<T extends interfaces.persons.IWorker>  { 
        private _collection: T[];

        constructor() {
            this._collection = [];
        }

        add(item: T) {
            this._collection.push(item);
        }

        get count() {
            return this._collection.length;
        }
    }

}