'use strict';

module.exports = function filterImage (filter) {
    const { findBy, lang, image_type, orientation, category } = filter;
    let filters = ""
    if(findBy) {
        filters += "&q="+findBy
    }

    if(lang) {
        filters += "&lang="+lang
    } 

    if(image_type) {
       filters += "&image_type="+image_type
   } 

   if(orientation) {
       filters += "&orientation="+orientation
   } 

   if(category) {
       filters += "&caterory="+category
   } 

   return filters;

}