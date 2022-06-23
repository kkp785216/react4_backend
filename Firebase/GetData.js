const {collection, getDocs} = require('firebase/firestore/lite');

// Get a list of cities from your database
async function getCities(db, coll) {
    const citiesCol = collection(db, coll);
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}

module.exports = getCities