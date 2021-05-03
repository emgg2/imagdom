'use strinct';

require('dotenv').config();
const filterImage = require('./filterImage');
const RandomNumber = require('./randomNumber');
var axios = require('axios');


/**
 * Returns a free aleatory image
 * 
 * filter { 
 *      findBy: yellow+flowers,
 *      lang: es,
 *      image_type: photo,
 *      orientation: vertical,
 *      category: nature
 * }
 * 
 * @param {*} filter 
 * @returns object
 */

class imagdom {
    async  getImage (filter){
        const filters = filterImage(filter);
        let url = "https://pixabay.com/api/?key=21445862-84e1dfac4982f99e092affe0e";
        
            if(filters !== "") {
                url += filters;
            }   
            
            let photo = await axios.get(url);
            if(!photo) {
                const error = new Error('No picture available');
                error.status = 404;
                next(error);
                return;
            }
    
            const idPicture = RandomNumber(1, photo.data.hits.length);      
            return {picture: photo.data.hits[idPicture]};

    }
}
module.exports = new imagdom();


