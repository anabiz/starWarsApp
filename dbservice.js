const instance = null;
class DbService {
    static getDbServiceInstance(){
        return instance ? instance : new DbService();
    }
    async getAllData(){
        try{
            const response = await new Promise((resolve, reject)=>{
                const query = "SELECT * FROM name;";
                
                connection.query(query, (err, results)=>{
                    if(err) reject(new Error(err.message));
                    resolve(results);
                })
            });
           console.log(response[0].Name);
            return response;

        }catch(error){
            console.log(error);
        }
    }

    
    
}
