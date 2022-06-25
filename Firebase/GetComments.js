const {collection, getDocs, orderBy, query, limit, where} = require('firebase/firestore/lite');

// Get a list of cities from your database
async function getComments(db, post_url) {
    const citiesCol = collection(db, "Comments");
    const citySnapshot = await getDocs(query(citiesCol, where('post_url', '==', post_url)));
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

module.exports = getComments