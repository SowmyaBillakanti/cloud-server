class AnimalModel {
    constructor(){
        this.id = 0;
        this.db = [];
    }

    get(id) {
        if(id) {
            // to get one animal
            console.log(typeof parseInt(id));
            return this.db.find(record => record.id === parseInt(id));
        } else {
            return this.db;
        }
    }

    create(obj) {
        obj.id = ++this.id;
        this.db.push(obj);
        return obj;
    }

    update(newId, animalObj) {
        if(!newId) {return null}
        console.log("what is the update?");
        animalObj.id = newId;

        // find this obj in the database
        let animalObjInDatabase = this.db.find(record => record.id === newId);
        animalObjInDatabase.id = newId;
    
        return animalObj;
    }
        

    delete(id) {
        if(!id) {return null}
        this.db = this.db.filter(function deleteDbItems(record) {
            return parseInt(record.id) !== parseInt(id);
        });
        return null;
    }
}

module.exports = AnimalModel;