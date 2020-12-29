class CookiesModel {
    constructor(){
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if(id) {
            // to get one food
            return this.db.find(record => record.id === id);
        } else {
            return this.db;
        }
    }

    create(obj) {
        obj.id = ++this.id;
        this.id.push(obj);
        return obj;
    }

    update(newId, cookiesObj) {
        if(!id) {return null}
        console.log("what is the update?");
        cookiesObj.id = newId;

        // find this obj in the database
        let cookiesObjInDb = this.db.find(record => record.id === newId);
        cookiesObjInDb.id = newId
        
        return cookiesObj;
    }

    delete(id) {
        if(!id) {return null}
        this.db = this.db.filter(function deleteDbItems(recoed) {
            return parseInt(recoed.id) !== parseInt(id);
        })
        return null;
    }
}

module.exports = CookiesModel;